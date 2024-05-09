import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Layout from "../pages/layout/layout";
import Products from "../pages/products/products";
import Register from "../pages/register/register";
import ProtectedRoute from "./protectedroute";
import { AuthProvider } from "../auth/authcontext";
import Cart from "../components/cart/cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider><Layout /></AuthProvider>,
        children: [
            { path: "", element: <Home /> },
            {
                path: "/products",
                element: (
                    <ProtectedRoute>
                        <Products />
                    </ProtectedRoute>
                )
            },
            { path: "/cart", element: <Cart /> },
        ],
    },
    {
        path: "/login",
        element: <AuthProvider><Login /></AuthProvider>
    },
    {
        path: "/register",
        element: <AuthProvider><Register /></AuthProvider>
    },
]);