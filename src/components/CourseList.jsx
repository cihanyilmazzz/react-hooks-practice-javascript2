import React from 'react';
// CourseList component receives courses array and setSelectedCourse function as props
function CourseList({ courses, setSelectedCourse }) {
  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <ul>
        {/* Map through courses array to create list items */}
        {courses.map((course) => (
          <li key={course.id} onClick={() => setSelectedCourse(course)}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
