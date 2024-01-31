// UserTypeSelection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserTypeSelection.css';

const UserTypeSelection = () => {
  return (
    <div className="user-type-selection-container">
      <h2 style={{color:"black"}} >Choose Your Role</h2>
      <div className="user-type-buttons">
        <Link to="/">
          <button className="user-button">USER</button>
        </Link>
        <Link to="/AdminRegistrationPage">
          <button className="admin-button">ADMIN</button>
        </Link>
      </div>
    </div>
  );
};

export default UserTypeSelection;
