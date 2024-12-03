import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { authToken, userType } = useSelector((state) => state.auth);

  // Redirect to login if not authenticated
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  // Redirect unauthorized users based on role
  if (allowedRoles && !allowedRoles.includes(userType)) {
    return userType === "admin" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/home" />
    );
  }

  return children;
};

export default ProtectedRoute;
