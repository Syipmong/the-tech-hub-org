import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import '../student/Assignment.css';

const AssignmentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    
    if (selectedFile) {
      // Add code to upload assignment to Firebase Storage
      // You can use Firebase Storage APIs to upload the file
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className="assignment-upload-section">
      <h2><FontAwesomeIcon icon={faFileUpload} /> Assignment Upload</h2>
      <div className="assignment-upload-form">
        <form onSubmit={handleUpload}>
          <div className="file-input">
            <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default AssignmentUpload;
