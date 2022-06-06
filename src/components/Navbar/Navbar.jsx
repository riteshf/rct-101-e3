import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  let logintransfer = useNavigate();
  const { status } = useContext(AuthContext);
  // const {cartItemsCount} = useContext(CartContext)

  const handleloginpage = () => {
    logintransfer("/login");
  };

  return (
    <div
      data-cy="navbar"
      style={{
        border: "1px solid red",
        padding: "12px",
        display: "flex",
        gap: "18px",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="" data-cy="navbar-home-link">
        logo
      </Link>
      <span data-cy="navbar-cart-items-count">{0}</span>
      <button onClick={handleloginpage} data-cy="navbar-login-logout-button">
        {status ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Navbar;
