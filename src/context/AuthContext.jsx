import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [status, setstatus] = useState(false)

 const login = ()=>{
   setstatus(true)
 } 
 const logout = ()=>{
   setstatus(false)
 }

  return <AuthContext.Provider value={{status,login,logout}}>{children}</AuthContext.Provider>;
};
