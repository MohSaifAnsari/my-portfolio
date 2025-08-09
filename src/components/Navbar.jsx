import React from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 flex justify-between items-center shadow-lg 
      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
      dark:from-gray-800 dark:via-gray-900 dark:to-black 
      transition-all duration-500">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-extrabold text-white tracking-wide">
        MyPortfolio
      </h1>

      
    </nav>
  );
}
