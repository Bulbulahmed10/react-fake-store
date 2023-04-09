import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ErrorRoute from "./Components/ErrorRoute/ErrorRoute";
import Cart from "./Components/Cart/Cart";
import productsAndCartLoader from "./utilities/productAndCartLoader";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    loader: productsAndCartLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductInfo />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
