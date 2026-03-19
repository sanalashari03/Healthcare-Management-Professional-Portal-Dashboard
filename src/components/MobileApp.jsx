import React from 'react';
import { Smartphone, Download } from 'lucide-react';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <section className="mobile-app-section">
      <div className="container">
        <div className="mobile-app-header">
          <div className="badge download-badge">Download</div>
          <h2 className="section-title-main">Get the App</h2>
          <p className="section-subtitle-main">Manage your shifts and staffing needs on the go.</p>
        </div>

        <div className="mobile-app-card">
          <div className="mobile-app-content">
            <div className="badge mobile-badge">Mobile App</div>
            <h2 className="mobile-app-title">Smarter Staffing at Your Fingertips</h2>
            <p className="mobile-app-text">
              Facilities can instantly post open shifts, and qualified healthcare professionals can claim them in real-time. Our platform uses advanced matching to connect the right clinician to the right opportunity.
            </p>
            
            <div className="mobile-app-user-types">
              <div className="user-type-card">
                <h4 className="user-type-title">Facilities</h4>
                <p>Post shifts, view profiles, and approve timesheets instantly.</p>
              </div>
              <div className="user-type-card">
                <h4 className="user-type-title">Professionals</h4>
                <p>Find work, track earnings, and get paid fast.</p>
              </div>
            </div>

            <div className="mobile-app-buttons">
              <a href="#" className="app-store-btn white-btn">
                <div className="btn-icon"></div>
                <div className="btn-text">
                  <span className="small">Download on the</span>
                  <span className="large">App Store</span>
                </div>
              </a>
              <a href="#" className="app-store-btn outline-btn">
                <div className="btn-icon">▶</div>
                <div className="btn-text">
                  <span className="small">GET IT ON</span>
                  <span className="large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="mobile-app-visual">
            <div className="orange-glow"></div>
            <div className="image-frame">
              <img src="/mobile-app-new.png" alt="EDM Mobile App" className="new-app-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
