import React, { useState } from 'react';
import '../css/AdminSettingsPage.css'; // Import your CSS file for styling

const AdminSettingsPage = () => {
  const adminData = {
    id: 'A123',
    name: 'Yamini',
    email: 'admin@example.com',
    role: 'Administrator',
    lastLogin: '993456788',
  };

  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');

  const handleChangeEmail = () => {
    console.log(`Changing admin email to: ${newEmail}`);
    adminData.email = newEmail;
    alert('Admin email changed successfully!');
  };

  const handleChangeName = () => {
    console.log(`Changing admin name to: ${newName}`);
    adminData.name = newName;
    alert('Admin name changed successfully!');
  };

  return (
    <div className="admin-page-container admin-settings-section">
      <h2>Admin Settings</h2>
      <div>
        <strong>Admin ID:</strong> {adminData.id}
      </div>
      <br></br>
      <div>
        <strong>Admin Name:</strong> {adminData.name}
      </div>
      <br></br>
      <div>
        <strong>Admin Email:</strong> {adminData.email}
      </div>
      <br></br>
      <div>
        <strong>Role:</strong> {adminData.role}
      </div>
      <br></br>
      <div>
        <strong>Last Login:</strong> {adminData.lastLogin}
      </div>
      <div>
        <label>
          <span>New Email:</span>
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <span>New Name:</span>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleChangeEmail}>Change Email</button>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

export default AdminSettingsPage;
