import React, { useState } from 'react';
//import './TransactionHistoryPage.css';
import '../css/TransactionHistoryPage.css';

const TransactionHistoryPage = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-01-26', amount: 20.00, status: 'Success' },
    { id: 2, date: '2024-01-25', amount: 15.00, status: 'Failed' },
    // Add more transactions as needed
  ]);

  return (
    <div className="transaction-history">
      <h1>Transaction History</h1>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td className={transaction.status.toLowerCase()}>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryPage;
