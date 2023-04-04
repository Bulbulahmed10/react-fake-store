import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 my-8 max-w-[1440px] m-auto">
      {products &&
        products.products.map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
};

export default Products;
