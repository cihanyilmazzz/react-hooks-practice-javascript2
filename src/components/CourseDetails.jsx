import React, { useState } from 'react';
// CourseDetails component receives course object and onClose function as props
function CourseDetails({ course, onClose }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Function to render different types of content (text, video, audio, podcast)
  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'text':
          return <p key={index}>{item.data}</p>;
        case 'video':
          return <video key={index} src={item.data} controls />;
        case 'audio':
          return <audio key={index} src={item.data} controls />;
        case 'podcast':
          return <audio key={index} src={item.data} controls />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="course-details">
      <button onClick={onClose}>Close</button>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Modules</h3>
      <ul>
        {/* Map through course modules */}
        {course.modules.map((module, moduleIndex) => (
          <li key={moduleIndex}>
            <a href="#">
              <h4 onClick={() => setSelectedModule(moduleIndex)}>
                {module.title}
              </h4>
            </a>
            {/* Conditional rendering of lessons when a module is selected */}
            {selectedModule === moduleIndex && (
              <ul>
                {module.lessons.map((lesson, lessonIndex) => (
                  <a href="#">
                    <li
                      key={lessonIndex}
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      {lesson.title}
                    </li>
                  </a>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Conditional rendering of lesson content when a lesson is selected */}
      {selectedLesson && (
        <div className="lesson-content">
          <h3>{selectedLesson.title}</h3>
          <p>{selectedLesson.description}</p>
          <h4>Topics</h4>
          <ul>
            {selectedLesson.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <h4>Content</h4>
          {renderContent(selectedLesson.content)}
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
