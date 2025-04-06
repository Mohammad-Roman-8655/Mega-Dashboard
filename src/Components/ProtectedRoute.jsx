import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  if (!token || !["Manager", "Teacher", "Monitor"].includes(userType)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

