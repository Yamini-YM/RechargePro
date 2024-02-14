// FAQPage.jsx

import React from 'react';
import '../css/FAQPage.css';
import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';

const FAQPage = () => {
  return (
    <div className="faq-container">
      <Sidebar/>
        <center>
      <h2>Frequently Asked Questions (FAQ)</h2>
      </center>
      <div className="faq-section">
        <h3>1. How do I recharge my mobile?</h3>
        <p style={{color:"black"}}>
          To recharge your mobile, log in to your account, navigate to the recharge section, and follow the instructions provided. You can choose your recharge plan and make the payment securely.
        </p>
      </div>

      <div className="faq-section">
        <h3>2. Can I view my transaction history?</h3>
        <p style={{color:"black"}}>
          Yes, you can view your transaction history by going to the "Transaction History" section in your account. It will display details of all your past recharges and transactions.
        </p>
      </div>

      <div className="faq-section">
        <h3>3. What payment methods are accepted?</h3>
        <p style={{color:"black"}}>
          We accept various payment methods, including credit/debit cards, net banking, and digital wallets. You can choose the payment method that suits you best during the recharge process.
        </p>
      </div>

      <div className="faq-section">
        <h3>4. How can I update my profile information?</h3>
        <p style={{color:"black"}}>
          To update your profile information, go to the "Profile" section and click on the "Edit Profile" option. You can then modify your details such as name, email, and password.
        </p>
      </div>

      <div className="faq-section">
        <h3>5. What should I do if I face issues with my recharge?</h3>
        <p style={{color:"black"}}>
          If you encounter any issues with your recharge, please contact our support team through the "Support" section. They will assist you in resolving the problem promptly.
        </p>
      </div>
    </div>
  );
};

export default FAQPage;
