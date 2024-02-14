// AdminSettingsPage.js
import React, { useState } from 'react';
import '../css/AdminSettingsPage.css';
import AdminSidebar from './AdminSidebar';

const AdminSettingsPage = () => {
  const [paymentGatewayApiKey, setPaymentGatewayApiKey] = useState('');
  const [commissionRate, setCommissionRate] = useState(5);
  const [minRechargeAmount, setMinRechargeAmount] = useState(10);

  // Additional settings
  const [serviceProviders, setServiceProviders] = useState([
    { id: 1, name: 'Provider A', logo: 'providerA.png', plans: ['Plan 1', 'Plan 2'] },
    { id: 2, name: 'Provider B', logo: 'providerB.png', plans: ['Plan 1', 'Plan 2', 'Plan 3'] },
  ]);

  const [promotions, setPromotions] = useState([
    { id: 1, discount: 10, code: 'DISCOUNT10', validUntil: '2024-12-31' },
    { id: 2, discount: 5, code: 'SUMMER5', validUntil: '2024-08-31' },
  ]);

  const handleSaveSettings = () => {
    console.log('Settings saved:', {
      paymentGatewayApiKey,
      commissionRate,
      minRechargeAmount,
      serviceProviders,
      promotions,
    });
    alert('Settings saved successfully!');
  };

  return (
    <div className="admin-settings">
      <AdminSidebar />
      <div className="admin-content">
        <center>
        <h2 style={{color:"brown"}}>App Settings</h2>
        </center>
        <form>
          {/* Payment Gateway API Key */}
          <div className="form-group">
            <label htmlFor="paymentGatewayApiKey" style={{color:"black",fontSize:"17px"}}>
              Payment Gateway API Key
              <span className="tooltip"style={{color:"black",fontSize:"17px"}}>This key is required for processing online transactions.</span>
            </label>
            <input
              type="text"
              id="paymentGatewayApiKey"
              value={paymentGatewayApiKey}
              onChange={(e) => setPaymentGatewayApiKey(e.target.value)}
            />
          </div>

          {/* Commission Rate */}
          <div className="form-group">
            <label htmlFor="commissionRate"style={{color:"black",fontSize:"17px"}}>
              Commission Rate (%)
              <span className="tooltip"style={{color:"black",fontSize:"17px"}}>Set the commission percentage for each transaction.</span>
            </label>
            <input
              type="number"
              id="commissionRate"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
            />
          </div>

          {/* Minimum Recharge Amount */}
          <div className="form-group">
            <label htmlFor="minRechargeAmount"style={{color:"black",fontSize:"17px"}}>
              Minimum Recharge Amount ($)
              <span className="tooltip"style={{color:"black",fontSize:"17px"}}>Specify the minimum amount users can recharge.</span>
            </label>
            <input
              type="number"
              id="minRechargeAmount"
              value={minRechargeAmount}
              onChange={(e) => setMinRechargeAmount(e.target.value)}
            />
          </div>

          {/* Additional settings */}
          <div className="form-group">
            <label htmlFor="serviceProviders">Service Providers</label>
            <ul style={{color:"brown",fontSize:"15px"}}>
              {serviceProviders.map(provider => (
                <li key={provider.id}>{provider.name}</li>
              ))}
            </ul>
          </div>

          <div className="form-group">
            <label htmlFor="promotions">Promotions</label>
            <ul>
              {promotions.map(promotion => (
                <li key={promotion.id}style={{color:"brown",fontSize:"15px"}}>
                  {`${promotion.discount}% off - Code: ${promotion.code} (Valid until ${promotion.validUntil})`}
                </li>
              ))}
            </ul>
          </div>

          {/* Save Button */}
          <button type="button" onClick={handleSaveSettings}>
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
