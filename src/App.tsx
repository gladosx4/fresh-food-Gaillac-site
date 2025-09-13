import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OffersSection from './components/OffersSection';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5E1D2]">
      <Header />
      <HeroSection />
      <OffersSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;