import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminRegistrationPage.css';

const AdminRegistrationPage = ({ onAdminRegister }) => {
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!adminName || adminName.trim() === '') {
      errors.adminName = 'Admin Name is required.';
    }

    if (!adminEmail || adminEmail.trim() === '') {
      errors.adminEmail = 'Admin Email is required.';
    }

    if (!adminPassword || adminPassword.trim() === '') {
      errors.adminPassword = 'Password is required.';
    }

    if (adminPassword !== confirmAdminPassword) {
      errors.confirmAdminPassword = "Passwords don't match.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleAdminRegister = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform the registration and call onAdminRegister prop
      const adminData = {
        adminName,
        adminEmail,
        adminPassword,
      };

      // Assuming onAdminRegister is a prop function passed from the parent component
      onAdminRegister(adminData);

      // Clear form fields after successful registration
      setAdminName('');
      setAdminEmail('');
      setAdminPassword('');
      setConfirmAdminPassword('');
    }
  };

  return (
    <div className="admin-registration-container">
      <h2 style={{ color: 'black' }}>Admin Login</h2>
      <form onSubmit={handleAdminRegister}>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="adminName">
            Admin Name:
          </label>
          <input
            type="text"
            id="adminName"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            required
          />
          {formErrors.adminName && <span style={{ color: 'red' }}>{formErrors.adminName}</span>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="adminEmail">
            Admin Email:
          </label>
          <input
            type="email"
            id="adminEmail"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            required
          />
          {formErrors.adminEmail && <span style={{ color: 'red' }}>{formErrors.adminEmail}</span>}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="adminPassword">
            Password:
          </label>
          <input
            type="password"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
          {formErrors.adminPassword && (
            <span style={{ color: 'red' }}>{formErrors.adminPassword}</span>
          )}
        </div>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="confirmAdminPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmAdminPassword"
            value={confirmAdminPassword}
            onChange={(e) => setConfirmAdminPassword(e.target.value)}
            required
          />
          {formErrors.confirmAdminPassword && (
            <span style={{ color: 'red' }}>{formErrors.confirmAdminPassword}</span>
          )}
        </div>
        <center>
          <Link to="/AdminHomePage">
            <button style={{ backgroundColor: 'blue' }} type="submit">
              Login
            </button>
          </Link>
        </center>
      </form>
    </div>
  );
};

export default AdminRegistrationPage;
