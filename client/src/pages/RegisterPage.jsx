import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className=" grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto mt-2">
          <input type="text" name="name" placeholder="username" />
          <input type="email" name="email" placeholder="your@email.com" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit" className="primary">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
