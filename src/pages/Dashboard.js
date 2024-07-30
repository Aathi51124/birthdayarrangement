// src/pages/Dashboard.js
import React from 'react';
import EventCount from '../components/EventCount';
import CalendarView from '../components/CalendarView';
import UserStats from '../components/UserStats';
import ActivityFeed from '../components/ActivityFeed';
import EventList from '../components/EventList';
import RecentRegistrations from '../components/RecentRegistrations';
import Notifications from '../components/Notifications';
import BarChart from '../components/BarChart'; // Import the BarChart component

import '../styles/Dashboard.css';

// Example data for the BarChart component
const chartData = [
  { date: '2024-01', count: 5 },
  { date: '2024-02', count: 10 },
  { date: '2024-03', count: 15 },
  { date: '2024-04', count: 7 },
  { date: '2024-05', count: 12 },
  { date: '2024-06', count: 8 },
  { date: '2024-07', count: 9 }
];

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-widgets dashboard-grid">
        <EventCount />
        <CalendarView />
        <UserStats />
        <ActivityFeed />
        <EventList />
        <RecentRegistrations />
        <Notifications />
        <div className="dashboard-bar-chart card">
          <h3>Event Statistics</h3>
          <BarChart data={chartData} /> {/* Add the BarChart component */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
