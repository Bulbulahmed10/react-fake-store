import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { deleteCartFromLocalStorage } from "../../utilities/localStorage";
import { CartContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const deleteCart = (id) => {
    const remainingCart = cart.filter((singleCart) => singleCart.id !== id);
    setCart(remainingCart);
    deleteCartFromLocalStorage(id);
  };

  const clearAllCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
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
    <div className="flex flex-col md:flex-row w-full max-w-[1440px] h-full md:h-[calc(100vh-80px)] xl:m-auto mt-8 lg:gap-8 ">
      <div className="w-full md:max-w-[50%] h-auto overflow-y-auto md:overflow-y-auto lg:px-4 md:px-2">
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
      <div className="my-4 px-4 w-full">
        <div className="flex justify-between  ">
          <div className="flex flex-col gap-4">
            <p className="text-2xl lg:text-3xl ">Total Price: </p>
            <p className="text-2xl lg:text-3xl ">Tax: </p>
            <p className="text-2xl lg:text-3xl ">Shipping Charge: </p>
            <hr className="border-2 border-yellow-700" />
            <p className="text-2xl lg:text-3xl  ">Grand Total: </p>
          </div>
          <div className="flex flex-col gap-4 text-end">
            <span className="font-extrabold font-mono text-2xl lg:text-3xl text-yellow-500">
              ${totalPrice.toFixed(2)}
            </span>
            <span className="font-extrabold font-mono text-2xl lg:text-3xl text-yellow-500">
              ${tax}
            </span>
            <span className="font-extrabold font-mono text-2xl lg:text-3xl text-yellow-500">
              ${shippingCharge}
            </span>
            <hr className="border-2 border-yellow-700" />
            <span className="font-extrabold font-mono text-2xl lg:text-3xl text-yellow-500">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-8 ">
          {cart.length < 1 ? (
            <Link to="/products">
              <button className="btn btn-warning mr-6">buy product</button>
            </Link>
          ) : (
            <button
              onClick={clearAllCart}
              className="btn btn-warning mr-3 md:mr-6">
              clear cart
            </button>
          )}

          {cart.length > 0 && (
            <button className="btn btn-accent">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
