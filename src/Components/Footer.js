import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row gap-10 justify-around p-7">
      <div className="text-white">
        <h1 className="text-xl font-bold">Contact Us</h1>
        <ul className="flex flex-col gap-2 text-yellow-500 mt-5 text-lg">
          <li>Phone:</li>
          <li>Landline:</li>
          <li>Email:</li>
        </ul>
      </div>
      <div className="text-white">
        <h1 className="text-xl font-bold">Social Handles</h1>
        <ul className="flex flex-col gap-2 text-yellow-500 mt-5 text-lg">
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Twitter</Link>
          </li>
          <li>
            <Link to="/">LinkedIn</Link>
          </li>
        </ul>
      </div>
      <div className="text-white">
        <h1 className="text-xl font-bold">Our Services</h1>
        <ul className="flex flex-col gap-2 text-yellow-500 mt-5 text-lg">
          <li>
            <Link to="/">LMS</Link>
          </li>
          <li>
            <Link to="/">Smart Mirror</Link>
          </li>
          <li>
            <Link to="/">Software Solutions</Link>
          </li>
        </ul>
      </div>
      <div className="text-white">
        <h1 className="text-xl font-bold">Newsletter</h1>
        <div className="flex flex-col md:flex-row mt-5">
          <input
            placeholder="Enter your email id"
            className="p-2 mb-2 md:mb-0 rounded-lg md:mr-3"
          />
          <button className="p-2 text-white bg-red-600 rounded-lg">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
