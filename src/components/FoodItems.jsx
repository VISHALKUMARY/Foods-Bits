import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Icon for success

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => {
    toast.success(`${name} added to cart!`);
  };

  const filteredFood = FoodData.filter((food) => {
    const nameMatch = food.name.toLowerCase().includes(search.toLowerCase());
    return category === "All"
      ? nameMatch
      : food.category === category && nameMatch;
  });

  return (
    <>
      {/* Toast Notifications */}
      <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    success: {
      icon: <AiOutlineCheckCircle className="text-green-400 text-xl" />,
      style: {
        background: "#1f2937", // gray-800
        color: "#f9fafb",       // gray-50
        borderRadius: "12px",
        padding: "14px 20px",
        fontSize: "0.95rem",
        fontWeight: "500",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
      },
    },
  }}
/>

      {/* Food Grid */}
      <div className="w-full">
        {filteredFood.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mt-10">
            No food items found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-0 mt-10">
            {filteredFood.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FoodItems;
