// UserRechargePage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/UserRechargePage.css';

const UserRechargePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    amount: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRecharge = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.userName || !formData.mobileNumber || !formData.amount) {
      setError('All fields are required');
      return;
    }

    // Your logic for handling the recharge goes here
    // For now, let's just navigate to UserTransactionPage
    navigate('/UserTransactionPage');
  };

  return (
    <div className="user-recharge-container" style={{ width: "300px" }}>
      <h2 style={{ color: "black" }}>User Recharge Page</h2>
      <form className="recharge-form" onSubmit={handleRecharge}>
        <label style={{ color: "black" }} htmlFor="userName">
          User Name:
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />

        <label style={{ color: "black" }} htmlFor="mobileNumber">
          Mobile Number:
        </label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />

        <label style={{ color: "black" }} htmlFor="amount">
          Recharge Amount:
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Use a regular button for form submission */}
       <center>
        <button type="submit">Recharge</button>
        </center>
      </form>
    </div>
  );
};

export default UserRechargePage;
