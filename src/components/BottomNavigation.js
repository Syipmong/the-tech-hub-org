import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const BottomNavigation = () => {

  const twitterURL = 'https://www.twitter.com/thetechhuborg';
  const linkedinURL = 'https://www.linkedin.com/company/the-tech-hub-com/';

  return (

    
    <div className="bottom-navigation">
      <div className="bottom-navigation-header">
        <div className="bottom-navigation-title">The Tech Hub</div>
        <div className="bottom-navigation-description">
          Discover the Latest Technologies and Innovations
        </div>
      </div>

      <div className="bottom-navigation-section">
        <div className="bottom-navigation-heading">Services</div>                                               
        <ul className="bottom-navigation-list">
          <li className="bottom-navigation-item">Web Development</li>
          <li className="bottom-navigation-item">Mobile App Development</li>
          <li className="bottom-navigation-item">AI and Machine Learning</li>
          <li className="bottom-navigation-item">Cloud Computing</li>
         
        </ul>
      </div>

      <div className="bottom-navigation-section">
        <div className="bottom-navigation-heading">Company</div>
        <ul className="bottom-navigation-list">
          <li className="bottom-navigation-item">Articles</li>
          <li className="bottom-navigation-item">Blogs</li>
          
        </ul>
      </div>

      <div className="bottom-navigation-section">
        <div className="bottom-navigation-heading">Contact Us</div>
        <ul className="bottom-navigation-list">
          <li className="bottom-navigation-item">Sitemap</li>
          <li className="bottom-navigation-item">Terms and Conditions</li>
         
        </ul>
      </div>

      <div className="bottom-navigation-section bottom-right-section">
        <div className="bottom-navigation-text">Be the first to know</div><br/>
        <Link to="/waitlist" className="cta-button bottom-navigation-button">subscribe</Link>
      </div>
      {/* No update for now */}

      <div className="bottom-navigation-icons">
      <a href={twitterURL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='twitter' icon={faTwitter} />
        </a>
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default BottomNavigation;
