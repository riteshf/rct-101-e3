// import React, { createContext } from "react";
import React, {createContext,useContext,useReducer,useState} from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const initState={
  
isAuth:false,
token:null
}
function reducer (state,action){
  switch(action.type){
    case "LOGIN_Sucess":{
      return {
        ...state,
        isAuth:true,
        token:action.token
      }
    }
    case "LOGOUT_SUCESS": {
      return {
        ...state,
        isAuth:false,
        token:null
      };
    }
    default :{
      return state;
    }
  }
}

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
