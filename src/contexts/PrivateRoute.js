import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ roles, ...props }) => {
  const { currentUser } = useAuth();
  

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  if (roles && roles.length > 0 && !roles.includes(currentUser.role)) {
    return <Navigate to="/" />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
