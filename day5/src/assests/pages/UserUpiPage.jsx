// UserUpiPage.jsx

import React, { useState } from 'react';
import '../css/UserUpiPage.css'; // Import the CSS file for UserUpiPage
import { Link, useNavigate } from 'react-router-dom';

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
    return couponCode.toUpperCase() === 'STATICCOUPON';
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handlePayment = (e) => {
    e.preventDefault();
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

    // For demonstration purposes, log the payment details
    console.log('Payment Details:');
    console.log('UPI ID:', upiId);
    console.log('UPI PIN:', upiPin);
    console.log('Coupon Code:', couponCode);

    // Display alert with coupon details
    let couponDetails = couponValid ? `Coupon Applied: ${couponCode}` : 'No Coupon Applied';
    window.alert(`Payment successful!\n${couponDetails}`);

    // Reset form fields after successful payment
    setUpiId('');
    setUpiPin('');
    setCouponCode('');

    // Navigate to UserProfilePage
    navigate('/UserProfilePage');
  };

  return (
    <div className="user-upi-container">
      <h2 style={{ color: 'black' }}>UPI Payment</h2>
      <form onSubmit={handlePayment}>
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
