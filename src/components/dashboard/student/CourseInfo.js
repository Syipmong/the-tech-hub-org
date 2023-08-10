import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../student/CourseInfo.css';

const CourseInformation = ({ selectedCourse }) => {
  return (
    <div className="course-info-section">
      <h2><FontAwesomeIcon icon={faInfoCircle} /> Course Information</h2>
      <div className="course-info-content">
        
        <p>Title: {selectedCourse.title}</p>
        <p>Instructor: {selectedCourse.instructor}</p>
        
      </div>
    </div>
  );
};

export default CourseInformation;
