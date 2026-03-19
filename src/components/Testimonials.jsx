import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "EDM Solutions helped us fill a critical nurse vacancy within 24 hours. Professional, reliable, and caring.",
      name: "Sarah Jenkins",
      title: "Nursing Director",
      image: "/sarah-jenkins.png",
      type: 'image'
    },
    {
      text: "Our long-term care facility has relied on EDM for years. Their CNAs and Med Techs are top quality.",
      name: "Mark Thompson",
      title: "HR Manager",
      initial: "M",
      type: 'initial'
    }
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <div className="badge blue-badge">Client Testimonials</div>
        <h2 className="section-title">What They Say</h2>
      </div>

      <div className="testimonials-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon-top">
              <Quote size={24} className="quote-svg" />
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              {t.type === 'image' ? (
                <img src={t.image} alt={t.name} className="author-img" />
              ) : (
                <div className="author-initial">{t.initial}</div>
              )}
              <div className="author-info">
                <h4 className="author-name">{t.name}</h4>
                <p className="author-title">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
