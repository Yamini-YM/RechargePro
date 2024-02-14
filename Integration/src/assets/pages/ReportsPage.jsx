import React from 'react';
import '../css/ReportsPage.css';
import AdminSidebar from './AdminSidebar';

const ReportsPage = () => {
  // Sample data for the user usage statistics table
  const usageStatisticsData = [
    { userID: 123, totalUsage: '150 MB', lastUsageDate: '2022-01-15' },
    { userID: 456, totalUsage: '200 MB', lastUsageDate: '2022-01-18' },
    // Add more data as needed
  ];

  // Sample data for the revenue breakdown table
  const revenueBreakdownData = [
    { category: 'Prepaid Recharges', revenue: '$5000' },
    { category: 'Postpaid Bills', revenue: '$2500' },
    // Add more data as needed
  ];

  // Sample data for the top add-on plans table
  const topAddonPlansData = [
    { planName: 'Data Booster', totalUsers: 80, revenue: '$1200' },
    { planName: 'Talktime Pack', totalUsers: 60, revenue: '$900' },
    // Add more data as needed
  ];

  // Sample data for the user complaints table
  const userComplaintsData = [
    { complaintID: 1, userID: 123, issue: 'Network Connectivity', status: 'Resolved' },
    { complaintID: 2, userID: 456, issue: 'Billing Discrepancy', status: 'Pending' },
    // Add more data as needed
  ];

  // Sample data for the service outages table
  const serviceOutagesData = [
    { outageID: 1, outageType: 'Network', outageStartTime: '2022-01-20 10:00 AM' },
    { outageID: 2, outageType: 'Server Maintenance', outageStartTime: '2022-02-05 08:30 AM' },
    // Add more data as needed
  ];

  // Sample data for the monthly subscription renewals table
  const subscriptionRenewalsData = [
    { userID: 123, planType: 'Prepaid', renewalDate: '2022-02-01' },
    { userID: 456, planType: 'Postpaid', renewalDate: '2022-02-10' },
    // Add more data as needed
  ];

  return (
    <div className="reports-container">
      <AdminSidebar/>
        <center>
      <h2>Reports</h2>
      </center>
    
      {/* Add more report sections with tables or additional details */}
      
      {/* <div className="report-section">
      
        <h3 style={{color:"black"}}>User Usage Statistics</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Total Usage</th>
              <th>Last Usage Date</th>
            </tr>
          </thead>
          <tbody>
            {usageStatisticsData.map((data, index) => (
              <tr key={index}>
                <td>{data.userID}</td>
                <td>{data.totalUsage}</td>
                <td>{data.lastUsageDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <div className="report-section">
        <h3>Revenue Breakdown</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {revenueBreakdownData.map((data, index) => (
              <tr key={index}>
                <td>{data.category}</td>
                <td>{data.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="report-section">
        <h3 style={{color:"black"}}>Top Add-On Plans</h3>
        <table>
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Total Users</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topAddonPlansData.map((data, index) => (
              <tr key={index}>
                <td>{data.planName}</td>
                <td>{data.totalUsers}</td>
                <td>{data.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="report-section">
        <h3 style={{color:"black"}}>User Complaints</h3>
        <table>
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>User ID</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userComplaintsData.map((data, index) => (
              <tr key={index}>
                <td>{data.complaintID}</td>
                <td>{data.userID}</td>
                <td>{data.issue}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="report-section">
        <h3>Service Outages</h3>
        <table>
          <thead>
            <tr>
              <th>Outage ID</th>
              <th>Outage Type</th>
              <th>Outage Start Time</th>
            </tr>
          </thead>
          <tbody>
            {serviceOutagesData.map((data, index) => (
              <tr key={index}>
                <td>{data.outageID}</td>
                <td>{data.outageType}</td>
                <td>{data.outageStartTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="report-section">
        <h3 style={{color:"black"}}>Monthly Subscription Renewals</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Plan Type</th>
              <th>Renewal Date</th>
            </tr>
          </thead>
          <tbody>
            {subscriptionRenewalsData.map((data, index) => (
              <tr key={index}>
                <td>{data.userID}</td>
                <td>{data.planType}</td>
                <td>{data.renewalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ReportsPage;
