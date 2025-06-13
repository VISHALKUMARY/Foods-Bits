import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 relative">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-red-400 transition"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px] object-cover rounded" />
      <div className="leading-5 w-full">
        <h2 className="font-bold">{name}</h2>
        <div className="flex justify-between items-center mt-1">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : null
              }
              className="border-2 border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-green-500 hover:border-transparent rounded-md p-1 text-xl transition-all cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : null
              }
              className="border-2 border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-green-500 hover:border-transparent rounded-md p-1 text-xl transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
