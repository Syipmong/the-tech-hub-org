import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../assets/images/logov2.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Import Firestore module

// New component for handling routing and conditions
const StudentButton = ({ isAuthenticatedAsStudent }) => {
  return (
    <Link
      to={isAuthenticatedAsStudent ? '/studentdashboard' : '/signup'}
      className="stdnt-btn"
    >
      Student
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticatedAsStudent, setIsAuthenticatedAsStudent] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Check authentication status and student enrollment here
    const checkStudentStatus = async () => {
      try {
        const user = firebase.auth().currentUser;

        if (user) {
          const firestore = firebase.firestore();
          const usersRef = firestore.collection('users'); 

          const userDoc = await usersRef.doc(user.uid).get();

          if (userDoc.exists) {
            const userData = userDoc.data();
            setIsAuthenticatedAsStudent(userData.isStudent);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkStudentStatus();
  }, []);

  return (
    <header className={`header ${isMenuOpen ? 'open' : ''}`}>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="The Tech Hub Logo" />
        </Link>
      </div>

      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="menu-item">
            <Link to="/blogs">Articles</Link>
          </li>
        </ul>
      </nav>

      <div className="right">
        <StudentButton isAuthenticatedAsStudent={isAuthenticatedAsStudent} />
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FontAwesomeIcon className="side_btn" icon={faTimesCircle} />
          ) : (
            <FontAwesomeIcon className="side_btn" icon={faBars} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
