import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col md:flex-row gap-10 mt-10 items-center justify-center w-full">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="border-solid border-2 shadow-lg shadow-gray-700 rounded-lg flex flex-col p-2 w-full md:w-1/3">
            <img src={
              index === 0
                ? "https://st2.depositphotos.com/1265075/6726/i/450/depositphotos_67261475-stock-photo-blog-word-on-tags.jpg "
                : index === 1
                ? "https://27860354.s21i.faiusr.com/2/ABUIABACGAAg54CQigYo3PLMhgEwoAY4wgM.jpg"
                : "https://dms.iitd.ac.in/wp-content/uploads/2018/07/Courses.png"
            } 
            alt="Feature" 
            className="w-full h-auto rounded-lg"/>
            <button className="border-solid border-2 text-white rounded p-3 mt-3 bg-black">Click here</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
