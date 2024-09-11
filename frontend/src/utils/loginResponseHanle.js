import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import jwtDecode from "jwt-decode";

import SearchBar from "./Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  // useLocation hook to monitor URL changes
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsLoggedIn(true);
        setEmail(decodedToken.email);
      } catch (error) {
        console.error("Invalid token:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [location]); // dependency array includes location

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setEmail("");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="flex justify-between items-center text-1.9xl shadow-lg shadow-black-500/40 p-7 w-full bg-white">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <span className="ml-4 text-lg font-bold">Techies Academia</span>
      </Link>

      <div className="md:hidden">
        <button onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-row gap-5 text-black font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-5 hover">
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/" onClick={handleMenuToggle}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/about" onClick={handleMenuToggle}>
              About Us
            </NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/contact" onClick={handleMenuToggle}>
              Contact Us
            </NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/blogs" onClick={handleMenuToggle}>
              Blogs
            </NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/products" onClick={handleMenuToggle}>
              Products
            </NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/courses" onClick={handleMenuToggle}>
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="hidden md:block">
        <SearchBar />
      </div>

      <div className="flex gap-3">
        {!isLoggedIn ? (
          <>
            <Link to="/login" onClick={handleMenuToggle}>
              <button className="text-white bg-black px-7 font-bold p-3 rounded-xl underline hover:bg-yellow-600 hover:text-black">
                Log In
              </button>
            </Link>
            <Link to="/signup" onClick={handleMenuToggle}>
              <button className="text-white bg-black px-7 font-bold p-3 rounded-xl underline hover:bg-yellow-600 hover:text-black ">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <>
            <span className="font-bold text-lg">Hello, {email}</span>
            <Link to="/dashboard">
              <button className="text-white bg-black px-7 font-bold p-3 rounded-xl underline hover:bg-yellow-600 hover:text-black">
                Dashboard
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="text-white bg-black px-7 font-bold p-3 rounded-xl underline hover:bg-yellow-600 hover:text-black"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
