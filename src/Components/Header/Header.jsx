import React from "react";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1440px] m-auto p-2 ">
      <h2 className="text-xl font-serif font-bold">
        <Link to="/">AHMED SHOP</Link>
      </h2>
      <nav className="flex gap-8">
        <ActiveLink to="/products">Products</ActiveLink>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
        <ActiveLink to="/contact">Contact us</ActiveLink>
      </nav>
      <img
        className="w-12 h-12 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
    </div>
  );
};

export default Header;
