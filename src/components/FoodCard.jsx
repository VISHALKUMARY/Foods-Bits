import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white dark:bg-gray-800 p-5 flex flex-col rounded-lg gap-2 shadow-md dark:shadow-gray-700 transition-colors">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out rounded-md"
      />
      <div className="text-sm flex justify-between text-gray-700 dark:text-gray-100">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
        {desc.slice(0, 50)}...
      </p>
      <div className="flex justify-between items-center">
        <span className="flex justify-center items-center text-gray-700 dark:text-yellow-300">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
