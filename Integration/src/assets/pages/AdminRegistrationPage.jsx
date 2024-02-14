import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/AdminRegistrationPage.css'; // Make sure this path is correct
import axios from 'axios';

const AdminRegistrationPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Authentication logic
      // Make an HTTP request to your backend for authentication
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password,
      });

      // Assuming your backend returns a token upon successful login
      const token = response.data.token;

      // Log statement to check if this part is reached
      console.log('Logging in with:', { email, password });

      if (response.status === 202 && response.data.role === 'ADMIN') {
        // Store the token in the local storage
        localStorage.setItem('token', token);

        // Redirect to the admin dashboard after successful login
        setError('');
        navigate('/AdminHomePage');
      } else {
        setError('Invalid email or password');
      }

    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2 style={{ color: "black" }}><b>Login to Mobile Recharge App</b></h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label style={{ color: "black" }} htmlFor="email">Email:</label>
          <input
            type="text"
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
        <center>
          <button style={{ backgroundColor: 'blue' }} type="submit">Login</button>
        </center>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p style={{ color: "black" }} className="login-link">
        New user? <Link to="/RegistrationPage">Register here</Link>
      </p>
    </div>
  );
};

export default AdminRegistrationPage;
