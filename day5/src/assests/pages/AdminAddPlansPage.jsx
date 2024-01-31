// AdminAddPlansPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/AdminAddPlansPage.css';

const AdminAddPlansPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [planName, setPlanName] = useState('');
  const [planAmount, setPlanAmount] = useState('');
  const [planValidity, setPlanValidity] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!planName.trim()) {
      errors.planName = 'Plan Name is required.';
    }

    if (!planAmount.trim()) {
      errors.planAmount = 'Plan Amount is required.';
    }

    if (!planValidity.trim()) {
      errors.planValidity = 'Plan Validity is required.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleAddPlan = () => {
    if (!validateForm()) {
      // If form validation fails, don't proceed with adding the plan
      return;
    }

    // Implement logic to add the plan (e.g., send to backend)
    console.log('Adding plan:', { planName, planAmount, planValidity });

    // Reset form fields after adding the plan
    setPlanName('');
    setPlanAmount('');
    setPlanValidity('');

    // Display alert after adding the plan
    alert('Plan added successfully!');

    // Navigate to the view plans page using useNavigate
    navigate('/AdminViewPlansPage');
  };

  return (
    <div className="admin-prepaid-add-plans-container">
      <center>
        <h1>Add Plans</h1>
      </center>
      <form>
        <div className="form-group">
          <label>
            Plan Name:
            <input
              type="text"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
            />
            {formErrors.planName && (
              <span style={{ color: 'red' }}>{formErrors.planName}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Plan Amount:
            <input
              type="text"
              value={planAmount}
              onChange={(e) => setPlanAmount(e.target.value)}
            />
            {formErrors.planAmount && (
              <span style={{ color: 'red' }}>{formErrors.planAmount}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Plan Validity (in days):
            <input
              type="text"
              value={planValidity}
              onChange={(e) => setPlanValidity(e.target.value)}
            />
            {formErrors.planValidity && (
              <span style={{ color: 'red' }}>{formErrors.planValidity}</span>
            )}
          </label>
        </div>
        {/* <Link to="/AdminViewPlansPage"> */}
          <button type="button" onClick={handleAddPlan}>
            Add Plan
          </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default AdminAddPlansPage;
