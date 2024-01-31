// AdminViewRechargeHistoryPage.jsx

import React from 'react';
import '../css/AdminViewRechargeHistoryPage.css'; // Import your CSS file for styling

const AdminViewRechargeHistoryPage = () => {
  // Sample recharge history data
  const rechargeHistory = [
    {
      userId: 'user1',
      date: '2024-03-01',
      amount: '$20.00',
      status: 'Success',
      paymentMode: 'Credit Card',
    },
    {
      userId: 'user2',
      date: '2024-03-02',
      amount: '$15.00',
      status: 'Failed',
      paymentMode: 'PayPal',
    },
    {
      userId: 'user3',
      date: '2024-03-03',
      amount: '$30.00',
      status: 'Success',
      paymentMode: 'Debit Card',
    },
    {
      userId: 'user4',
      date: '2024-03-04',
      amount: '$25.00',
      status: 'Success',
      paymentMode: 'UPI',
    },
    // Add more recharge history records as needed
  ];

  return (
    <div className="admin-view-recharge-history-container">
      <center>
      <h1>View Recharge History</h1>
      </center>
      <table className="recharge-history-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Mode of Payment</th> {/* New column added */}
          </tr>
        </thead>
        <tbody>
          {rechargeHistory.map((record, index) => (
            <tr key={index}>
              <td>{record.userId}</td>
              <td>{record.date}</td>
              <td>{record.amount}</td>
              <td>{record.status}</td>
              <td>{record.paymentMode}</td> {/* Render the mode of payment */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewRechargeHistoryPage;
