import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';

const AdminRoute = ({ component: Component, ...rest }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const adminRef = firestore.collection('admins').doc(user.uid);
          const adminSnapshot = await adminRef.get();

          setIsAdmin(adminSnapshot.exists);
        } catch (error) {
          console.error('Error fetching admin details:', error);
        }
      }
      setIsLoading(false);
    };

    checkAdmin();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={isAdmin ? <Component /> : <Navigate to="/admin/login" />}
    />
  );
};

export default AdminRoute;
