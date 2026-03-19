import React from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  return (
    <section className="join-page">
      <div className="container">
        <div className="join-header">
          <div className="badge careers-badge">Careers</div>
          <h2 className="join-main-title">Request for staffing/Become a client</h2>
          <p className="join-subtitle">
            Become part of a network that values your skills and offers the flexibility you deserve.
          </p>
        </div>

        <div className="join-banner">
          <div className="join-banner-inner">
            <h2 className="banner-title">Ready to Staff Smarter?</h2>
            <p className="banner-text">
              Whether you are a healthcare facility looking for quality professionals or a licensed pro 
              ready for your next opportunity, EDM Solutions has the right fit.
            </p>
            <div className="join-actions">
              <Link to="/apply" className="btn-staff">Request Staff</Link>
              <Link to="/apply" className="btn-talent">Join Talent Pool</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
