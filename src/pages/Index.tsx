
import React from 'react';
import LandingSection from '../components/LandingSection';
import QuotesSection from '../components/QuotesSection';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import CursorTrail from '../components/CursorTrail';

const Index = () => {
  return (
    <div className="romantic-bg min-h-screen text-white relative">
      {/* Background effects */}
      <FloatingElements />
      <CursorTrail />
      
      {/* Main content */}
      <div className="relative z-10">
        <LandingSection />
        <QuotesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
