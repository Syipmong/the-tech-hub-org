import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import '../student/Analytics.css';

const Analytics = ({ performanceData }) => {
  return (
    <div className="analytics-section">
      <h2><FontAwesomeIcon icon={faChartLine} /> Analytics and Insights</h2>
      <div className="analytics-content">
        
      </div>
    </div>
  );
};

export default Analytics;
