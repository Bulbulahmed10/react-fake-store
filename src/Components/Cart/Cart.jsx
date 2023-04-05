import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { deleteCartFromLocalStorage, getShoppingCart } from "../../utilities/localStorage";

const Cart = () => {
  const storedCart = useLoaderData();
  const [cart, setCart] = useState(storedCart);

  const deleteCart = (id) => {
      const remainingCart = cart.filter(singleCart => singleCart.id !== id)
      setCart(remainingCart)
     deleteCartFromLocalStorage(id);
  };

  return (
    <div className="flex w-full max-w-[1440px] m-auto mt-4 gap-8">
      <div className="w-full max-w-[50%]">
        {cart.length > 0 ? (
          cart.map((singleCart) => (
            <CartItem
              key={singleCart.id}
              {...singleCart}
              deleteCart={deleteCart}
            />
          ))
        ) : (
          <h4 className="text-2xl font-bold text-red-600 text-center">
            Cart is empty
          </h4>
        )}
      </div>
      <div>dfdf</div>
    </div>
  );
};

export default Cart;
