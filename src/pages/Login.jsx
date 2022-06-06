import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [querry, setquerry] = useState({});
  const {status,login,logout} = useContext(AuthContext)
  const productnavigate = useNavigate()

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setquerry({ ...querry, [name]: value });
  };
const handleloginpage=(e)=>{
  e.preventDefault()
  login()
  productnavigate('/products')
}
useEffect(() => {
  

 console.log(status)
}, [])


  return (
    <div>
      Login
      <form action="" onClick={handleloginpage}>
        <input
          onChange={handleonchange}
          data-cy="login-email"
          placeholder="name"
          name="name"
        />
        <input
          onChange={handleonchange}
          data-cy="login-password"
          placeholder="pass"
          name="pass"
        />
        <button data-cy="login-submit"> submit </button>
      </form>
    </div>
  );
};

export default Login;
