// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import FindTopEventPlanners from '../components/FindTopEventPlanners';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Birthday Event Planner</h1>
        <p className="hero-subtitle">Your one-stop solution for organizing unforgettable birthday parties!</p>
        <div className="hero-buttons">
          <a href="/register" className="hero-cta-button">Get Started</a>
          <a href="/dashboard" className="hero-dashboard-button">Dashboard</a>
          <a href="/admin-signin" className="hero-admin-button">Admin Sign-In</a>
        </div>
      </section>

      <FindTopEventPlanners /> {/* Add the new component here */}

      <section className="features-section">
        <div className="feature-card">
          <h2 className="feature-title">Easy Booking Process</h2>
          <p className="feature-description">
            Simplify your event planning with our straightforward booking process. Our user-friendly platform allows you to easily book your preferred event planner, manage your bookings, and make secure payments. Enjoy a seamless experience from start to finish.
          </p>
        </div>
        <div className="feature-card">
          <h2 className="feature-title">Personalized Event Management</h2>
          <p className="feature-description">
            Receive personalized assistance to ensure your event is uniquely tailored to your preferences. Our team works closely with you to handle every detail, from venue selection to decorations, catering, and entertainment, making your event truly special and memorable.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At Birthday Event Planner, we specialize in creating memorable and unique birthday parties. Our team of experienced planners works with you to ensure every detail is perfect, from venue selection to decorations, catering, and entertainment.
        </p>
      </section>

      <section className="testimonial-section">
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">"The best event planner experience I've ever had! Highly recommend this service."</p>
          <p className="testimonial-author">- Jane Doe</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"Amazing service and support throughout the planning process. Made my birthday unforgettable!"</p>
          <p className="testimonial-author">- John Smith</p>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have questions or need assistance? Contact us at <a href="mailto:info@birthdayeventplanner.com">info@birthdayeventplanner.com</a> or call us at (123) 456-7890.
        </p>
      </section>
    </div>
  );
};

export default Home;
