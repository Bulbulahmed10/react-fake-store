import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { deleteCartFromLocalStorage, getShoppingCart } from "../../utilities/localStorage";
import face from "../.././assets/worried-face_1f61f.png"
const Cart = () => {

  const loadedData = useLoaderData();
  const [cart, setCart] = useState(loadedData);

  console.log(cart);

  const [totalQuantity, setTotalQuantity] = useState([]);

  const deleteCart = (id) => {
    const remainingCart = cart.filter((singleCart) => singleCart.id !== id);
    setCart(remainingCart);
    deleteCartFromLocalStorage(id);
  };

  const incrementQuantity = (id) => {
    setTotalQuantity(totalQuantity + 1);
    const storedCart = getShoppingCart();
    console.log({storedCart, loadedData});
 
    const data = []
    for(const itemCart in storedCart) {
     const find = loadedData.find(v => {
      console.log({v});
      return v?.id == itemCart.id
  
     })
     
     console.log(find);
     if(find) {data.push(find)}
     
    }
    console.log({data});
    let itemIndex = data.findIndex((item) => item.id === id);
    data[itemIndex].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(data));
    setCart(data);

  };

  const decrementQuantity = (id) => {
    setTotalQuantity(totalQuantity - 1);
    const storedCart = getShoppingCart();
    let itemIndex = storedCart.findIndex((item) => item.id === id);
    storedCart[itemIndex].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(storedCart));
    setCart(storedCart);

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
    <>
      {cart.length > 0 ? (
        <div>
          <div className="flex w-full max-w-[1440px] m-auto mt-8 gap-8">
            <div className="w-full max-w-[50%] h-[600px] overflow-y-scroll px-4">
              {cart &&
                cart.map((singleCart) => (
                  <CartItem
                    key={singleCart.id}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    totalQuantity={totalQuantity}
                    {...singleCart}
                    deleteCart={deleteCart}
                  />
                ))}
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
        </div>
      ) : (
        <div className="flex items-center justify-center h-[500px]">
          <h2 className="text-4xl font-bold text-red-500">Cart is Empty </h2>
          <img className="w-14 ml-1" src={face} alt="" />
        </div>
      )}
    </>
  );
};

export default Cart;
