import React from 'react';
import { CheckCircle } from 'lucide-react';
import './TrustedPartner.css';

const TrustedPartner = () => {
  const benefits = [
    '100% healthcare focused',
    'Stringent vetting & onboarding',
    'Flexible: per diem, travel, contract & long-term',
    'Rapid, responsive support',
    'Compliant with state & federal guidelines'
  ];

  return (
    <section className="trusted-section section-padding">
      <div className="container trusted-container">
        <div className="trusted-info">
          <div className="badge">Who We Are</div>
          <h2 className="section-title">
            Your Trusted Partner in <br />
            Healthcare Staffing
          </h2>
          <p className="trusted-text">
            At EDM Solutions, we provide licensed, dependable healthcare professionals to hospitals, 
            long-term care facilities and clinics. Whether you’re short-staffed or scaling up, we’re 
            here to help you maintain excellence in patient care.
          </p>
          <p className="trusted-text">
            We place RNs, LPNs, CNAs, Med Techs, DCWs, allied health professionals and physicians—quickly 
            and reliably.
          </p>
        </div>

        <div className="trusted-card">
          <h3 className="card-heading">Why Choose EDM?</h3>
          <ul className="benefit-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <CheckCircle className="check-icon" size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <button className="btn-full-blue">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
