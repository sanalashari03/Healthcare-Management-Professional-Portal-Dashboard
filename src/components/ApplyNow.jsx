import React from 'react';
import './ApplyNow.css';

const ApplyNow = () => {
  return (
    <section className="apply-section container">
      <div className="apply-card">
        <h2 className="apply-title">Apply Now</h2>
        <p className="apply-subtitle">Join our team of dedicated healthcare professionals.</p>
        
        <form className="apply-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="jane@example.com" />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="(555) 123-4567" />
          </div>
          
          <div className="form-group">
            <label>Role</label>
            <input type="text" placeholder="e.g. RN, LPN, CNA" />
          </div>
          
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default ApplyNow;
