import { getShoppingCart } from "./localStorage";

const productsAndCartLoader = async () => {
  const loadedProducts = await fetch("https://dummyjson.com/products");
  const products = await loadedProducts.json();
  const storedCart = getShoppingCart();

  let storedCartArr = [];
  for (const id of storedCart) {
    const addedProduct = products.products.find((pd) => pd.id === id.id);
    storedCartArr.push({ ...addedProduct, quantity: id.quantity });
  }
  return { storedCartArr, products };
};

export default productsAndCartLoader;
