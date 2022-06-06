import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {

  const {status}= useContext(AuthContext)

  if(status){
    return children;
  }
  else{
    return <Navigate to='/login'/>
  }


};

export default RequiredAuth;
