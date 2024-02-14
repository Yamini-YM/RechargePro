// UserDebitCardPage.jsx

import React, { useState } from 'react';
import '../css/UserDebitCardPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDebitCardPage = () => {
  const navigate = useNavigate();
  const [debitCardNumber, setDebitCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [debitCardExpiry, setDebitCardExpiry] = useState('');
  const [debitCardCVV, setDebitCardCVV] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(true);

  const validateCardNumber = (value) => {
    return value.length === 16;
  };

  const validateCardHolderName = (value) => {
    return value.trim().length > 0;
  };

  const validateCardExpiry = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    return regex.test(value);
  };

  const validateCardCVV = (value) => {
    return value.length === 3;
  };

  const validateCouponCode = () => {
    // Example: Check if the entered coupon code is valid
    return couponCode.toUpperCase() === 'YAMINI';
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setErrors({});
    setFormValid(true);

    if (
      !validateCardNumber(debitCardNumber) ||
      !validateCardHolderName(cardHolderName) ||
      !validateCardExpiry(debitCardExpiry) ||
      !validateCardCVV(debitCardCVV)
    ) {
      setErrors({ cardValidation: 'Invalid debit card details' });
      setFormValid(false);
    }

    // Validate coupon code for Debit Card payment
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
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');
    
      // Check if the token is available
      if (!token) {
        navigate('/');
        return;
      }

      // Make an HTTP request to your backend for handling payment
      const response = await axios.post(
        'http://localhost:8080/user/debit-card',
        {
          debitCardNumber,
          cardHolderName,
          debitCardExpiry,
          debitCardCVV,
          couponCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the Bearer token in the request
          },
        }
      );

      // Assuming your backend returns some data upon successful payment
      const responseData = response.data;

      // Update your state or perform any necessary actions
      // ...

      // Display alert with payment details
      window.alert(`Payment successful!\n${responseData.paymentDetails}`);

      // Reset form fields after successful payment
      setDebitCardNumber('');
      setCardHolderName('');
      setDebitCardExpiry('');
      setDebitCardCVV('');
      setCouponCode('');

      // Navigate to UserProfilePage or any other page as needed
      navigate('/UserProfilePage');
    } catch (err) {
      setErrors({ submit: 'Failed to process payment. Please try again.' });
    }
  };

  return (
    <div className="user-debit-card-container">
      <h2 style={{ color: 'black' }}>Debit Card Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="debitCardNumber">
            Debit Card Number:
          </label>
          <input
            type="text"
            id="debitCardNumber"
            value={debitCardNumber}
            onChange={(e) => setDebitCardNumber(e.target.value)}
            maxLength="16"
            minLength="16"
            required
          />
          {errors.cardValidation && <p style={{ color: 'red' }}>{errors.cardValidation}</p>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="cardHolderName">
            Card Name:
          </label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required
          />
          {errors.cardValidation && <p style={{ color: 'red' }}>{errors.cardValidation}</p>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="debitCardExpiry">
            Card Expiry Date:
          </label>
          <input
            type="text"
            id="debitCardExpiry"
            value={debitCardExpiry}
            onChange={(e) => setDebitCardExpiry(e.target.value)}
            placeholder="MM/YYYY"
            pattern="^(0[1-9]|1[0-2])\/[0-9]{4}$"
            required
          />
          {errors.cardValidation && <p style={{ color: 'red' }}>{errors.cardValidation}</p>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="debitCardCVV">
            CVV:
          </label>
          <input
            type="text"
            id="debitCardCVV"
            value={debitCardCVV}
            onChange={(e) => setDebitCardCVV(e.target.value)}
            maxLength="3"
            minLength="3"
            required
          />
          {errors.cardValidation && <p style={{ color: 'red' }}>{errors.cardValidation}</p>}
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

export default UserDebitCardPage;
