// UserAddonPlansPage.jsx

import React from 'react';
import UserSidebar from './UserSidebar';
import '../css/UserAddonPlansPage.css'; // Import your CSS file
import Sidebar from './Sidebar';

const UserAddonPlansPage = () => {
  // Dummy data for add-on plans
  const addonPlans = [
    { id: 1, name: 'Data Booster 1GB', description: 'Additional 1GB data', amount: 10 },
    { id: 2, name: 'Talktime Booster', description: 'Extra talktime minutes', amount: 5 },
    { id: 3, name: 'SMS Pack', description: '100 bonus SMS', amount: 3 },
    // Add more plans as needed
  ];

  const handleAddToCart = (planName) => {
    const confirmation = window.confirm(`Add "${planName}" to your cart?`);

    if (confirmation) {
      // Use a library or custom styles for a neat and styled alert
      alert(`"${planName}" added to cart!`);
    } else {
      console.log(`User canceled adding "${planName}" to cart.`);
    }
  };

  return (
    <div className="user-addon-plans-container">
      <Sidebar />
      <div className="addon-plans-content">
        <center>
          <h2>Add-on Plans</h2>
        </center>
        <div className="addon-plans-list">
          {addonPlans.map((plan) => (
            <div key={plan.id} className="addon-plan-card">
              <h3>{plan.name}</h3>
              <p style={{ color: 'black' }}>{plan.description}</p>
              <p style={{ color: 'black' }}>Amount: ${plan.amount}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(plan.name)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAddonPlansPage;
