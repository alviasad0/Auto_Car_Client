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




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element :<Home></Home>
      },
      {
        path: '/login',
        element :<Login></Login>
      },
      {
        path: '/register',
        element :<Register></Register>
      },
      {
        path: '/addProduct',
        element :<AddProduct></AddProduct>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
