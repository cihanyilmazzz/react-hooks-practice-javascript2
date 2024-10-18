import React, { useState, useEffect } from 'react';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import SearchBar from './components/SearchBar';
import coursesData from './data/courses.json';
import './App.css';

function App() {
  // State variables to manage courses, selected course, and search term
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect hook to load course data when the component mounts
  useEffect(() => {
    setCourses(coursesData);
  }, []);

  // Filter courses based on the search term
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Online Course Catalogue</h1>
      {/* SearchBar component with props for search functionality */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="content">
        {/* CourseList component with filtered courses and function to set selected course */}
        <CourseList
          courses={filteredCourses}
          setSelectedCourse={setSelectedCourse}
        />
        {/* Conditional rendering of CourseDetails when a course is selected */}
        {selectedCourse && (
          <CourseDetails
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
