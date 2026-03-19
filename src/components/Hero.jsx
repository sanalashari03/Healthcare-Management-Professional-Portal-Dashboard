import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const floatingCards = [
    { title: 'Active Shifts', icon: '📅', position: 'top-left' },
    { title: 'Available Staff', icon: '👥', position: 'top-right' },
    { title: 'Compliance', icon: '✅', position: 'bottom-left' },
    { title: 'Coverage', icon: '📊', position: 'bottom-right' },
  ];

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">Now active in 50 states</div>
          <h1 className="hero-title">
            Healthcare Staffing <br />
            <span>You Can Trust</span>
          </h1>
          <p className="hero-subtitle">
            Connecting facilities with compassionate, qualified professionals—where and when 
            care matters most. Experience the future of staffing.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Request Staff</button>
            <button className="btn btn-secondary">Join Our Talent Pool</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="central-logo">
            <div className="logo-box">EDM</div>
          </div>
          
          {floatingCards.map((card, index) => (
            <motion.div 
              key={index}
              className={`floating-card ${card.position}`}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              <div className="card-header">
                <span className="card-icon">{card.icon}</span>
                <span className="card-title">{card.title}</span>
              </div>
              <div className="card-body">
                <div className="skeleton-line short"></div>
                <div className="skeleton-line"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
