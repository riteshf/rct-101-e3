import axios from "axios";
import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { status } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

 

 
  return (
    <CartContext.Provider
      
    >
      {children}
    </CartContext.Provider>
  );
};
