// src/components/Filter.js

import React from 'react';

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className="mb-4 flex flex-row justify-center font-semibold ">
      <select
        onChange={e => onFilterChange(e.target.value)}
        className="p-4 border  border-white rounded-xl  bg-gray-200 item-center "
      >
        <option value=""  className='font-semibold rounded-xl items-center'>ALL CATAGORIES</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;


