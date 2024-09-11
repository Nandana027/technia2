import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [hasReloaded, setHasReloaded] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        console.log(result.status);
        if (result.status === 200) {
          const { token } = result.data;
          console.log(token);

          localStorage.setItem("token", token);
          navigate("/dashboard");
          if (!hasReloaded) {
            setHasReloaded(true);
            window.location.reload();
          }
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white border-2 border-gray-500 rounded-md shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-black text-center">
            Login
          </h1>
          <div className="font-medium text-lg md:text-xl text-black mt-5">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-800 focus:border-indigo-800 sm:text-bold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="font-medium text-lg md:text-xl text-black mt-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="border-solid border-2 border-black rounded-2xl mt-10 w-full p-2 text-lg md:text-2xl font-semibold bg-black text-white">
              Login
            </button>
          </div>
          <div className="text-center mt-5">
            <p className="text-sm md:text-base">Do not have an account?</p>
            <Link
              to="/signup"
              className="text-blue-800 text-sm md:text-base font-bold underline"
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
