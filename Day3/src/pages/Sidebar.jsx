// AdminSidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminSidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
      <div className="admin-toggle-btn" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className="admin-logo">
        <h2 style={{color:"white"}}>User Dashboard</h2>
      </div>
      <div className="admin-links">
        {/* <Link to="/admin/prepaid">Prepaid Services</Link> */}
        <Link to="/RechargePlansPage">Recharge Plans</Link>
        <Link to="/UserRechargePage">Recharge</Link>
        <Link to="/UserTransactionPage">Transactions</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/UserAddonPlansPage">Add-On</Link>
        <Link to="/UserSettingsPage">Settings</Link>
        <Link to="/SupportPage">Support/Help</Link>
        <Link to="/FAQPage">FAQ</Link>
        {/* <Link to="/FeedbackPage">Send Feedback</Link>
        <Link to="/LogoutPage">Logout</Link> */}
        
        {/* Add more admin links as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
