import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, handleAddToCart }) => {
  const { id, title, description, price, thumbnail } = product;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-full">
        <img
          className="h-[200px] w-full object-contain"
          src={thumbnail}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <span className="text-lg font-semibold bg-yellow-400 w-fit p-2 rounded-lg">
          {" "}
          ${price}{" "}
        </span>
        <div className="flex gap-4 mt-2">
          <button>
            <Link
              to={`/product/${id}`}
              state={title}
              className="btn btn-success">
              Product Info
            </Link>
          </button>

          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
