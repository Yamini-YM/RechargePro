// UserTypeSelection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserTypeSelection.css';

const UserTypeSelection = () => {
  return (
    <div className="user-type-selection-container">
      <h2 style={{color:"black"}} >Choose Your Role</h2>
      <div className="user-type-buttons">
      <center>
      <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
              alt="User"
              className="user-image"
            />
            </center>
        <Link to="/">
          <button className="user-button">USER</button>
        </Link>
        <center>
        <img
              src="https://cdn-icons-png.freepik.com/256/6997/6997519.png"
              alt="Admin"
              className="admin-image"
            />
            </center>
        <Link to="/AdminRegistrationPage">
          <button className="admin-button">ADMIN</button>
        </Link>
        
      </div>
    </div>
  );
};

export default UserTypeSelection;
