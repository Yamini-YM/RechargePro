import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/LoginPage.css'; // Make sure this path is correct

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const navigate= useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    // Authentication logic

    // Log statement to check if this part is reached
    console.log('Logging in with:', { username, password });

    // Navigation
    navigate("/HomePage");
  } catch (err) {
    setError('Invalid username or password');
  }
};


  return (
    <div className="login-container">
      <h2 style={{ color: "black" }}><b>Login to Mobile Recharge App</b></h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <center>
        <button style={{ backgroundColor: 'blue' }} type="submit">Login</button>
        </center>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p  style={{ color: "black" }} className="login-link">
        New user? <Link to="/RegistrationPage">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
