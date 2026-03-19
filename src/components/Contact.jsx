import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container container">
        <div className="contact-info-card">
          <h2 className="info-title">Contact Us</h2>
          <p className="info-desc">
            Have questions? We're here to help. Reach out to us for any staffing inquiries or support needs.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <h4 className="item-label">Address</h4>
              <p>1042 Evans Street, St 105,<br />Bethlehem, PA 18015</p>
            </div>
            
            <div className="info-item">
              <h4 className="item-label">Email</h4>
              <p>info@edmsolutions.com</p>
            </div>
            
            <div className="info-item">
              <h4 className="item-label">Phone</h4>
              <p>(484) 254-4877</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2 className="form-title">Send us a message</h2>
          
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help?" rows="6"></textarea>
            </div>
            
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
