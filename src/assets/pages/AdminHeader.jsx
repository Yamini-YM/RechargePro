import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file for styling

const AdminHeader = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          {/* <li>
            <Link to="/AboutUs">🌎 About Us</Link>
          </li> */}
          <li>
            <Link to="/AdminLogout">📲 Log Out</Link>
          </li>
          {/* Add more navigation items if needed */}
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
