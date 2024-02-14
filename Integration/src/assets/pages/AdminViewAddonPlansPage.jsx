// AdminViewAddonPlansPage.jsx

import React from 'react';
import '../css/AdminViewAddonPlansPage.css'; // Import your CSS file for styling
import AdminSidebar from './AdminSidebar';

const AdminViewAddonPlansPage = () => {
  // Sample addon plans data
  const addonPlans = [
    {
      addonName: 'Additional Data',
      description: 'Extra data for heavy users.',
      amount: '$10.00',
      dataLimit: '5GB',
    },
    {
      addonName: 'International Calls',
      description: 'Allows calls at discounted rates.',
      amount: '$15.00',
      dataLimit: 'Unlimited',
    },
    {
      addonName: 'Weekend Unlimited',
      description: 'Unlimited data for weekends.',
      amount: '$8.00',
      dataLimit: 'Unlimited',
    },
    {
      addonName: 'Night Owl Pack',
      description: 'Unlimited data during late-night hours.',
      amount: '$5.00',
      dataLimit: 'Unlimited',
    },
    {
      addonName: 'Business Traveler',
      description: 'Special data and calling plan for business travelers.',
      amount: '$20.00',
      dataLimit: '10GB',
    },
    {
      addonName: 'Music Lover Pack',
      description: 'Free access to music without data charges.',
      amount: '$7.00',
      dataLimit: '2GB',
    },
    // Add more addon plans as needed
  ];

  return (
    <div className="admin-view-addon-plans-container">
      <AdminSidebar/>
      <center>
      <h1>View Addon Plans</h1>
      </center>
      <div className="addon-plans-list">
        {addonPlans.map((addon, index) => (
          <div className="addon-plan" key={index}>
            <h2>Addon Name: {addon.addonName}</h2>
            <p style={{color:"blue"}}><b>Description: </b>{addon.description}</p>
            <p style={{color:"blue"}}><b>Amount: </b>{addon.amount}</p>
            <p style={{color:"blue"}}><b>Data Limit: </b>{addon.dataLimit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminViewAddonPlansPage;
