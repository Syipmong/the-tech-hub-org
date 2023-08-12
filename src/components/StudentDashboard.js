import React, { useEffect, useState } from 'react';
import '../components/StudentDashBoard.css';

import Profile from './dashboard/student/Profile';
import AssignmentUpload from './dashboard/student/Assignment';
import CourseInformation from './dashboard/student/CourseInfo';
import Notifications from './dashboard/student/Notifications';
import { auth } from '../firebase'; 
import Projects from './dashboard/student/Projects';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    return <div>You need to signup to have access...</div>;
  }

  const studentName = user.displayName || "Student";


  const uid = user.uid;

  // const userData = {
    
  //   name: studentName,
    
  // };

  const selectedCourse = {
    
    id: 1,
    title: "Introduction to Web Development",
    instructor: "Jane Smith",
   
  };

  const notifications = [
    
    { id: 1, text: "Your assignment is due tomorrow." },
    { id: 2, text: "New course added: Database Design Fundamentals" },
   
  ];

  const performanceData = {
    
    averageGrade: 85,
    progress: 75,
    
  };

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {studentName}!</h1>
      </div>
      <div className="dashboard-content">
        <Profile uid={uid} />
        <AssignmentUpload />
        <CourseInformation selectedCourse={selectedCourse} />
        <Notifications notifications={notifications} />
        <Projects performanceData={performanceData} />
      </div>
    </div>
  );
};

export default StudentDashboard;
