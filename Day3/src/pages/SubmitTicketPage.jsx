// SubmitTicketPage.jsx

import React, { useState } from 'react';
import '../css/SubmitTicketPage.css';

const SubmitTicketPage = () => {
  const [ticketData, setTicketData] = useState({
    subject: '',
    description: '',
    contactMethod: 'email',
    contactInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the ticket
    console.log('Ticket submitted:', ticketData);

    // Display an alert when the form is submitted
    alert('Ticket submitted successfully!');
  };

  return (
    <div className="submit-ticket-container">
      <center>
        <h2>Submit a Support Ticket</h2>
      </center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={ticketData.subject}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={ticketData.description}
          onChange={handleInputChange}
          rows="4"
          required
        ></textarea>

        <label htmlFor="contactMethod">Contact Method:</label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={ticketData.contactMethod}
          onChange={handleInputChange}
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>

        <label htmlFor="contactInfo">Contact Information:</label>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          value={ticketData.contactInfo}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default SubmitTicketPage;
