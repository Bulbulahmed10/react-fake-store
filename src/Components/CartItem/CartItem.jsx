import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItem = ({ id, title, thumbnail, price, stock, deleteCart }) => {
  return (
    <div className="flex justify-between border-2 items-center mb-3 p-1 rounded-md">
      <div className="flex gap-2">
        <img className="w-24 h-24 rounded-sm" src={thumbnail} alt={title} />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{title} </h2>
          <p>
            Price:{" "}
            <span className="text-yellow-600 font-bold "> ${price} </span>{" "}
          </p>
          <p>
            Stock: <span className="text-yellow-600 font-bold"> {stock} </span>{" "}
          </p>
        </div>
      </div>
      <button className="bg-red-200 p-2 rounded-full mr-4">
        <TrashIcon onClick={() => deleteCart(id)} className="h-6 w-6 text-red-600" />
      </button>
    </div>
  );
};

export default CartItem;
