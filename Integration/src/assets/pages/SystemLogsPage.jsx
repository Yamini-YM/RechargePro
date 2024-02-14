import React from 'react';
import '../css/SystemLogsPage.css';
import AdminSidebar from './AdminSidebar';


const SystemLogsPage = () => {
  // Sample data for system logs
  const systemLogsData = [
    { logID: 1, timestamp: '2022-02-15 12:30 PM', level: 'INFO', module: 'Authentication', ipAddress: '192.168.1.1', message: 'User logged in' },
    { logID: 2, timestamp: '2022-02-16 10:45 AM', level: 'ERROR', module: 'Database', ipAddress: '192.168.1.2', message: 'Failed to connect to the database' },
    { logID: 3, timestamp: '2022-02-17 02:15 PM', level: 'WARN', module: 'Security', ipAddress: '192.168.1.3', message: 'Unauthorized access attempt detected' },
    { logID: 4, timestamp: '2022-02-18 08:00 AM', level: 'DEBUG', module: 'User Management', ipAddress: '192.168.1.4', message: 'User role updated' },
    { logID: 5, timestamp: '2022-02-19 04:30 PM', level: 'INFO', module: 'System', ipAddress: '192.168.1.5', message: 'System shutdown initiated' },
    // Add more data as needed
  ];

  return (
    <div className="system-logs-container">
      <AdminSidebar/>
      <center>
      <h2 style={{color:"black"}}>System Logs</h2>
      </center>
      <br></br>
      {/* <br></br> */}
      <div className="logs-section">
        <table>
          <thead>
            <tr>
              <th>Log ID</th>
              <th>Timestamp</th>
              <th>Level</th>
              <th>Module</th>
              <th>IP Address</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {systemLogsData.map((data) => (
              <tr key={data.logID}>
                <td>{data.logID}</td>
                <td>{data.timestamp}</td>
                <td>{data.level}</td>
                <td>{data.module}</td>
                <td>{data.ipAddress}</td>
                <td>{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemLogsPage;
