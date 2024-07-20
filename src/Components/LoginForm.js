import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result =>{ console.log(result)

      if(result.data === "success"){
        navigate('/')

      }
    })
      .catch(err => console.log(err))
    
  }

  return (
    <div className='flex flex-col justify-center ml-[40%] mt-[10%] gap-10 border-2  w-[30%] h-[30%] p-10 rounded-xl shadow-lg shadow-black'>
      
        <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className='text-5xl font-bold text-yellow-600 text-center'>LOGIN</h1>
          <div className='font-medium text-xl  text-black mt-5'>
            <label htmlFor="email" >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='font-medium text-xl  text-black mt-5'>
            <label htmlFor="password" >
              Password
            </label>
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
          <button className="border-solid border-2 border-black rounded-2xl mt-10 w-[100%] p-2 text-2xl font-semibold bg-black text-white">Sign</button>

          </div>
          <div className='text-center mt-5'>
     <p>Do not have an account?</p>
     <Link to="/signup" className='text-blue-600'>SignUp</Link>

     </div>
        </form>
      </div>

  );
};

export default LoginForm;
