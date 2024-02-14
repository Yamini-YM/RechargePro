import React, { useState } from 'react';
// import './Sidebar.css'; // Import your CSS file for styling
import '../css/Bar.css';
import { Link } from 'react-router-dom';
const Bar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`container ${isSidebarOpen ? 'open' : ''}`}>
      <div className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        ☰
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-content">
          <div className="logo">
        <Link to="/">Recharge App</Link>
      </div>
      <nav className="nav-links">
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/RechargePlansPage">Recharge Plans</Link>
        <Link to="/UserRechargePage">Recharge</Link>
        <Link to="/UserTransactionPage">Transactions</Link>
        <Link to="/TransactionHistoryPage">Transaction History</Link>
        <Link to="/UserProfilePage">Profile</Link>
      </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bar;
