// NavigationBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Recharge App</Link>
      </div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recharge">Recharge</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
