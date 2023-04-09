import React, { createContext, useEffect, useState } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import LoaderAnimation from "./Components/LoaderAnimation/LoaderAnimation";
import Modal from "./Components/Modal/Modal";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { storedCartArr, products } = useLoaderData();
  const [cart, setCart] = useState(storedCartArr);
  let [isOpen, setIsOpen] = useState(false);

  const cartAlert = sessionStorage.getItem("alert");
  if (cart.length > 0 && cartAlert !== "true") {
    setIsOpen(true);
    sessionStorage.setItem("alert", true);
  }

  const navigation = useNavigation();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `AHMED SHOP - HOME`;
    } else {
      document.title = `AHMED SHOP ${location.pathname
        .replace("/", "- ")
        .toUpperCase()}`;
    }
    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname]);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="text-center mt-20">
          {navigation.state === "loading" && <LoaderAnimation />}
        </div>
        <Outlet />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
