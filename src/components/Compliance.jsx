import React from 'react';
import './Compliance.css';

const Compliance = () => {
  const sections = [
    { id: 'overview', title: 'Compliance Overview', icon: '📝' },
    { id: 'hipaa', title: 'HIPAA & Data Handling', icon: '🔒' },
    { id: 'credentialing', title: 'Credentialing & Licensing', icon: '📋' },
    { id: 'eeo', title: 'EEO Statement', icon: '⚖️' },
    { id: 'worker', title: 'Worker Classification', icon: '👥' },
    { id: 'state', title: 'PA State Compliance', icon: '🏛️' },
    { id: 'privacy', title: 'Privacy Policy', icon: '📄' },
    { id: 'terms', title: 'Terms of Service', icon: '📜' },
  ];

  return (
    <div className="compliance-page">
      <div className="container">
        <div className="compliance-page-card">
          <div className="compliance-header">
            <div className="badge compliance-badge">HEALTHCARE COMPLIANCE & LEGAL</div>
            <h1 className="compliance-main-title">Compliance & Legal Standards</h1>
            <p className="compliance-subtitle">
              EDM Solutions is committed to operating in full compliance with federal, 
              state, and local regulations governing healthcare staffing and workforce placement.
            </p>
            <div className="compliance-meta">
              <span className="meta-item">📅 Effective: January 15, 2026</span>
              <span className="meta-item">🔒 8 Compliance Sections</span>
              <span className="meta-item">🏛️ Pennsylvania Jurisdiction</span>
            </div>
          </div>

          <div className="compliance-layout">
            {/* Sidebar */}
            <aside className="compliance-sidebar">
              <h4 className="sidebar-title">COMPLIANCE SECTIONS</h4>
              <ul className="sidebar-nav">
                {sections.map((s, i) => (
                  <li key={s.id} className={s.id === 'hipaa' ? 'active' : ''}>
                    <span className="nav-num">{i + 1}</span>
                    <span className="nav-text">{s.title}</span>
                  </li>
                ))}
              </ul>
              <div className="sidebar-revision-box">
                <h5 className="revision-title">Document Revision</h5>
                <p>Last updated January 15, 2026. Policies reviewed quarterly. For questions contact:</p>
                <a href="mailto:info@edmsolutions.com" className="revision-email">info@edmsolutions.com</a>
              </div>
            </aside>

            {/* Main Content */}
            <main className="compliance-main">
              <div className="compliance-card primary-commitment">
                <div className="commitment-icon">🫀</div>
                <div className="commitment-text">
                  <h3>Healthcare Compliance Commitment</h3>
                  <p>All sections below represent binding operational policies for EDM Solutions, its staff, placed professionals, and partner facilities. Click any section to expand full content.</p>
                </div>
              </div>

              <div className="compliance-accordion">
                <div className="accordion-item">
                  <div className="accordion-summary">
                    <div className="summary-left">
                      <span className="section-meta">SECTION 01 — OVERVIEW</span>
                      <h4 className="section-title">Healthcare Staffing Compliance Overview</h4>
                    </div>
                    <span className="chevron-icon">⌄</span>
                  </div>
                </div>

                <div className="accordion-item expanded">
                  <div className="accordion-summary">
                    <div className="summary-left">
                      <span className="section-meta">SECTION 02 — DATA & PRIVACY</span>
                      <h4 className="section-title">HIPAA Awareness & Data Handling Disclaimer</h4>
                    </div>
                    <span className="chevron-icon">⌃</span>
                  </div>
                  <div className="accordion-content">
                    <p>EDM Solutions recognizes the importance of protecting sensitive healthcare information. While our platform does not intentionally collect or store Protected Health Information (PHI), we maintain administrative, technical, and procedural safeguards designed to protect all personal and professional data submitted through our system.</p>
                    <p>Health professionals and facilities are expected to comply with all HIPAA requirements during assignments. Any access to patient information occurs solely within the scope of the facility's systems and policies.</p>
                    <div className="blue-alert-box">
                      EDM Solutions maintains active compliance reviews on a quarterly basis to align with any changes in federal, state, or facility-specific regulations.
                    </div>
                    <div className="compliance-pill-tags">
                      <span className="pill-tag">HIPAA Compliant</span>
                      <span className="pill-tag">PHI Awareness</span>
                      <span className="pill-tag">Data Safeguards</span>
                    </div>
                  </div>
                </div>

                {sections.slice(2).map((s, i) => (
                  <div key={s.id} className="accordion-item">
                    <div className="accordion-summary">
                      <div className="summary-left">
                        <span className="section-meta">SECTION 0{i + 3} — {s.title.toUpperCase()}</span>
                        <h4 className="section-title">{s.title} Summary</h4>
                      </div>
                      <span className="chevron-icon">⌄</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="compliance-support-card">
                <h3>Questions About Our Compliance Policies?</h3>
                <p>Our compliance team is available Monday – Friday, 9 AM – 5 PM EST to assist.</p>
                <div className="compliance-btns">
                  <button className="btn-white">Email Compliance Team</button>
                  <button className="btn-outline">📞 (484) 254-4877</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
