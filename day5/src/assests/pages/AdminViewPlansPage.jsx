// AdminViewPlansPage.jsx

import React from 'react';
import '../css/AdminViewPlansPage.css'; // Import your CSS file for styling

const AdminViewPlansPage = () => {
  return (
    <div className="admin-view-plans-container">
        <center>
      <h1>View Postpaid Plans</h1>
      </center>
      <div className="plans-list">
        <div className="plan">
          <h2>Plan Name: Basic Plan</h2>
          <p style={{color:"blue"}}><b>Description: </b> Affordable postpaid plan for basic usage.</p>
          <p style={{color:"blue"}}><b>Amount: </b>Amount: $30.00</p>
          <p style={{color:"blue"}}><b>Data Limit: </b>20GB</p>
        </div>
        <div className="plan">
          <h2>Plan Name: Premium Plan</h2>
          <p style={{color:"blue"}}><b>Description: </b> Premium postpaid plan with enhanced features.</p>
          <p style={{color:"blue"}}><b>Amount: </b> $50.00</p>
          <p style={{color:"blue"}}><b>Data Limit:</b> Unlimited</p>
        </div>
        <div className="plan">
          <h2>Plan Name: Family Plan</h2>
          <p style={{color:"blue"}}><b>Description: </b> Shareable postpaid plan for the whole family.</p>
          <p style={{color:"blue"}}><b>Amount: </b> $70.00</p>
          <p style={{color:"blue"}}><b>Data Limit: </b> 50GB (shared)</p>
        </div>
        <div className="plan">
          <h2>Plan Name: Business Plan</h2>
          <p style={{color:"blue"}}><b>Description: </b> Tailored postpaid plan for business needs.</p>
          <p style={{color:"blue"}}><b>Amount: </b> $100.00</p>
          <p style={{color:"blue"}}><b>Data Limit: </b> Unlimited</p>
        </div>
        <div className="plan">
          <h2>Plan Name: Student Plan</h2>
          <p style={{color:"blue"}}><b>Description: </b> Budget-friendly postpaid plan for students.</p>
          <p style={{color:"blue"}}><b>Amount: </b> $25.00</p>
          <p style={{color:"blue"}}><b>Data Limit: </b> 10GB</p>
        </div>
        <div className="plan">
          <h2>Plan Name: Unlimited Plan</h2>
          <p style={{color:"blue"}}><b>Description: </b> Unlimited postpaid plan for heavy data users.</p>
          <p style={{color:"blue"}}><b>Amount: </b> $80.00</p>
          <p style={{color:"blue"}}><b>Data Limit: </b> Unlimited</p>
        </div>
      </div>
    </div>
  );
};

export default AdminViewPlansPage;
