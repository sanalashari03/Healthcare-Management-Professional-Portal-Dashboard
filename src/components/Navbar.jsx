import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Apply', path: '/apply' },
    { name: 'Join', path: '/join' },
    { name: 'Get App', path: '/get-app' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portals', path: '/portals' }
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-inner container">
        <NavLink to="/" className="logo">
          <div className="logo-icon">E</div>
          <span className="logo-text">EDM Solutions</span>
        </NavLink>
        
        <div className="nav-pill">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
