import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const facilitySteps = [
    { id: '01', title: 'Post Shifts', desc: 'Create and post shifts instantly through our platform.' },
    { id: '02', title: 'Match & Notify', desc: 'Qualified professionals receive instant notifications.' },
    { id: '03', title: 'Real-time Booking', desc: 'Staff claim shifts in real-time based on your criteria.' },
    { id: '04', title: 'Approve & Pay', desc: 'Review timesheets and manage billing seamlessly.' },
  ];

  const professionalSteps = [
    { id: '01', title: 'Download App', desc: 'Get the app and create your professional profile.' },
    { id: '02', title: 'Get Credentialed', desc: 'Complete our vetting process and upload documents.' },
    { id: '03', title: 'Book Shifts', desc: 'Browse and instantly book shifts that fit your life.' },
    { id: '04', title: 'Get Paid', desc: 'Submit timesheets via app and get paid quickly.' },
  ];

  return (
    <div className="how-it-works-section">
      <div className="hiw-header container">
        <div className="badge blue-badge">Process</div>
        <h2 className="hiw-title">How It Works</h2>
        <p className="hiw-subtitle">Seamless staffing for facilities and professionals.</p>
      </div>

      <div className="hiw-grid container">
        {/* For Facilities */}
        <div className="hiw-card facilities-card">
          <h3 className="card-title">For Facilities</h3>
          <div className="steps-list">
            {facilitySteps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number blue-bg">{step.id}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
                {index < facilitySteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
          <div className="corner-shape-bottom"></div>
        </div>

        {/* For Professionals */}
        <div className="hiw-card professionals-card">
          <h3 className="card-title">For Professionals</h3>
          <div className="steps-list">
            {professionalSteps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number orange-bg">{step.id}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.desc}</p>
                </div>
                {index < professionalSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
          <div className="corner-shape-top"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
