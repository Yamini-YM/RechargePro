// ManageUsersPage.jsx

import React, { useState, useEffect } from 'react';
import '../css/ManageUsersPage.css';
// import AdminSidebar from './AdminSidebar';


const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from your API or database
    // Update the state with the fetched data
    // Example API call:
    fetch('https://your-api-url/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <p>{user.fullName}</p>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsersPage;
