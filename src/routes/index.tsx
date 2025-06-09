import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../components/layouts/AuthLayout";
import DefaultLayout from "../components/layouts/DefaultLayout";
import PageNotFound from "../pages/404";
import AdminDashboard from "../pages/admin";
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
        errorElement: '',//Show when loading error,
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
                element: <Protected requiredRole="admin" />,
                children: [
                    {
                        path: '/admin',
                        element: <AdminDashboard />
                    }
                ]
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
    }
])

const Index = () => {
    return (
        <RouterProvider router={router} />
    )
};

export default Index;