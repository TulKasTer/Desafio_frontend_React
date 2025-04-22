import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Inicio from "../pages/inicio";

import AgregarProveedorPage from "../pages/agregarProveedor";

import AgregarProductoPage from "../pages/agregarProducto";

import ProductPage from "../pages/ProductPage.tsx";

import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    errorElement: <ErrorPage />,
  },
  
]);

export default router;