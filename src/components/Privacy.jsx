import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-page-card">
          <div className="privacy-header">
            <div className="badge legal-badge">LEGAL</div>
            <h1 className="privacy-title">Privacy & Terms</h1>
            <p className="privacy-subtitle">Everything you need to know about how we handle your data and the rules that govern our platform.</p>
            <div className="last-updated">
              <span className="dot"></span> Last Updated: January 15, 2026
            </div>
          </div>

          <div className="privacy-toc-box">
            <h4 className="toc-title">TABLE OF CONTENTS</h4>
            <div className="toc-grid">
              <div className="toc-col">
                <a href="#collect" className="toc-link"><span className="toc-num">1.</span> Information We Collect</a>
                <a href="#share" className="toc-link"><span className="toc-num">3.</span> Information Sharing</a>
                <a href="#rights" className="toc-link"><span className="toc-num">5.</span> Your Rights & Choices</a>
                <a href="#children" className="toc-link"><span className="toc-num">7.</span> Children's Privacy</a>
                <a href="#changes" className="toc-link"><span className="toc-num">9.</span> Changes to This Policy</a>
              </div>
              <div className="toc-col">
                <a href="#use" className="toc-link"><span className="toc-num">2.</span> How We Use Your Information</a>
                <a href="#retention" className="toc-link"><span className="toc-num">4.</span> Data Retention</a>
                <a href="#cookies" className="toc-link"><span className="toc-num">6.</span> Cookies & Tracking</a>
                <a href="#security" className="toc-link"><span className="toc-num">8.</span> Security</a>
                <a href="#contact" className="toc-link"><span className="toc-num">10.</span> Contact Us</a>
              </div>
            </div>
          </div>

          <div className="privacy-body">
            <div className="privacy-intro-box">
              <p>This Privacy Policy describes how EDM Solutions ("we," "us," or "our") collects, uses, and shares information about you when you use our platform, website, and services. By using EDM Solutions, you agree to the collection and use of information in accordance with this policy.</p>
            </div>

            <section id="collect" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">1</span>
                <h2 className="section-heading">Information We Collect</h2>
              </div>
              <p className="section-intro">We collect information you provide directly to us, information we collect automatically, and information from third parties.</p>
              
              <div className="sub-section">
                <h4 className="sub-section-title">Information You Provide:</h4>
                <ul className="policy-list">
                  <li><strong>Account registration details:</strong> full name, date of birth, email address, and phone number</li>
                  <li><strong>Profile Information:</strong> including photos, biography, and preferences</li>
                  <li><strong>Application data:</strong> submitted when applying to join our platform</li>
                  <li><strong>Communications:</strong> you send us through support channels or contact forms</li>
                  <li><strong>Payment Information:</strong> (processed securely through third-party payment processors — we do not store full card numbers)</li>
                  <li><strong>Guardian or parent contact details:</strong> for participants under 18</li>
                </ul>
              </div>

              <div className="sub-section">
                <h4 className="sub-section-title">Information Collected Automatically:</h4>
                <ul className="policy-list">
                  <li><strong>Log data:</strong> IP address, browser type, pages visited, time and date of visits</li>
                  <li><strong>Device Information:</strong> device type, operating system, and unique device identifiers</li>
                  <li><strong>Location data:</strong> (with your permission) to facilitate local program matching</li>
                  <li><strong>Usage analytics:</strong> to improve platform performance and user experience</li>
                </ul>
              </div>
            </section>

            <section id="use" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">2</span>
                <h2 className="section-heading">How We Use Your Information</h2>
              </div>
              <p className="section-intro">We use the information we collect for the following essential business purposes:</p>
              <ul className="policy-list">
                <li>Creating and managing your account</li>
                <li>Connecting you with programs, partner facilities, and employer matching</li>
                <li>Sending notifications, newsletters, marketing, and platform communications</li>
                <li>Facilitating payments and financial tracking</li>
                <li>Personalized content, recommendations, and platform upgrades</li>
                <li>Generating user analytics, research, and platform improvements</li>
                <li>Compliance with legal obligations and regulatory requirements</li>
                <li>Preventing and mitigating security and fraud risks</li>
              </ul>
            </section>

            <section id="share" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">3</span>
                <h2 className="section-heading">Information Sharing</h2>
              </div>
              <p className="section-intro">We do not sell your personal data. We may share your information with third parties in the following circumstances:</p>
              <ul className="policy-list">
                <li><strong>Service Providers:</strong> to facilitate our platform services (e.g., hosting, data analytics, email delivery, customer support, payment processing)</li>
                <li><strong>Program Partners:</strong> (e.g., hospitals, medical centers, programs) to facilitate placement and employment</li>
                <li><strong>Legal Requirement:</strong> when necessary for compliance with applicable laws or safety</li>
                <li><strong>Billing & Payment processors:</strong> to facilitate processed payments</li>
                <li><strong>Business Transfers:</strong> in the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section id="retention" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">4</span>
                <h2 className="section-heading">Data Retention</h2>
              </div>
              <p className="section-intro">We retain your personal information as long as your account is active or as needed to provide you services. We may retain certain information as required by law or for legitimate business purposes.</p>
              <p className="section-intro">When your personal data is no longer required for business purposes, we take appropriate measures to anonymize or delete it in accordance with industry best practices.</p>
            </section>

            <section id="rights" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">5</span>
                <h2 className="section-heading">Your Rights & Choices</h2>
              </div>
              <p className="section-intro">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="policy-list">
                <li><strong>Access:</strong> View and update your profile</li>
                <li><strong>Correction:</strong> Edit and correct any inaccuracies in your personal data</li>
                <li><strong>Portability:</strong> Request a copy of your personal data in a machine-readable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from newsletters or marketing communications</li>
                <li><strong>Deletion:</strong> Request deletion of your account and personal data (subject to legal retentions)</li>
              </ul>
              <p className="section-intro">To exercise any of these rights, please contact our support team at info@edmsolutions.com. We respond to all requests within 30 days.</p>
            </section>

            <section id="cookies" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">6</span>
                <h2 className="section-heading">Cookies & Tracking</h2>
              </div>
              <p className="section-intro">We use cookies and similar tracking technologies to enhance your experience and analyze platform traffic. These include:</p>
              <ul className="policy-list">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with the platform (e.g., Google Analytics)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver more relevant advertisements to you</li>
              </ul>
            </section>

            <section id="children" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">7</span>
                <h2 className="section-heading">Children's Privacy</h2>
              </div>
              <div className="warning-box">
                <span className="warning-icon">⚠️</span>
                <span>Our platform serves participants including minors. We take children's privacy exceptionally seriously and comply with all applicable laws including COPPA.</span>
              </div>
              <p>For participants under 13, we require verified parental or guardian consent before collecting any personal information. Parents and guardians may review, modify, or request deletion of their child's information at any time. We do not knowingly allow children under 13 to create accounts without parental consent.</p>
            </section>

            <section id="security" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">8</span>
                <h2 className="section-heading">Security</h2>
              </div>
              <p className="section-intro">We implement robust technical and organizational measures to protect your personal information, including:</p>
              <ul className="policy-list">
                <li>SSL/TLS encryption for all data in transit</li>
                <li>Role-based access controls and multi-factor authentication</li>
                <li>Regular automated vulnerability scans and security audits</li>
                <li>Employee background checks and training on data privacy</li>
              </ul>
              <p className="section-intro">While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
            </section>

            <section id="changes" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">9</span>
                <h2 className="section-heading">Changes to This Policy</h2>
              </div>
              <p className="section-intro">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date at the top of the policy. You are encouraged to review this Privacy Policy periodically for any changes.</p>
            </section>

            <section id="contact" className="policy-section">
              <div className="section-header-row">
                <span className="section-number-circle">10</span>
                <h2 className="section-heading">Contact Us</h2>
              </div>
              <p className="section-intro">If you have any questions, concerns, or complaints regarding our Privacy Policy or data practices, please reach out to us:</p>
              <ul className="policy-list">
                <li><strong>Email:</strong> info@edmsolutions.com</li>
                <li><strong>Phone:</strong> (484) 254-4877</li>
                <li><strong>Address:</strong> 1042 Evans Street, St 105, Bethlehem, PA 18015</li>
              </ul>
            </section>
          </div>

          <div className="privacy-cta">
            <div className="cta-content">
              <h3 className="cta-title">Questions about your privacy?</h3>
              <p className="cta-desc">Our team is happy to help clarify anything in this policy.</p>
            </div>
            <button className="contact-us-btn">Contact Us →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
