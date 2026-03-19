import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, User, CheckCircle2, ArrowRight } from 'lucide-react';
import './Portals.css';

const Portals = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'facility',
      title: "Facility Portal",
      desc: "Manage your healthcare facility's staffing needs, view assigned professionals, approve timesheets, and handle billing.",
      icon: <Building2 size={32} color="white" />,
      color: "#003366",
      btnText: "Access Facility Portal",
      features: [
        "Post and manage shifts",
        "Approve timesheets & manage billing",
        "View invoices & communicate with staff"
      ],
      path: '/facility/auth'
    },
    {
      id: 'professional',
      title: "Professionals Portal",
      desc: "Manage your profile, credentials, assignments, and timesheets. Stay updated with upcoming shifts and notifications.",
      icon: <User size={32} color="white" />,
      color: "#f97316",
      btnText: "Access Professional Portal",
      features: [
        "Upload & manage credentials",
        "Submit timesheets & view assignments",
        "Track credential status & expiration"
      ],
      path: '/professional/auth'
    }
  ];

  return (
    <div className="portals-page-wrapper">
      <section className="portals-hero">
        <h1 className="portals-title">Portal Access</h1>
        <p className="portals-subtitle">Choose your portal to manage shifts, timesheets, credentials, and more</p>
      </section>

      <div className="portals-cards-grid container">
        {portals.map((portal) => (
          <div key={portal.id} className="portal-card-premium">
            <div className="portal-icon-box" style={{ backgroundColor: portal.color }}>
              {portal.icon}
            </div>
            <h2 className="portal-name">{portal.title}</h2>
            <p className="portal-description">{portal.desc}</p>
            
            <ul className="portal-feature-list">
              {portal.features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-icon" style={{ backgroundColor: portal.color + '20', color: portal.color }}>
                     <ClockIcon size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              className="portal-access-btn" 
              style={{ backgroundColor: portal.color }}
              onClick={() => navigate(portal.path)}
            >
              {portal.btnText} <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="portals-help-section">
        <div className="help-card container">
          <h3>Need Help?</h3>
          <p>If you're having trouble accessing your portal or need assistance, please contact our support team.</p>
          <button className="contact-btn">Contact Support</button>
        </div>
      </div>

      <footer className="portals-footer">
        <div className="footer-content">
          <h3>EDM Solutions</h3>
          <p>© 2026 EDM Solutions. All rights reserved.</p>
          <p className="footer-address">1042 Evans Street, St 105, Bethlehem, PA 18015 | info@edmsolutions.com</p>
          <button className="legal-btn">Legal</button>
        </div>
      </footer>
    </div>
  );
};

const ClockIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default Portals;
