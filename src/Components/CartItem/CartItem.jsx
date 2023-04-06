import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import add from "../.././assets/add.png";
import minus from "../.././assets/minus.png";
import { getShoppingCart } from "../../utilities/localStorage";

const CartItem = ({ id, title, thumbnail, price, quantity, deleteCart }) => {
  const [totalQuantity, setTotalQuantity] = useState(quantity);

  const incrementQuantity = (id) => {
    setTotalQuantity(totalQuantity + 1);
    const storedCart = getShoppingCart();
    let itemIndex = storedCart.findIndex((item) => item.id === id);
    storedCart[itemIndex].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };

  const decrementQuantity = (id) => {
    setTotalQuantity(totalQuantity - 1);
    const storedCart = getShoppingCart();
    let itemIndex = storedCart.findIndex((item) => item.id === id);
    storedCart[itemIndex].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };

  return (
    <div className="flex justify-between border-2 items-center mb-3 p-1 rounded-md">
      <div className="flex gap-2">
        <img
          className="w-24 h-auto object-cover rounded-sm"
          src={thumbnail}
          alt={title}
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{title} </h2>
          <p>
            Price:{" "}
            <span className="text-yellow-600 font-bold "> ${price} </span>{" "}
          </p>
          <p>
            Quantity:{" "}
            <span className="text-yellow-600 font-bold"> {totalQuantity} </span>
          </p>
          <p>
            Total Price:{" "}
            <span className="text-yellow-600 font-bold">
              {" "}
              ${price * totalQuantity}{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-14">
        <div className="flex gap-6 items-center ">
          {totalQuantity > 1 && (
            <img
              onClick={() => decrementQuantity(id)}
              className="w-5 h-5 cursor-pointer"
              src={minus}
              alt=""
            />
          )}
          <img
            onClick={() => incrementQuantity(id)}
            className="w-5 h-5 cursor-pointer"
            src={add}
            alt=""
          />
        </div>
        <button className="bg-red-200 p-2 rounded-full mr-4">
          <TrashIcon
            onClick={() => deleteCart(id)}
            className="h-6 w-6 text-red-600"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
