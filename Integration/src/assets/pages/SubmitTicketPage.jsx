// SubmitTicketPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import '../css/SubmitTicketPage.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const SubmitTicketPage = () => {
  const navigate = useNavigate();
  const [ticketData, setTicketData] = useState({
    subject: '',
    description: '',
    contactMethod: 'email',
    contactInfo: '',
  });

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const validateTicketForm = () => {
    return ticketData.subject.trim() !== '' &&
      ticketData.description.trim() !== '' &&
      ticketData.contactInfo.trim() !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setFormValid(true);

    if (!validateTicketForm()) {
      setErrors({ ticketValidation: 'Invalid ticket details' });
      setFormValid(false);
    }

    // If form is not valid, stop further processing
    if (!formValid) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Authentication token is missing. Please log in.');
        navigate('/');  // Navigate to the login page or handle it accordingly
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post('/submit-ticket', ticketData, config);

      console.log('Ticket submitted:', response.data);

      alert('Ticket submitted successfully!');

      // Reset form fields after successful ticket submission
      setTicketData({
        subject: '',
        description: '',
        contactMethod: 'email',
        contactInfo: '',
      });

      // Navigate to the UserProfilePage or any other desired page
      navigate('/UserProfilePage');
    } catch (error) {
      console.error('Ticket submission failed:', error);
      alert('Ticket submission failed. Please try again.');
    }
  };

  return (
    <div className="submit-ticket-container">
      <Sidebar />
      <h2 style={{ color: 'black' }}>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={ticketData.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="contactMethod">
            Contact Method:
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={ticketData.contactMethod}
            onChange={handleInputChange}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div className="form-group">
          <label style={{ color: 'black' }} htmlFor="contactInfo">
            Contact Information:
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={ticketData.contactInfo}
            onChange={handleInputChange}
            required
          />
        </div>

        {!formValid && <p style={{ color: 'red' }}>Please fix the errors before submitting the form.</p>}
        <center>
          <button type="submit">Submit Ticket</button>
        </center>
      </form>
    </div>
  );
};

export default SubmitTicketPage;
