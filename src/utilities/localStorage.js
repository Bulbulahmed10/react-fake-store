import { toast } from "react-toastify";

const addToCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingProduct = cart.find((product) => product.id === id);

  if (existingProduct) {
    toast("Cart Already Added");
    return;
  } else {
    cart.push({ id, quantity: 1 });
    toast("Cart Added");
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

const getShoppingCart = () => {
  let shoppingCart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteCartFromLocalStorage = (id) => {
  const shoppingCart = getShoppingCart();
  const remainingCart = shoppingCart.filter(
    (singleCart) => singleCart.id !== id
  );
  localStorage.setItem("cart", JSON.stringify(remainingCart));
};

export { addToCart, getShoppingCart, deleteCartFromLocalStorage };
