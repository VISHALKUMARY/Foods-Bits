import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      {/* Add some spacing and container padding */}
      <main className="px-4 md:px-10 lg:px-20 py-6 flex flex-col gap-10">
        <CategoryMenu />

        {/* FoodItems Section */}
        <section className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Explore Our Delicious Food
          </h2>
          <FoodItems />
        </section>

        {/* Cart Section */}
        <aside >

          <Cart />
        </aside>
      </main>

    
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-br from-green-100 to-green-300 dark:from-green-800 dark:to-green-600 rounded-b-3xl -z-10 blur-xl opacity-10"></div>
    </div>
  );
};

export default Home;
