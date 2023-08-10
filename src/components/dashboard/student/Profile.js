import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { firestore } from '../../../firebase'; 
import '../student/Profile.css';

const Profile = ({ uid }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore.collection('users').doc(uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [uid]);

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="profile-section">
      <h2><FontAwesomeIcon icon={faUser} /> Profile</h2>
      <div className="profile-content">
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        
      </div>
    </div>
  );
};

export default Profile;
