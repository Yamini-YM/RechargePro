// HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import '../pages/Sidebar.jsx';
import Sidebar from '../pages/Sidebar.jsx';
import Header from './Header.jsx';

// Import the image
// import mobileRechargeImage from 'path-to-your-image/mobile-recharge-image.jpg'; // Replace with the actual path

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <Sidebar />
      <header>
        <h1 style={{ color: 'brown' }}>Welcome to Mobile Recharge App</h1>
      </header>
      <section className="features">
        <div className="feature">
          <h2 style={{ color: 'black' }}>Mobile Recharge</h2>
          <p style={{ color: 'blue' }}>Recharge your mobile balance in few simple steps.</p>
        </div>
        <div className="feature">
          <h2 style={{ color: 'black' }}>View Transactions</h2>
          <p style={{ color: 'blue' }}>Check your transaction history and recharge details.</p>
        </div>
        <div className="feature">
          <h2 style={{ color: 'black' }}>Profile Management</h2>
          <p style={{ color: 'blue' }}>Update your profile information and preferences.</p>
        </div>
      </section>
      <section className="cta-section">
        {/* Smaller image with added styles */}
        <img
          src='https://www.goterpay.in/images/banner7.gif'
          alt="Mobile Recharge App"
          className="cta-image"
          style={{ width: '500px', height: '200px' }}
        />
        

        {/* You can keep the Link button for navigation */}
        {/* <Link to="/UserTypeSelection" className="cta-button">
          Login Now
        </Link> */}
      </section>
    </div>
  );
};

export default HomePage;
