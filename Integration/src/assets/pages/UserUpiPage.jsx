// UserUpiPage.jsx

import React, { useState } from 'react';
import '../css/UserUpiPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserUpiPage = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState('');
  const [upiPin, setUpiPin] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(true);

  const validateUpiId = (value) => {
    // Adjust the validation logic based on your requirements
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(value);
  };

  const validateUpiPin = (value) => {
    // Adjust the validation logic based on your requirements
    return value.length === 4 || value.length === 6;
  };

  const validateCouponCode = () => {
    // Example: Check if the entered coupon code is valid
    return couponCode.toUpperCase() === 'YAMINI';
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setFormValid(true);

    if (!validateUpiId(upiId) || !validateUpiPin(upiPin)) {
      setErrors({ upiValidation: 'Invalid UPI details' });
      setFormValid(false);
    }

    // Validate coupon code for UPI payment
    const couponValid = validateCouponCode();
    if (couponCode && !couponValid) {
      setErrors({ couponCode: 'Invalid coupon code' });
      setFormValid(false);
    }

    // If form is not valid, stop further processing
    if (!formValid) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }

      const response = await axios.post('http://localhost:8080/user/upi', { upiId, upiPin, couponCode }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('UPI Payment successful!', response.data);
      setUpiId('');
      setUpiPin('');
      setCouponCode('');

      // Navigate to UserProfilePage
      navigate('/UserProfilePage');
    } catch (error) {
      console.error('UPI Payment failed:', error);
      setErrors({ submit: 'Failed to process UPI payment. Please try again.' });
    }
  };

  return (
    <div className="user-upi-container">
      <h2 style={{ color: 'black' }}>UPI Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="upiId">
            UPI ID:
          </label>
          <input
            type="text"
            id="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
          {errors.upiValidation && <p style={{ color: 'red' }}>{errors.upiValidation}</p>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="upiPin">
            UPI PIN:
          </label>
          <input
            type="password"
            id="upiPin"
            value={upiPin}
            onChange={(e) => setUpiPin(e.target.value)}
            maxLength="6"
            minLength="4"
            required
          />
          {errors.upiValidation && <p style={{ color: 'red' }}>{errors.upiValidation}</p>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="couponCode">
            Coupon Code (if any):
          </label>
          <input
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={handleCouponCodeChange}
          />
          {errors.couponCode && <p style={{ color: 'red' }}>{errors.couponCode}</p>}
        </div>
        {!formValid && <p style={{ color: 'red' }}>Please fix the errors before submitting the form.</p>}
        <center>
          <button type="submit">Pay Now</button>
        </center>
      </form>
    </div>
  );
};

export default UserUpiPage;
