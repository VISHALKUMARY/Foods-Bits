import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors duration-300 px-4">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center p-8 rounded-2xl shadow-2xl bg-green-50 dark:bg-green-900 text-gray-900 dark:text-white max-w-md w-full"
        >
          <FaCheckCircle className="text-green-500 dark:text-green-300 text-6xl mx-auto mb-4 animate-bounce" />
          <h2 className="text-4xl font-extrabold mb-2">Yay! Order Placed 🍽️</h2>
          <p className="text-lg mb-4">
            Your delicious meal is on its way! 🎊<br />
            Thanks for ordering with <span className="font-semibold">Foods Bits</span>.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition"
          >
            Back to Home
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Success;
