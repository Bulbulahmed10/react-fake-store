import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import {
  deleteCartFromLocalStorage,
} from "../../utilities/localStorage";

const Cart = () => {
  const storedCart = useLoaderData();
  const [cart, setCart] = useState(storedCart);

  const deleteCart = (id) => {
    const remainingCart = cart.filter((singleCart) => singleCart.id !== id);
    setCart(remainingCart);
    deleteCartFromLocalStorage(id);
  };

  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price;
  }
  const tax = parseFloat(Math.abs((totalPrice * 7) / 100).toFixed(2))
  const shippingCharge = parseFloat(Math.abs((totalPrice * 5) / 100).toFixed(2))
  const grandTotal = totalPrice + tax + shippingCharge

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
      <div>
        <p>
          Total Price: <span> ${totalPrice} </span>{" "}
        </p>
        <p>
          Tax: <span> ${tax} </span>{" "}
        </p>
        <p>
          Shipping Charge: <span> ${shippingCharge} </span>
        </p>
        <p>
          Grand Total: <span> {grandTotal.toFixed(2)} </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
