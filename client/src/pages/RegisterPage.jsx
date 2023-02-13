import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", { name, email, password });
      alert("Registration Successful!");
    } catch (error) {
      alert(`Error: ${error}. Registration Failed. `);
    }
  };

  return (
    <div className=" grow flex items-center justify-around">
      <div className="mb-48">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto mt-2" onSubmit={registerUser}>
          <input
            type="text"
            name="name"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
