// src/App.js

import React, { useState } from 'react';
import courses from '../data';
import CourseList from '../Components/CourseList';
import Filter from '../Components/Filter';


const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = category => {
    setSelectedCategory(category);
  };

  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category === selectedCategory)
    : courses;

  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <div className="App container mx-auto p-4  ">
      <h1 className="text-3xl font-bold mb-4 text-center">Courses</h1>
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      <CourseList  courses={filteredCourses} />
     
    </div>
  );
};

export default Courses;
