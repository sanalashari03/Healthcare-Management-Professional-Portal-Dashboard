import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          <div className="badge careers-badge">Careers</div>
          <h2 className="cta-title">Request for staffing/Become a client</h2>
          <p className="cta-subtitle">
            Become part of a network that values your skills and offers the flexibility you deserve.
          </p>
          
          <div className="cta-inner-banner">
            <h2 className="inner-cta-title">Ready to Staff Smarter?</h2>
            <p className="cta-text">
              Whether you are a healthcare facility looking for quality professionals or a licensed pro 
              ready for your next opportunity, EDM Solutions has the right fit.
            </p>
            <div className="cta-actions">
              <Link to="/apply" className="btn-request">Request Staff</Link>
              <Link to="/apply" className="btn-talent-pool">Join Talent Pool</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
