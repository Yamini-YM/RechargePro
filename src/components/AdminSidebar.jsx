// AdminNavigationBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/AdminNavigationBar.css'


const AdminSidebar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-logo">
        <Link to="/admin-dashboard">Admin Panel</Link>
      </div>
      <div className="admin-nav-links">
        <Link to="/admin-dashboard">Dashboard</Link>
        <Link to="/manage-users">Manage Users</Link>
        <Link to="/manage-transactions">Manage Transactions</Link>
        <Link to="/admin-profile">Profile</Link>
      </div>
    </nav>
  );
};

export default AdminSidebar;
