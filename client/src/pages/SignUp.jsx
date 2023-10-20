import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUP = () => {
  const [err, setErr] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    prompt("Okay");
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-200 ">
      <div className="flex flex-col items-center bg-white gap-4 px-20 py-4 rounded-lg ">
        <span className=" font-semibold font-mono text-lg text-gray-800 text-center ">
          Junaid Chat
        </span>
        <span className=" text-gray-700 font-medium">Register</span>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="p-4 w-60 border-b border-blue-300 text-gray-600 outline-0"
            type="text"
            placeholder="username"
          />
          <input
            className="p-4 w-60 border-b border-blue-300 text-gray-600 outline-0"
            type="email"
            placeholder="email"
          />
          <input
            className="p-4 w-60 border-b border-blue-300 text-gray-600 outline-0"
            type="password"
            placeholder="password"
          />
          <input hidden type="file" id="avatar" accept="image/*" />
          <label htmlFor="avatar" className="flex gap-2 items-center">
            <img className="w-8 h-8" src="/vite.svg" alt="Avatar" />
            <span className="text-gray-400 text-sm">add an avartar</span>
          </label>
          <button className=" border-none p-3 bg-blue-300 text-white text-lg font-bold">
            Sign in
          </button>
          {err && (
            <span className="text-sm text-red-600 text-center">
              Something went wrong
            </span>
          )}
        </form>
        <p className="my-3 text-sm text-gray-500">
          Have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/sign-in">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUP;
