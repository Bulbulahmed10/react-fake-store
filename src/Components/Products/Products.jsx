import React, { useContext } from "react";
import Product from "../Product/Product";
import { CartContext, ProductContext } from "../../App";
import { addToDB } from "../../utilities/localStorage";
const Products = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);

    addToDB(product.id);
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 my-8 max-w-[1440px] m-auto">
      {products?.products?.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;
