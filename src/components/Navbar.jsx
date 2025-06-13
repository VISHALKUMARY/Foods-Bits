import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!isMounted) root.classList.remove("transition-colors");
    else root.classList.add("transition-colors");

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    if (!isMounted) {
      setTimeout(() => setIsMounted(true), 100);
    }
  }, [theme]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md transition-all">
      <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-6 gap-4">
        {/* Branding Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-3xl font-extrabold text-green-600 dark:text-green-400 tracking-tight">
            Foods Bits
          </h1>
        </div>

        {/* Search + Theme Toggle */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <input
            type="search"
            name="search"
            placeholder="Search delicious dishes..."
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-3 px-4 w-full sm:w-[280px] border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-green-500 dark:hover:bg-green-600 shadow-md hover:shadow-lg transition-all"
          >
            {theme === "dark" ? (
              <BsSun className="text-yellow-400 text-xl drop-shadow-sm" />
            ) : (
              <BsMoon className="text-gray-600 text-xl drop-shadow-sm" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
