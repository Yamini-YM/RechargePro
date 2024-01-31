import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Logout.css'; // Import the CSS file for styling

const AdminLogout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Additional logout actions if needed
    // ...

    // Redirect to the login page
    // history.push('/login');
  };

  return (
    <div className="logout-container">
      <div className="profile-section">
        <img
          src="https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"
          alt="Profile"
          className="profile-image"
        />
        <p style={{color:"black"}}><b>YaminiY M</b></p>
      </div>
      <div className="logout-details">
        <h2>Logout</h2>
        <p style={{color:"black"}}>Are you sure you want to logout? Logging out will end your current session.</p>
        <button onClick={() => setShowModal(true)}>Logout</button>
        {showModal && (
          <div className="modal">
            <p style={{color:"black"}}>
                Confirm Logout?</p>
            <div className="modal-buttons">
            <Link to="/AdminRegistrationPage">
              <button onClick={handleLogout}>Yes</button>
              </Link>
              <Link to="/AdminHomePage">
              <button onClick={() => setShowModal(false)}>No</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* <Link to="/">Back to Home</Link> */}
    </div>
  );
};

export default AdminLogout;

