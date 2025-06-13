import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
     <div
    className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col ${
      activeCart ? "translate-x-0" : "translate-x-full"
    } transition-all duration-500 z-50 shadow-lg`}
  >
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <span className="text-xl font-bold">My Order</span>
      <IoMdClose
        onClick={() => setActiveCart(false)}
        className="border-2 border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer transition"
      />
    </div>

    {/* Scrollable Items Section */}
    <div className="flex-1 overflow-y-auto pr-1">
      {cartItems.length > 0 ? (
        cartItems.map((food) => (
          <ItemCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            qty={food.qty}
          />
        ))
      ) : (
        <h2 className="text-center text-xl font-bold mt-10">Your cart is empty</h2>
      )}
    </div>

    {/* Sticky Checkout Section */}
    <div className="sticky bottom-0 bg-white dark:bg-gray-900 pt-4 mt-2">
      <h3 className="font-semibold">Items: {totalQty}</h3>
      <h3 className="font-semibold">Total Amount: ₹{totalPrice}</h3>
      <hr className="w-full my-2 border-gray-300 dark:border-gray-600" />
      <button
        onClick={() => {
          setActiveCart(false);
          navigate("/success");
        }}
        className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full mb-2 hover:bg-green-600 transition"
      >
        Checkout
      </button>
    </div>
  </div>

  {/* Floating Cart Button */}
 <FaShoppingCart
  onClick={() => setActiveCart(true)}
  className={`rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md text-5xl p-3 fixed bottom-4 right-4 z-50 cursor-pointer ${
    activeCart ? "hidden" : ""
  } ${totalQty > 0 ? "animate-bounce delay-500 transition-all" : ""}`}
/>

</>
  );
};

export default Cart;
