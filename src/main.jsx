import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ErrorRoute from "./Components/ErrorRoute/ErrorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "product/:id",
        element: <ProductInfo />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
