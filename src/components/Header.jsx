import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="header-content">
        <Link to="/">Marysah's Travel Packing</Link>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <>
              <span>Welcome, {user.email}</span>
              <button onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
