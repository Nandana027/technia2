import React from 'react';
import ReadMore from './Readmore';

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center w-full px-5 py-10">
      {courses.map(course => (
        <div key={course.id} className="flex flex-col border p-4 rounded shadow-lg shadow-gray-500">
          <div>
            <h3 className="text-xl font-bold">{course.title}</h3>
            <img className="w-full mt-5 mb-2 rounded" src={course.image} alt={course.title} />
            <p className="text-gray-600 mt-4">Category: {course.category}</p>
          </div>
          <div className="flex flex-col mt-5">
            <div className="text-justify">
              <h3 className="font-semibold text-2xl text-center">About the course</h3>
              <div className="mt-5 font-medium text-lg h-32 overflow-y-auto">
                <p>{course.description}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <button className="bg-yellow-500 p-4 text-xl font-semibold hover:bg-yellow-400 rounded-xl">Enroll now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
