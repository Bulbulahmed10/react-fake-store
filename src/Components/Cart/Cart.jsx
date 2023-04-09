import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { deleteCartFromLocalStorage } from "../../utilities/localStorage";

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
    totalPrice += item.price * item.quantity;
  }
  const tax = parseFloat(Math.abs((totalPrice * 7) / 100).toFixed(2));
  const shippingCharge = parseFloat(
    Math.abs((totalPrice * 5) / 100).toFixed(2)
  );
  const grandTotal = totalPrice + tax + shippingCharge;

  return (
    <div className="flex w-full max-w-[1440px] h-[calc(100vh-80px)] m-auto mt-8 gap-8">
      <div className="w-full max-w-[50%] overflow-y-auto px-4" >
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
      <div className="flex justify-between w-full px-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-3xl ">Total Price: </p>
          <p className="text-3xl ">Tax: </p>
          <p className="text-3xl ">Shipping Charge: </p>
          <hr className="border-2 border-yellow-700" />
          <p className="text-3xl  ">Grand Total: </p>
        </div>
        <div className="flex flex-col gap-4 text-end">
          <span className="font-extrabold font-mono text-3xl text-yellow-500">
            ${totalPrice.toFixed(2)}
          </span>
          <span className="font-extrabold font-mono text-3xl text-yellow-500">
            ${tax}
          </span>
          <span className="font-extrabold font-mono text-3xl text-yellow-500">
            ${shippingCharge}
          </span>
          <hr className="border-2 border-yellow-700" />
          <span className="font-extrabold font-mono text-3xl text-yellow-500">
            ${grandTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
