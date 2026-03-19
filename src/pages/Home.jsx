import React from 'react';
import Hero from '../components/Hero';
import TrustedPartner from '../components/TrustedPartner';
import MobileApp from '../components/MobileApp';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedPartner />
      <MobileApp />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
};

export default Home;
