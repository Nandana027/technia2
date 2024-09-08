import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Get user details from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      setUser(userData);
    } else {
      console.log('No user data found');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default LandingPage;
