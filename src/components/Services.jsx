import React from 'react';
import { User, ClipboardList, Activity, Heart, Shield, PlusCircle } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Registered Nurses (RNs)', letter: 'R', color: '#3182CE' },
    { title: 'Licensed Practical Nurses (LPNs)', letter: 'L', color: '#38B2AC' },
    { title: 'Certified Nursing Assistants (CNAs)', letter: 'C', color: '#5A67D8' },
    { title: 'Physicians & Medical Doctors', letter: 'P', color: '#805AD5' },
    { title: 'Allied Techs & Direct Care', letter: 'A', color: '#D53F8C' },
    { title: 'Allied Health Professionals', letter: 'A', color: '#ED8936' },
  ];

  const testimonials = [
    {
      text: "EDM Solutions helped us fill a critical nurse vacancy within 24 hours. Professional, reliable, and caring.",
      author: "Sarah Jenkins",
      title: "Nursing Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=clamp&w=100&h=100&q=80"
    },
    {
      text: "Our long-term care facility has relied on EDM for years. Their CNAs and Med Techs are top quality.",
      author: "Mark Thompson",
      title: "HR Manager",
      letter: "M",
      color: "#FFB020"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header container">
        <div className="badge blue-badge">Services</div>
        <h2 className="main-title">Our Services</h2>
        <p className="main-subtitle">
          Comprehensive staffing solutions tailored to the unique needs of healthcare facilities.
        </p>
      </div>

      <div className="services-split-grid container">
        {/* Left Section: Facilities */}
        <div className="facilities-section">
          <div className="badge orange-badge">Our Services</div>
          <h2 className="column-title">Facilities</h2>
          
          <div className="facility-grid">
            {services.map((service, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon" style={{ backgroundColor: service.color }}>
                  {service.letter}
                </div>
                <div className="facility-info">
                  <h4 className="facility-name">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <button className="view-all-btn">View All Services</button>
        </div>

        {/* Right Section: Testimonials */}
        <div className="testimonials-section">
          <div className="badge blue-badge">Client Testimonials</div>
          <h2 className="column-title">What They Say</h2>
          
          <div className="testimonial-stack">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-mini-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author-box">
                  {t.image ? (
                    <img src={t.image} alt={t.author} className="author-img" />
                  ) : (
                    <div className="author-letter" style={{ backgroundColor: t.color }}>{t.letter}</div>
                  )}
                  <div className="author-info">
                    <h5 className="author-name">{t.author}</h5>
                    <p className="author-title">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
