import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import BrandPositioning from './components/BrandPositioning';
import QualityFuture from './components/QualityFuture';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PortfolioModal, AboutModal, PolicyModal } from './components/Modals';

export default function App() {
  const [portfolioModal, setPortfolioModal] = useState({ open: false, category: 'all' });
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState({ open: false, type: 'privacy' });

  const handleOpenPortfolio = (category = 'all') => {
    setPortfolioModal({ open: true, category });
  };

  const handleClosePortfolio = () => {
    setPortfolioModal({ open: false, category: 'all' });
  };

  const handleOpenPolicy = (type = 'privacy') => {
    setPolicyModal({ open: true, type });
  };

  const handleClosePolicy = () => {
    setPolicyModal({ open: false, type: 'privacy' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Glass Navbar */}
      <Navbar onOpenProductsModal={() => handleOpenPortfolio('all')} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Hero
          onOpenProductsModal={() => handleOpenPortfolio('all')}
          onOpenAboutModal={() => setAboutModalOpen(true)}
        />

        {/* About Section */}
        <About onOpenAboutModal={() => setAboutModalOpen(true)} />

        {/* Products Section */}
        <Products onOpenPortfolioModal={(cat) => handleOpenPortfolio(cat)} />

        {/* Vision & Mission Split Section */}
        <VisionMission />

        {/* Core Values Section */}
        <CoreValues />

        {/* Brand Positioning Banner */}
        <BrandPositioning />

        {/* Quality & Future Strategic Roadmap */}
        <QualityFuture />

        {/* Contact & Enquiry Form Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenPolicyModal={(type) => handleOpenPolicy(type)} />

      {/* Interactive Modals */}
      <PortfolioModal
        isOpen={portfolioModal.open}
        initialCategory={portfolioModal.category}
        onClose={handleClosePortfolio}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />

      <PolicyModal
        isOpen={policyModal.open}
        type={policyModal.type}
        onClose={handleClosePolicy}
      />
    </div>
  );
}
