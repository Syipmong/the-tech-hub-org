import React from 'react';
import '../components/StudentDashBoard.css'; // Import your CSS file for styling

const StudentDashboard = () => {
  // Replace this with actual student data or API calls
  const studentName = "John Doe";
  const courses = [
    { id: 1, title: "Introduction to Web Development", instructor: "Jane Smith" },
    { id: 2, title: "Database Design Fundamentals", instructor: "Alex Johnson" },
    { id: 3, title: "React Mastery", instructor: "Michael Brown" },
  ];

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {studentName}!</h1>
        <p>Your Courses:</p>
      </div>
      <div className="course-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <button className="course-btn">Go to Course</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
