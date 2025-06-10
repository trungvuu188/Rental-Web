import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Authentication from "../Pages/Authentication";
import ResetPass from "../Components/Authentication/Reset/ResetPass";
import ProductDetails from "../Pages/ProductDetails";
import BlogDetails from "../Components/Blog/BlogDetails/BlogDetails";
import TermsConditions from "../Pages/TermsConditions";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import DefaultLayout from "../layouts/DefaultLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "loginSignUp",
        element: <Authentication />,
      },
      {
        path: "resetPassword",
        element: <ResetPass />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "product",
        element: <ProductDetails />,
      },
      {
        path: "'BlogDetails'",
        element: <BlogDetails />,
      },
      {
        path: "terms",
        element: <TermsConditions />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  }
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
