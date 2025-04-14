import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Clear auth token if needed
    // localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
        <h2 className="logo">MyApp</h2>
        <ul>
          <li>
            <span className="icon">📊</span>
            <span>Dashboard</span>
          </li>
          <li>
            <span className="icon">👤</span>
            <span>Profile</span>
          </li>
          <li>
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          <span className="icon">🚪</span>
          <span className="button-text">Logout</span>
        </button>
      </div>

      {/* Main Area */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <button onClick={toggleSidebar} className="menu-btn">☰</button>
          <h1>Dashboard</h1>
        </div>

        {/* Cards */}
        <div className="cards-area">
          <div className="card">
            <h3>Users</h3>
            <p>1,500</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$24,000</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>350</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          © 2025 MyApp. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
