import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../App";

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div>
      <div className="flex items-center justify-between px-2 md:px-16 py-2 fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
        <h2 className="text-sm md:text-xl font-serif font-bold">
          <Link to="/">AHMED SHOP</Link>
        </h2>
        <nav className="flex gap-4 md:gap-8 relative">
          <ActiveLink to="/products">
            <p className="text-sm md:text-base">Products</p>{" "}
          </ActiveLink>
          <ActiveLink to="/cart">
            <ShoppingCartIcon className="h-6 w-6 " />{" "}
          </ActiveLink>

          <ActiveLink to="/contact">
            {" "}
            <p className="text-sm md:text-base">Contact us</p>{" "}
          </ActiveLink>

          {cart.length > 0 && (
            <span className="absolute ml-[90px] text-sm -mt-2 md:ml-[120px] font-medium text-blue-500 bg-blue-100 px-1 rounded-full ">
              {cart.length < 10 ? "0" + cart.length : cartArr.length}
            </span>
          )}
        </nav>
        <img
          className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
