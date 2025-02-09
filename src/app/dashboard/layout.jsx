"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

const DashboardLayout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`bg-blue-600 text-white p-4 shadow-md fixed w-full z-10 transition-transform ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 mr-4"
              onClick={() => signOut()}
            >
              Sign out
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={toggleHeader}
            >
              {isHeaderVisible ? "Hide" : "Show"} Header
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 mt-16">{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
