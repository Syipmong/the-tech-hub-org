import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="The Tech Hub Logo" />
      </Link>

      <nav className="menu">
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
            <Link to="/articles">Articles</Link>
          </li>
          {/* <li className="menu-item">
            <Link to="/tutor">Tutor</Link>
          </li>
          <li className="menu-item">
            <Link to="/student">Student</Link>
          </li> */}
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
