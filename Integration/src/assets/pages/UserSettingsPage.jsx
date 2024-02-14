import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import '../css/UserSettingsPage.css'; // Import your CSS file
import Sidebar from './Sidebar';
const UserSettingsPage = () => {
  const [fullName, setFullName] = useState('Yamini Y M');
  const [email, setEmail] = useState('yamini@gmail.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSaveSettings = () => {
    // Perform any logic you need before showing the alert
    alert(`Settings saved successfully!\nFull Name: ${fullName}\nEmail: ${email}`);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    // Perform any logic you need before showing the alert
    alert('Password saved successfully!');
  };

  return (
    <div className="user-settings-container">
      <UserSidebar />
      <Sidebar/>
      <div className="settings-content">
        <center>
          <h2 style={{ color: "black" }}>User Settings</h2>
        </center>
        <div className="flex-container">
          <div className="user-info">
            <h3 style={{ fontSize:"17px" }}>Personal Information</h3>
            <label style={{ fontSize:"17px" }}>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <label style={{ fontSize:"17px" }}>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="change-password">
            <h3 style={{ fontSize:"17px" }}>Change Password</h3>
            <form onSubmit={handleSavePassword}>
              <label htmlFor="currentPassword" style={{ fontSize:"17px" }}>Current Password:</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <label htmlFor="newPassword" style={{ fontSize:"17px" }}>New Password:</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <label htmlFor="confirmNewPassword"  style={{ fontSize:"17px" }}>Confirm New Password:</label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />

              <button type="submit" className="save-password-btn">
                Save Password
              </button>
            </form>
          </div>

          <div className="communication-preferences">
            <h3  style={{ fontSize:"17px" }}>Communication Preferences</h3>
            <label style={{ fontSize:"17px" }}>
              Receive promotional emails
              <input type="checkbox" />
            </label>
            <label style={{ fontSize:"17px" }}>
              Receive transaction notifications
              <input type="checkbox" />
            </label>
          </div>

          <div className="billing-address">
            <h3 style={{ color: "black" ,fontSize:"17px"}}>Billing Address</h3>
            <p style={{ color: "grey" }}><strong>Address:</strong> 123 Main St, Cityville</p>
            <p style={{ color: "grey" }}><strong>Zip Code:</strong> 12345</p>
            <p style={{ color: "grey" }}><strong>Country:</strong> United States</p>
          </div>
        </div>

        <button className="save-settings-btn" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default UserSettingsPage;
