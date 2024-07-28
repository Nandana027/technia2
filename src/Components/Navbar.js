import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import SearchBar from "./Search";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = props;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center text-1.9xl shadow-lg shadow-black-500/40 p-7 w-full bg-white">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <span className=" ml-4 text-lg font-bold">Techies Academia</span>
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
            <NavLink to="/" onClick={handleMenuToggle}>Home</NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/about" onClick={handleMenuToggle}>About Us</NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/contact" onClick={handleMenuToggle}>Contact Us</NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/blogs" onClick={handleMenuToggle}>Blogs</NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/products" onClick={handleMenuToggle}>Products</NavLink>
          </li>
          <li className="hover:text-yellow-600 no-underline hover:underline">
            <NavLink to="/courses" onClick={handleMenuToggle}>Courses</NavLink>
          </li>
        </ul>
      </nav>

      <div className="hidden md:block">
        <SearchBar />
      </div>

      <div className="flex gap-3">
        {!isLoggedIn && (
          <>
            <Link to="/login" onClick={handleMenuToggle}>
              <button className="text-white bg-black px-7 font-bold p-3 rounded-xl underline hover:bg-yellow-600 hover:text-black" >Log In</button>
            </Link>
            <Link to="/signup" onClick={handleMenuToggle}>
              <button className="text-white bg-black px-7 font-bold p-3 rounded-xl underline hover:bg-yellow-600 hover:text-black ">Sign Up</button>
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/dashboard">
              <button onClick={() => setIsLoggedIn(false)}>Dashboard</button>
            </Link>
            <Link to="/login" onClick={handleMenuToggle}>
              <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
