// AdminPostPaidAddPlansPage.jsx

import React from 'react';
import '../css/AdminPostPaidAddPlansPage.css'; // Import your CSS file for styling

const AdminPostPaidAddPlansPage = () => {
  return (
    <div className="admin-postpaid-add-plans-container">
      <center>
      <h1>Postpaid Plans</h1>
      </center>
      <div className="plan-details">
        <div className="plan-detail">
          <h2>Plan Name</h2>
          <p>Sample Postpaid Plan</p>
        </div>
        <div className="plan-detail">
          <h2>Description</h2>
          <p>This is a sample postpaid plan description.</p>
        </div>
        <div className="plan-detail">
          <h2>Amount</h2>
          <p>$50.00</p>
        </div>
        <div className="plan-detail">
          <h2>Data Limit</h2>
          <p>Unlimited</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPostPaidAddPlansPage;
