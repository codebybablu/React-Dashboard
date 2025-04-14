import { useState, useEffect } from 'react';
import './Dashboard.css';

function DashboardOverview() {
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed: 0,
    productivity: 0
  });

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        projects: 12,
        tasks: 47,
        completed: 32,
        productivity: 78
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overview-container">
      <h2>Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Projects</h3>
          <p className="stat-value">{stats.projects}</p>
          <p className="stat-change">+2 this week</p>
        </div>
        
        <div className="stat-card">
          <h3>Tasks</h3>
          <p className="stat-value">{stats.tasks}</p>
          <p className="stat-change">+15 this week</p>
        </div>
        
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-value">{stats.completed}</p>
          <p className="stat-change positive">↑ 12% from last week</p>
        </div>
        
        <div className="stat-card">
          <h3>Productivity</h3>
          <p className="stat-value">{stats.productivity}%</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${stats.productivity}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>
            <span className="activity-icon">📝</span>
            <div>
              <p>Created project "Website Redesign"</p>
              <small>2 hours ago</small>
            </div>
          </li>
          <li>
            <span className="activity-icon">✅</span>
            <div>
              <p>Completed task "Homepage layout"</p>
              <small>5 hours ago</small>
            </div>
          </li>
          <li>
            <span className="activity-icon">👥</span>
            <div>
              <p>Added team member to project</p>
              <small>Yesterday</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardOverview;