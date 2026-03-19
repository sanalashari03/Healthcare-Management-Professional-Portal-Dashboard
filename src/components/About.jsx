import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const choices = [
    "Specialized focus on healthcare staffing and clinical expertise",
    "Robust database of physicians, nurses, CNAs, medical technologists, direct care workers and other licensed professionals",
    "Thorough credentialing and compliance with state and federal regulations",
    "24/7 support for clients and clinicians during assignments",
    "Transparent and ethical recruitment practices"
  ];

  return (
    <div className="about-section container">
      <div className="about-header">
        <div className="badge blue-badge">About Us</div>
        <h1 className="about-main-title">About EDM Solutions</h1>
        <p className="about-intro">
          A trusted partner for healthcare employers and clinicians alike, EDM Solutions brings decades of staffing expertise and a commitment to patient-focused service.
        </p>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        <section className="story-section">
          <h2 className="about-subtitle">Our Story</h2>
          <p className="about-text">
            Founded in Bethlehem, Pennsylvania, EDM Solutions began with a simple mission: help healthcare providers find the best clinicians and help medical professionals find rewarding careers. Over the years we've grown into a respected staffing agency serving hospitals, nursing homes, rehabilitation centers and private practices throughout the region. Our deep understanding of healthcare workforce dynamics and our commitment to patient care have earned us a reputation for excellence.
          </p>
        </section>

        <section className="approach-section">
          <div className="approach-pill">
            <h3 className="approach-title">Our Approach</h3>
            <p className="about-text">
              We believe that successful healthcare staffing is built on relationships and rigorous credentialing. Our recruiters take the time to understand your facility's needs—patient acuity, unit culture and workflow—so we can identify candidates who are not only clinically competent but also the right fit for your team. Each professional we place undergoes thorough background checks, license verification and skills assessments. For clinicians, we provide guidance and support throughout every step of the process — from resume preparation to interview coaching, onboarding and continuing education.
            </p>
          </div>
        </section>

        <section className="why-choose-us">
          <h2 className="about-subtitle">Why Choose Us?</h2>
          <div className="choices-list">
            {choices.map((choice, index) => (
              <div key={index} className="choice-item">
                <CheckCircle2 color="#FFA500" size={20} className="check-icon" />
                <span className="choice-text">{choice}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
