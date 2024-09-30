import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOutPage";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProductsManagement from "../pages/ProductManagement";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainLayout from "../components/layouts/MainLayout";
import ProtectRoute from "./ProtectRoute";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AddCategory from "../pages/AddCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      
      {
        path: "/:category",
        element: <Products />,
      },
      {
        path: "/:products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProtectRoute><ProductDetails></ProductDetails></ProtectRoute>,
      },
      {
        path: "product-management",
        element:<AdminRoute>
          <ProductsManagement></ProductsManagement>
        </AdminRoute>
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
 
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    
      {
        path: "product-management",
        element:<AdminRoute>
          <ProductsManagement></ProductsManagement>
        </AdminRoute>
      },
      {
        path: "create-category",
        element:<AdminRoute>
          <AddCategory></AddCategory>
        </AdminRoute>
      },
     
 
    ],
  },
  {
    path: "login",
    element:<Login></Login>

},

{
    path: "register",
    element:<Register></Register>

},
]);
