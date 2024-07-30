// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import BookingPage from './components/BookingPage'; // Import BookingPage component

function App() {
  const location = useLocation();
  const showFooter = !['/login', '/register', '/admin-login'].includes(location.pathname);
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <>
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <Login />} />
          <Route path="/booking/:plannerId" element={<BookingPage />} /> {/* Ensure this route is correct */}
        </Routes>
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
