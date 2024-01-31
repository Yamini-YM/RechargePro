// SupportPage.jsx

import React from 'react';
import '../css/SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-container">
        <center>
      <h2 style={{color:"black"}}>Contact Support</h2>
      </center>
      <div className="contact-info">
        <h3 style={{color:"black"}}>Contact Information:</h3>
        <p style={{color:"black"}}>
          If you need assistance or have any inquiries, please don't hesitate to contact our support team.
        </p>
        <p style={{color:"black"}}>
          <strong style={{color:"black"}}>Email:</strong> support@rechargeapp.com
        </p>
        <p style={{color:"black"}}>
          <strong style={{color:"black"}}>Phone:</strong> +1 (123) 456-7890
        </p>
      </div>

      <div className="working-hours">
        <h3 style={{color:"black"}}>Working Hours:</h3>
        <p style={{color:"black"}}>
          Our support team is available during the following hours:
        </p>
        <p style={{color:"black"}}>
          <strong style={{color:"black"}}>Monday to Friday:</strong> 9:00 AM - 6:00 PM
        </p>
        <p style={{color:"black"}}>
          <strong style={{color:"black"}}>Saturday and Sunday:</strong> Closed
        </p>
      </div>

      <div className="submit-ticket">
        <h3 style={{color:"black"}}>Submit a Support Ticket:</h3>
        <p style={{color:"black"}}>
          If you prefer, you can also submit a support ticket through our online system. Please provide detailed information about your issue, and our team will get back to you as soon as possible.
        </p>
        <a href="/SubmitTicketPage" className="submit-ticket-btn">Submit a Ticket</a>
      </div>
    </div>
  );
};

export default SupportPage;
