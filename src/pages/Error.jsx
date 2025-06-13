import React from "react";
import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <BiErrorCircle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl md:text-5xl font-bold mb-2">Oops! Something went wrong</h1>
      <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-6 text-center max-w-xl">
        We're sorry, but the page you're looking for doesn't exist or an unexpected error has occurred.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
