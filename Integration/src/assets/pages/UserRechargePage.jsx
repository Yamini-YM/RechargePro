import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/UserRechargePage.css';
import Sidebar from './Sidebar';

const UserRechargePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '', // Change to email
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

  const handleRecharge = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.mobileNumber || !formData.amount) {
      setError('All fields are required');
      return;
    }

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
    
      if (!token) {
        // Redirect to the login page if the token is not available
        navigate('/HomePage');
        return;
      }

      // Make an HTTP request to your backend for handling recharge
      const response = await axios.post('http://localhost:8080/user/recharge/add', formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token in the Authorization header
        },
      });

      // Assuming your backend returns some data upon successful recharge
      const responseData = response.data;

      // Update your state or perform any necessary actions
      // For example, if your backend returns a token, you can store it in local storage
      // localStorage.setItem('token', responseData.token);

      // Navigate to UserTransactionPage
      navigate('/UserTransactionPage');
    } catch (err) {
      setError('Failed to recharge. Please try again.');
    }
  };

  return (
    <div className="user-recharge-container" style={{ width: "400px", height: "400px" }}>
      <Sidebar />
      <center>
        <h2 style={{ color: "black" }}>User Recharge Page</h2>
      </center>
      <form className="recharge-form" onSubmit={handleRecharge}>
        <label style={{ color: "black" }} htmlFor="email">
          Email: {/* Change to email */}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
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

        <center>
          <button type="submit">Recharge</button>
        </center>
      </form>
    </div>
  );
};

export default UserRechargePage;
