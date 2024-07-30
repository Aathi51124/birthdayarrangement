import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaUserShield } from 'react-icons/fa';
import '../styles/Header.css'; // Ensure the path is correct

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <FaHome className="logo-icon" />
          <span className="logo-text">Birthday Event Planner</span>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/login" className="nav-link">
          <FaSignInAlt className="nav-icon" />
          <span className="nav-text">Login</span>
        </Link>
        <Link to="/admin-login" className="nav-link">
          <FaUserShield className="nav-icon" />
          <span className="nav-text">Admin Login</span>
        </Link>
        <Link to="/register" className="nav-link">
          <FaUserPlus className="nav-icon" />
          <span className="nav-text">Register</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
