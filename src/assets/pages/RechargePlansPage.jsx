import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/RechargePlansPage.css';

const RechargePlansPage = () => {
  const navigate = useNavigate();

  const plans = [
    // Your plans data...
    { id: 1, type: 'Prepaid', name: 'Basic', description: 'Ideal for light users', amount: 10 },
    { id: 2, type: 'Prepaid', name: 'Standard', description: 'Great for most users', amount: 20 },
    { id: 3, type: 'Prepaid', name: 'Premium', description: 'For heavy users with extra features', amount: 30 },
    { id: 4, type: 'Postpaid', name: 'Basic', description: 'Ideal for light users with monthly billing', amount: 15 },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleRecharge = () => {
    if (selectedPlan) {
      console.log(`Recharging with plan ID: ${selectedPlan.id}`);
      // Implement your logic to initiate the recharge
      // For example, you can navigate to the UserRechargePage
      navigate('/UserRechargePage');
    } else {
      // Display a user-friendly message on the page instead of using alert
      // For example, you can conditionally render a message below the form
      console.error('Please select a recharge plan.');
    }
  };

  return (
    <div className="recharge-plans-container">
      <h2 style={{ color: "black" }}>Choose a Recharge Plan</h2>

      <form onSubmit={(e) => { e.preventDefault(); handleRecharge(); }}>
        <div className="plan-list">
          {plans.map(plan => (
            <div key={plan.id} className="plan-item">
              <input
                type="radio"
                id={`plan-${plan.id}`}
                name="rechargePlan"
                value={plan.id}
                checked={selectedPlan && selectedPlan.id === plan.id}
                onChange={() => setSelectedPlan(plan)}
              />
              <label htmlFor={`plan-${plan.id}`}>
                <h4>{plan.type} - {plan.name}</h4>
                <p style={{ color: "grey" }}>Description: {plan.description}</p>
                <p style={{ color: "grey" }}>Amount: ${plan.amount}</p>
              </label>
            </div>
          ))}
        </div>
        {/* Using a regular button for form submission */}
        <center>
          <button style={{ backgroundColor: "blue" }} type="submit">Recharge Now</button>
        </center>
      </form>

      {/* Render a message based on validation */}
      {selectedPlan === null && (
        <p style={{ color: "red", textAlign: "center" }}>Please select a recharge plan.</p>
      )}
    </div>
  );
};

export default RechargePlansPage;
