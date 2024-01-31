// UserProfilePage.jsx

import React from 'react';
import '../css/UserProfilePage.css';

const UserProfilePage = () => {
  return (
    <div className="user-profile-container">
      <center>
        <h2 style={{ color: "black" }}>User Profile</h2>
      </center>
      <img
          src="https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"
          alt="Profile"
          className="profile-image"
        />
      <div className="user-details">
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Name:</strong> Yamini Y M
        </p>
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Email:</strong> yamini@gmail.com
        </p>
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Mobile Number:</strong> 9363200217
        </p>
        {/* <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Date of Birth:</strong> January 15, 1990
        </p> */}
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Address:</strong> 1234 Street, City, Country
        </p>
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Gender:</strong> Female
        </p>
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>My Plans:</strong> Prepaid
        </p>
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Subscription Status:</strong> Active
        </p>
        <p style={{ color: "#555" }}>
          <strong style={{ color: "#333" }}>Account Type:</strong> Premium
        </p>
        {/* Add more static user details as needed */}
      </div>
    </div>
  );
};

export default UserProfilePage;
