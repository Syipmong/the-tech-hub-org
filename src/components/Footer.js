import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          <a href="/terms">Terms and Conditions</a>
        </p>
      </div>
      <div className="footer-center">
        <p>
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
      <div className="footer-mid-center">
        <p>
          <a href="/contact">Contact Us</a>
        </p>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/the-tech-hub-com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.twitter.com/thetechhuborg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
