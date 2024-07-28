// src/components/SearchBar.js
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search..."
        className="w-74 px-2 py-1 border border-gray-300 text-center rounded-full transition-all duration-300 focus:w-80 focus:border-black focus:outline-none"
      />
      <div
        className={`absolute top-2 left-2 text-gray-500 transition-all duration-300 ${
          focused ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <CiSearch size={24} />
      </div>
    </div>
  );
};

export default SearchBar;
