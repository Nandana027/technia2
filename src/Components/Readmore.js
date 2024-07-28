// src/components/ReadMore.js

import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
  return (
    <p className="text-justify ml-5">
      {isReadMore ? children.slice(0, 200) + "..." : children}
      <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer">
        {isReadMore ? " Read more" : " Show less"}
      </span>
    </p>
  );
};

export default ReadMore;
