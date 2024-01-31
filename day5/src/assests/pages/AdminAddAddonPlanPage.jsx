// AdminAddAddonPlanPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/AdminAddAddonPlanPage.css'; // Import your CSS file for styling

const AdminAddAddonPlanPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [addonName, setAddonName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [dataLimit, setDataLimit] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!addonName.trim()) {
      errors.addonName = 'Addon Name is required.';
    }

    if (!description.trim()) {
      errors.description = 'Description is required.';
    }

    if (!amount.trim()) {
      errors.amount = 'Amount is required.';
    }

    if (!dataLimit.trim()) {
      errors.dataLimit = 'Data Limit is required.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleAddAddonPlan = () => {
    if (!validateForm()) {
      // If form validation fails, don't proceed with adding the addon plan
      return;
    }

    // Implement logic to add the addon plan (e.g., send to backend)
    console.log('Addon Plan Added:', { addonName, description, amount, dataLimit });

    // Reset form fields after adding the addon plan
    setAddonName('');
    setDescription('');
    setAmount('');
    setDataLimit('');

    // Show alert after adding the addon plan
    alert('Addon Plan added successfully!');

    // Navigate to the view addon plans page using useNavigate
    navigate('/AdminViewAddonPlansPage');
  };

  return (
    <div className="admin-add-addon-plan-container">
      <h1>Add New Addon Plan</h1>
      <div className="addon-plan-form">
        <div className="form-group">
          <label htmlFor="addonName">Addon Name:</label>
          <input
            type="text"
            id="addonName"
            value={addonName}
            onChange={(e) => setAddonName(e.target.value)}
          />
          {formErrors.addonName && (
            <span style={{ color: 'red' }}>{formErrors.addonName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {formErrors.description && (
            <span style={{ color: 'red' }}>{formErrors.description}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {formErrors.amount && (
            <span style={{ color: 'red' }}>{formErrors.amount}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="dataLimit">Data Limit:</label>
          <input
            type="text"
            id="dataLimit"
            value={dataLimit}
            onChange={(e) => setDataLimit(e.target.value)}
          />
          {formErrors.dataLimit && (
            <span style={{ color: 'red' }}>{formErrors.dataLimit}</span>
          )}
        </div>

        <button onClick={handleAddAddonPlan}>Add Addon Plan</button>
      </div>
    </div>
  );
};

export default AdminAddAddonPlanPage;
