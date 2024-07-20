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
  const navigate=useNavigate();

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
      .then(result => console.log(result))
      navigate('/login')
      .catch(err => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center ml-[40%] mt-[10%] gap-10 border-2 w-[30%] h-[30%] p-10 rounded-xl shadow-lg shadow-black">
      <form onSubmit={handleSubmit} className="">
        <h1 className="text-5xl font-bold text-yellow-600 text-center">SIGNUP</h1>
        <div className="font-medium text-xl text-black mt-[15%]">
          <label htmlFor="name">USERNAME</label>
          <input
            className="border border-gray-400 ml-[5%] rounded-lg"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="font-medium text-xl text-black mt-5">
          <label htmlFor="email">EMAIL</label>
          <input
            className="border border-gray-400 ml-[16%] rounded-lg"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="font-medium text-xl text-black mt-5">
          <label htmlFor="password">PASSWORD:</label>
          <input
            className="border border-gray-400 ml-[4%] rounded-lg"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="border-solid border-2 border-black rounded-2xl mt-10 w-[100%] p-2 text-2xl font-semibold bg-black text-white">
          Submit
        </button>
        <div className="text-center mt-5">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-600">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
