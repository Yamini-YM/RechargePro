// AdminAddPlansPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/AdminAddPlansPage.css';
import AdminSidebar from './AdminSidebar';

const AdminAddPlansPage = () => {
  const navigate = useNavigate();
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

  const handleAddPlan = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/AdminRegistrationPage');
        return;
      }

      const response = await axios.post('http://localhost:8080/admin-plans', {
        planName,
        planAmount,
        planValidity,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Plan Added:', response.data);

      setPlanName('');
      setPlanAmount('');
      setPlanValidity('');

      alert('Plan added successfully!');
      
      navigate('/AdminViewPlansPage');
    } catch (error) {
      console.error('Error adding plan:', error);
    }
  };

  return (
    <div className="admin-prepaid-add-plans-container">
      <AdminSidebar />
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
        <button type="button" onClick={handleAddPlan}>
          Add Plan
        </button>
      </form>
    </div>
  );
};

export default AdminAddPlansPage;
