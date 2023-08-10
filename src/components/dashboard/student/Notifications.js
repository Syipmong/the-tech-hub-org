import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../student/Notifications.css';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications-section">
      <h2><FontAwesomeIcon icon={faBell} /> Notifications</h2>
      <div className="notifications-content">
        
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
