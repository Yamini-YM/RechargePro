// HomePage.jsx

import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../pages/Sidebar.jsx';
import Header from './Header.jsx';
import '../css/HomePage.css';

const HomePage = ({ user }) => {
  const { fullName } = user || {};

  return (
    <div className="home-container">
      <Header />
      <Sidebar />
      <header>
        <h1 style={{ color: 'brown' }}>Welcome to Mobile Recharge App</h1>
        {fullName && <p>{`Welcome, ${fullName}!`}</p>}
      </header>
      <section className="introduction">
        <p style={{ color: 'black' ,fontSize:"20px" }}>
          Experience seamless mobile recharge with our user-friendly app. Fast, secure, and convenient.
        </p>
      </section>
      <section className="features">
   
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

        <div className="feature">
          <h2 style={{ color: 'black' ,fontSize:"20px"}}>Mobile Recharge</h2>
          <p style={{ color: 'blue' ,fontSize:"18px" }}>Recharge your mobile balance in a few simple steps.</p>
        </div>
        <div className="feature">
          <h2 style={{ color: 'black'  ,fontSize:"20px"}}>View Transactions</h2>
          <p style={{ color: 'blue'  ,fontSize:"18px"}}>Check your transaction history and recharge details.</p>
        </div>
        <div className="feature">
          <h2 style={{ color: 'black' ,fontSize:"20px" }}>Profile Management</h2>
          <p style={{ color: 'blue' ,fontSize:"18px" }}>Update your profile information and preferences.</p>
        </div>
      </section>
      <section className="cta-section">
        {/* <img
          src="https://www.goterpay.in/images/banner7.gif"
          alt="Mobile Recharge App"
          className="cta-image"
          style={{ width: '500px', height: '170px' }}
        /> */}
        {/* <div className="cta-buttons">
          <a href="/UserTypeSelection" className="cta-button">
            Get Started
          </a>
          <a href="/Promotions" className="cta-button">
            See Promotions
          </a>
        </div> */}
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

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(HomePage);
