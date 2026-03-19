import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-col branding-col">
            <Link to="/" className="footer-logo">
              <div className="logo-icon-box">E</div>
              <div className="logo-text-box">
                <span className="logo-name">EDM Solutions</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Comprehensive staffing solutions tailored to the unique needs of healthcare facilities and professionals.
            </p>
            <div className="footer-socials">
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Twitter size={16} /></a>
              <a href="#"><Instagram size={16} /></a>
              <a href="#"><Youtube size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/how-it-works">How it Works</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/apply">Apply</Link></li>
              <li><Link to="/join">Join</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/portals">Portals</Link></li>
            </ul>
          </div>

          <div className="footer-col address-col">
            <h4 className="footer-heading">Address</h4>
            <ul className="footer-info">
              <li>
                <MapPin size={18} className="info-icon" />
                <span>1042 Evans Street, St 105, Bethlehem, PA 18015</span>
              </li>
              <li>
                <Phone size={18} className="info-icon" />
                <span>(484) 254-4877</span>
              </li>
              <li>
                <Mail size={18} className="info-icon" />
                <span>info@edmsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 EDM Solutions. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy & Terms</Link>
            <Link to="/compliance">Compliance</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
