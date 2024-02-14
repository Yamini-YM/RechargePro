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
          <h2 style={{color:"black",fontSize:"18px"}}>Manage Users</h2>
          <p style={{color:"blue",fontSize:"18px"}}>View and manage registered users.</p>
        </div>
        <div className="admin-feature">
          <h2 style={{color:"black",fontSize:"18px"}}>Manage Transactions</h2>
          <p style={{color:"blue",fontSize:"18px"}}>Monitor and manage user transactions.</p>
        </div>
        <div className="admin-feature">
          <h2 style={{color:"black",fontSize:"18px"}}>Admin Profile</h2>
          <p style={{color:"blue",fontSize:"18px"}}>Update admin profile information.</p>
        </div>
      </section>
      
        <section className="decorations">
        <div className="decoration-item">
          <img
            src="https://kansasenterprises.in/img/slider.gif" // Replace with your decorative image
            alt="Decorative Image 1"
            className="decoration-image"
            style={{ width: '350px', height: '170px' }}
          />
        </div>
        <div className="decoration-item">
          <img
            src="https://cyrusrecharge.com/img/payout-settlement-api.gif" // Replace with your decorative image
            alt="Decorative Image 2"
            className="decoration-image"
            style={{ width: '350px', height: '170px' }}
          />
        </div>
      </section>
    </div>
  );
};

export default AdminHomePage;
