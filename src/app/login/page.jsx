"use client";
import { signIn } from "next-auth/react";
import { googleIcon, githubIcon } from "../ui/components/component";

const LogIn = () => {
  return (
    <div className="flex w-[100%] items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <button
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => signIn("google")}
        >
          <div className="mr-2">{googleIcon}</div>
          Google
        </button>
        <div className="flex items-center justify-center mb-4">
          <div className="w-full h-0.5 bg-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
        <button
          className="w-full flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => signIn("github")}
        >
          <div className="mr-2">{githubIcon}</div>
          Github
        </button>
      </div>
    </div>
  );
};

export default LogIn;
