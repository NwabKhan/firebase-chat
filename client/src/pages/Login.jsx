import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    prompt("Okay");
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-200 ">
      <div className="flex flex-col items-center bg-white gap-4 px-12 py-4 rounded-lg ">
        <span className=" font-semibold font-mono text-lg text-gray-800 text-center ">
          Junaid Chat
        </span>
        <span className=" text-gray-700 font-medium">Login</span>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          You don't have an account? <Link className="text-blue-500 hover:underline" to="/sign-up">Sign Up</Link> 
        </p>
      </div>
    </div>
  );
};

export default Login;
