import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/UserTransactionPage.css'; // Import the CSS file from the user recharge page
import Sidebar from './Sidebar';
// ... (previous imports)


const UserTransactionPage = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState('');

  const handlePaymentTypeSelect = (selectedType) => {
    setPaymentType(selectedType);
  };

  const handleProceed = () => {
    if (paymentType === 'DebitCard') {
      navigate('/UserDebitCardPage');
    } else if (paymentType === 'UPI') {
      navigate('/UserUpiPage');
    }
  };

  return (
    <div className="user-transaction-container">
    <Sidebar/>
      <h2 style={{ color: 'black' }}>Payment Details</h2>
      <div className="payment-type-selection">
        <center>
        <button
          className={`payment-type-button ${paymentType === 'DebitCard' ? 'selected' : ''}`}
          onClick={() => handlePaymentTypeSelect('DebitCard')}
        >
          Debit Card
        </button>
        <button
          className={`payment-type-button ${paymentType === 'UPI' ? 'selected' : ''}`}
          onClick={() => handlePaymentTypeSelect('UPI')}
        >
          UPI
        </button>
        </center>

      </div>
      <br></br>
      {/* Use div instead of Link for proper navigation */}
      <div style={{color:'white', backgroundColor: 'green', padding: '10px', textAlign: 'center', cursor: 'pointer' }} onClick={handleProceed}>
        Proceed
      </div>
    </div>
  );
};

export default UserTransactionPage;
