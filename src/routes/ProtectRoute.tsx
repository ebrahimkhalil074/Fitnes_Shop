
import { Navigate } from "react-router-dom";
import { currentUser } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";
import React from "react";


const ProtectRoute = ({children}) => {
    
const user =useAppSelector(currentUser)
console.log(user)

  if (!user){
    return <Navigate to="/login" replace />;
    
     
  } ;  

  return children
  
};

export default ProtectRoute;