
import { Navigate } from "react-router-dom";
import { currentUser } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";
import React from "react";

const AdminRoute = ({children}) => {
    
const user =useAppSelector(currentUser)

  if (user?.role ==="admin"){
    return children;  
  }   // Redirect to login if user is not authenticated
  return <Navigate to="/login" replace />; 
  

};

export default AdminRoute;