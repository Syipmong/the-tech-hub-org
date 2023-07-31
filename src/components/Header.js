import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../assets/images/logov2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <Link to="/crud">Articles</Link>
          </li>
        </ul>
      </nav>

      <div className="right">
        <button className="letstalk-btn">Student</button>
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
