import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../utilities/localStorage";

const ProductInfo = () => {
  const { brand, category, description, images, price, rating, stock, title, id } =
    useLoaderData();

  function ratingGenerator(rating) {
    const roundedRating = Math.round(rating * 100) / 100; // Round to 2 decimal places

    return (
      <div>
        {[...Array(Math.floor(roundedRating))].map((star, index) => {
          return (
            <span key={index} className="text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
            </span>
          );
        })}
        {roundedRating - Math.floor(roundedRating) >= 0.5 ? (
          <span className="text-yellow-500">
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] m-auto flex gap-6 mt-8">
      <div className="grid grid-cols-2 w-[45%] gap-2">
        {images &&
          images.map((image, index) => (
            <img key={index} className="w-[320px] h-[200px]" src={image} />
          ))}
      </div>
      <div className="w-[50%] flex flex-col gap-2">
        <h2 className="text-3xl font-semibold "> {title} </h2>
        <p className="mt-2"> {description} </p>
        <p className="my-2 text-sm font-bold">
          Brand:
          <span className="mt-4 bg-yellow-200 font-semibold w-fit p-1 rounded-md ml-1">
            {brand}
          </span>
        </p>
        <p className="my-2 text-sm font-bold">
          Category:
          <span className="bg-red-300 p-1 rounded-md ml-1">{category} </span>
        </p>
        <div className="mt-2 text-sm font-bold">
          Ratings:
          <span className="inline-flex ml-1">{ratingGenerator(rating)}</span>
        </div>
        <p className="my-2 text-sm font-bold">
          Stock:
          <span> {stock} pcs </span>
        </p>
        <p className="text-lg bg-red-100 p-2 ml-1 rounded-md w-fit font-bold text-red-600 ">
          ${price}
        </p>
        <div className="flex gap-4">
          <Link to="/products" className="btn btn-success mt-4 w-[50%] m-auto">
            Go Back
          </Link>
          <button onClick={() => addToCart(id)} className="btn btn-info mt-4 w-[50%] m-auto">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
