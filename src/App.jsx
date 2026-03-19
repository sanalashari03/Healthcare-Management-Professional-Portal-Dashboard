import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import PortalsPage from './pages/PortalsPage';
import ContactPage from './pages/ContactPage';
import GetAppPage from './pages/GetAppPage';
import JoinPage from './pages/JoinPage';
import ApplyPage from './pages/ApplyPage';
import CompliancePage from './pages/CompliancePage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';


import FacilityRoutes from './facility/FacilityRoutes';
import ProfessionalRoutes from './professional/ProfessionalRoutes';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Admin Routes (Removed) */}
          
          {/* Facility Portal Routes */}
          <Route path="/facility/*" element={<FacilityRoutes />} />
          
          {/* Professional Portal Routes */}
          <Route path="/professional/*" element={<ProfessionalRoutes />} />
          
          {/* Main Site Routes */}
          <Route path="/*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/how-it-works" element={<HowItWorksPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/apply" element={<ApplyPage />} />
                  <Route path="/portals" element={<PortalsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/get-app" element={<GetAppPage />} />
                  <Route path="/join" element={<JoinPage />} />
                  <Route path="/compliance" element={<CompliancePage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
