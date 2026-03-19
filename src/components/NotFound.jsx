import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="container">
        <div className="error-card">
          <div className="badge error-badge">ERROR</div>
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-text">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, 
            or the URL might be incorrect. Don't worry, we'll help you find what you need.
          </p>
          
          <div className="error-actions">
            <Link to="/" className="btn-home">🏠 Go to Homepage</Link>
            <button onClick={() => navigate(-1)} className="btn-back">← Go Back</button>
          </div>

          <div className="divider"></div>

          <div className="quick-destinations">
            <h4 className="dest-title">Looking for something specific?</h4>
            <div className="dest-grid">
              <Link to="/services" className="dest-card">
                <div className="dest-icon">💼</div>
                <div className="dest-info">
                  <h5>Our Services</h5>
                  <p>View all our offerings</p>
                </div>
              </Link>
              
              <Link to="/how-it-works" className="dest-card">
                <div className="dest-icon">⚙️</div>
                <div className="dest-info">
                  <h5>How It Works</h5>
                  <p>Learn about our process</p>
                </div>
              </Link>

              <Link to="/apply" className="dest-card">
                <div className="dest-icon">✍️</div>
                <div className="dest-info">
                  <h5>Apply Now</h5>
                  <p>Join our platform</p>
                </div>
              </Link>

              <Link to="/contact" className="dest-card">
                <div className="dest-icon">📞</div>
                <div className="dest-info">
                  <h5>Contact Us</h5>
                  <p>Get in touch with support</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
