import React, { useState } from 'react';
import '../css/RegistrationPage.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Validate inputs and perform registration logic
    if (password !== confirmPassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }
  
    // Perform the registration logic here
    // You can make an API call, update state, or perform any necessary action
  
    // For example, log the registration data to the console
    console.log('User registered:', {
      fullName,
      email,
      password,
      mobileNumber,
    });
  
    // Navigate to the "/HomePage"
    window.location.href = "/HomePage";
  };
  

  return (
    <div className="lt dark-mode">
      <h2 style={{ color: "black" }}>Create an Account</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
            onChange={(e) => setmobileNumber(e.target.value)}
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

export default RegistrationPage;
