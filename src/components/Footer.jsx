import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 text-center border-t border-gray-300 dark:border-gray-700 
      bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Saif Ansari. All rights reserved.
      </p>
    </footer>
  );
}
