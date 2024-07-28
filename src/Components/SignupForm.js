import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    axios.post('http://localhost:3001/signup', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 text-center">SIGNUP</h1>
          <div className="font-medium text-lg md:text-xl text-black mt-5">
            <label htmlFor="name">Username</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="font-medium text-lg md:text-xl text-black mt-5">
            <label htmlFor="email">Email</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="font-medium text-lg md:text-xl text-black mt-5">
            <label htmlFor="password">Password</label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="border-solid border-2 border-black rounded-2xl mt-10 w-full p-2 text-lg md:text-2xl font-semibold bg-black text-white">
            Submit
          </button>
          <div className="text-center mt-5">
            <p className="text-sm md:text-base">Already have an account?</p>
            <Link to="/login" className="text-blue-600 text-sm md:text-base">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
