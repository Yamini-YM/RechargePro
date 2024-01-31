// AdminSidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminSidebar.css'; // Import your CSS file for styling

const AdminSidebar = () => {
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
        <h2 style={{color:"white"}}>Admin Dashboard</h2>
      </div>
      <div className="admin-links">
        {/* <Link to="/admin/prepaid">Prepaid Services</Link> */}
        <Link to="/AdminAddPlansPage">Add Plans</Link>
        <Link to="/AdminViewPlansPage">View Plans</Link>
        <Link to="/AdminAddAddonPlanPage">Add Addons</Link>
        <Link to="/AdminViewAddonPlansPage">Addon Plans</Link>
        <Link to="/AdminViewRechargeHistoryPage">Recharge History</Link>
        <Link to="/ReportsPage">Reports</Link>
        <Link to="/SystemLogsPage">System Logs</Link>
        <Link to="/ManageGiftsAndCouponsPage">Manage Gifts/Coupons</Link>
        <Link to="/AdminSettingsPage">Settings</Link>
        {/* Add more admin links as needed */}
      </div>
    </div>
  );
};

export default AdminSidebar;
