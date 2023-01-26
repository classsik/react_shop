import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const Header = ({ authState, setAuthState }) => {
  const navigate = useNavigate();
  const logout = () => {
    setAuthState({ authenticated: false });
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__menu">
          {authState.authenticated === false ? (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              <Link to="/cart">Cart</Link>
              <Link to="/orders">Orders</Link>
              <button onClick={logout}>LogOut</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
