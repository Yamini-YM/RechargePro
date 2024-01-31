// AdminHomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminHomePage.css'
import '../pages/AdminSidebar'
import AdminSidebar from '../pages/AdminSidebar';
import AdminHeader from './AdminHeader';
//import AdminSidebar from '../../components/AdminSideBar';
//import AdminNavigationBar from '../../components/AdminNavigationBar';


const AdminHomePage = () => {
  return (
    <div className="admin-home-container">
        <AdminSidebar/>
        <AdminHeader/>
      <header>
        <h1>Welcome to the Admin Dashboard</h1>
      </header>
      <section className="admin-features">
        <div className="admin-feature">
          <h2>Manage Users</h2>
          <p style={{color:"blue"}}>View and manage registered users.</p>
        </div>
        <div className="admin-feature">
          <h2>Manage Transactions</h2>
          <p style={{color:"blue"}}>Monitor and manage user transactions.</p>
        </div>
        <div className="admin-feature">
          <h2>Admin Profile</h2>
          <p style={{color:"blue"}}>Update admin profile information.</p>
        </div>
      </section>
      <section className="cta-section">
      <img
          src='https://1.bp.blogspot.com/-YpSuBd778ng/XzaVWnaXJ9I/AAAAAAAAA6M/wD820gGrWb866tanQtOUdfLo5ao0bjyDgCLcBGAsYHQ/s1600/Webp.net-gifmaker%2B%25282%2529.gif'
          alt="Mobile Recharge App"
          className="cta-image"
          style={{ width: '400px', height: '200px' }}
        />
        </section>
    </div>
  );
};

export default AdminHomePage;
