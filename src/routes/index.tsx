import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../components/layouts/AuthLayout";
import DefaultLayout from "../components/layouts/DefaultLayout";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import PageNotFound from "../pages/404";
import AdminDashboard from "../pages/admin";
import ProductManagement from "../pages/admin/ProductManagement";
import OrderManagement from "../pages/admin/OrderManagement";
import UserManagement from "../pages/admin/UserManagement";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/sign-up";
import Unauthorized from "../pages/auth/unauthorized";
import Home from "../pages/home";
import ProductPage from "../pages/product";
import ProductsPage from "../pages/products";
import StaffDashboard from "../pages/staff";
import { Protected } from "./protected";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        path: '/',
        errorElement: '',
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/ao-dai',
                element: <ProductsPage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />
            },
            {
                path: 'unauthorized',
                element: <Unauthorized />
            },
            {
                element: <Protected requiredRole="staff" />,
                children: [
                    {
                        path: 'staff',
                        element: <StaffDashboard />
                    }
                ]
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
        ]
    },
    {
        element: <Protected requiredRole="admin" />,
        children: [
            {
                path: 'admin',
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <AdminDashboard />
                    },
                    // Product Management Routes
                    {
                        path: 'products',
                        children: [
                            {
                                path: 'list',
                                element: <ProductManagement />
                            },
                            {
                                path: 'add',
                                async lazy() {
                                    const { AddProduct } = await import('../pages/admin/products/AddProduct');
                                    return { Component: AddProduct };
                                }
                            },
                            {
                                path: 'edit/:id',
                                async lazy() {
                                    const { EditProduct } = await import('../pages/admin/products/EditProduct');
                                    return { Component: EditProduct };
                                }
                            },
                            {
                                path: 'categories',
                                async lazy() {
                                    const { CategoryManagement } = await import('../pages/admin/products/CategoryManagement');
                                    return { Component: CategoryManagement };
                                }
                            }
                        ]
                    },
                    // Order Management Routes
                    {
                        path: 'orders',
                        children: [
                            {
                                index: true,
                                element: <OrderManagement />
                            },
                            {
                                path: 'pending',
                                async lazy() {
                                    const { PendingOrders } = await import('../pages/admin/orders/PendingOrders');
                                    return { Component: PendingOrders };
                                }
                            },
                            {
                                path: 'processing',
                                async lazy() {
                                    const { ProcessingOrders } = await import('../pages/admin/orders/ProcessingOrders');
                                    return { Component: ProcessingOrders };
                                }
                            },
                            {
                                path: 'completed',
                                async lazy() {
                                    const { CompletedOrders } = await import('../pages/admin/orders/CompletedOrders');
                                    return { Component: CompletedOrders };
                                }
                            },
                            {
                                path: 'cancelled',
                                async lazy() {
                                    const { CancelledOrders } = await import('../pages/admin/orders/CancelledOrders');
                                    return { Component: CancelledOrders };
                                }
                            },
                            {
                                path: ':id',
                                async lazy() {
                                    const { OrderDetail } = await import('../pages/admin/orders/OrderDetail');
                                    return { Component: OrderDetail };
                                }
                            }
                        ]
                    },
                    // User Management Routes
                    {
                        path: 'users',
                        children: [
                            {
                                index: true,
                                element: <UserManagement />
                            },
                            {
                                path: 'customers',
                                async lazy() {
                                    const { CustomerManagement } = await import('../pages/admin/users/CustomerManagement');
                                    return { Component: CustomerManagement };
                                }
                            },
                            {
                                path: 'staff',
                                async lazy() {
                                    const { StaffManagement } = await import('../pages/admin/users/StaffManagement');
                                    return { Component: StaffManagement };
                                }
                            },
                            {
                                path: 'admins',
                                async lazy() {
                                    const { AdminManagement } = await import('../pages/admin/users/AdminManagement');
                                    return { Component: AdminManagement };
                                }
                            }
                        ]
                    },
                    // Analytics Routes
                    {
                        path: 'analytics',
                        children: [
                            {
                                path: 'sales',
                                async lazy() {
                                    const { SalesAnalytics } = await import('../pages/admin/analytics/SalesAnalytics');
                                    return { Component: SalesAnalytics };
                                }
                            },
                            {
                                path: 'customers',
                                async lazy() {
                                    const { CustomerAnalytics } = await import('../pages/admin/analytics/CustomerAnalytics');
                                    return { Component: CustomerAnalytics };
                                }
                            },
                            {
                                path: 'products',
                                async lazy() {
                                    const { ProductAnalytics } = await import('../pages/admin/analytics/ProductAnalytics');
                                    return { Component: ProductAnalytics };
                                }
                            }
                        ]
                    },
                    // Settings Routes
                    {
                        path: 'settings',
                        children: [
                            {
                                path: 'general',
                                async lazy() {
                                    const { GeneralSettings } = await import('../pages/admin/settings/GeneralSettings');
                                    return { Component: GeneralSettings };
                                }
                            },
                            {
                                path: 'payment',
                                async lazy() {
                                    const { PaymentSettings } = await import('../pages/admin/settings/PaymentSettings');
                                    return { Component: PaymentSettings };
                                }
                            },
                            {
                                path: 'shipping',
                                async lazy() {
                                    const { ShippingSettings } = await import('../pages/admin/settings/ShippingSettings');
                                    return { Component: ShippingSettings };
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

const Index = () => {
    return (
        <RouterProvider router={router} />
    )
};

export default Index;