import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
