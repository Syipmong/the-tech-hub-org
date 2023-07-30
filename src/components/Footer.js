import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Terms and Conditions | Privacy Policy</p>
        <p>© 2023 The Tech Hub. All rights reserved.</p>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/company/the-tech-hub-com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.twitter.com/thetechhuborg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
