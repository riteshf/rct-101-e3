import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import axios from 'axios';
const Login = () => {
const [email,setemail]=useState("");
const [password,setpassword]=useState("");
const [state,dispatch]=useContext(AuthContext);

const handlesubmit =(e)=>{
  e.preventDefault();
  <Navigate to="/products"></Navigate>
}

  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input data-cy="login-email" placeholder="Email"  value={email} onChange={(e)=> setemail(e.target.value)}/>
      <input data-cy="login-password" placeholder="Password" value={password} onChange={(e)=> setpassword(e.target.value)} />
      <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
