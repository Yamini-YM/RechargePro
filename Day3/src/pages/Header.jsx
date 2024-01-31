import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            <Link to="/UserProfilePage">🙎🏻‍♂️ My Profile</Link>
          </li>
          <li>
            <Link to="/Logout">📲 Log Out</Link>
          </li>
          {/* Add more navigation items if needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
