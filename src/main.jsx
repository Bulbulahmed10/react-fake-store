import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Products from "./Components/Products/Products";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import ProductInfo from "./Components/ProductInfo/ProductInfo";

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
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
