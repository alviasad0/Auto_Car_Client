import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import AddProduct from './Pages/AddProduct'
import BrandDetails from './Pages/BrandDetails';
import ProductDetails from './Components/ProductDetails';
import ProductUpdate from './Components/ProductUpdate';
import AuthProvider from './Providers/AuthProvider'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brandDetails/:brand_name",
        element: <BrandDetails></BrandDetails>,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "productUpdate/:id",
        element: <ProductUpdate></ProductUpdate>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
