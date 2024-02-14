// RegistrationPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { registerUser } from './userActions';
import '../css/RegistrationPage.css';

const RegistrationPage = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword || !mobileNumber) {
      alert("Please fill in all the fields.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }
    const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
      name: name,
      email: email,
      password:password,
      confirmPassword:confirmPassword,
      mobileNumber:mobileNumber,
    });
    // Perform the registration and call onRegister prop
    const userData = {
      name,
      email,
      password,
      mobileNumber,
    };

    // Dispatch the action to store user data
    onRegister(userData);

    // Navigate to HomePage after successful registration
    navigate('/HomePage');
  };

  return (
    <div className="lt dark-mode">
      <h2 style={{ color: "black" }}>Create an Account</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p style={{ color: "black" }} className="registration-link">
        Already have an account? <Link to="/">Sign Up</Link>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRegister: (userData) => dispatch(registerUser(userData)),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
