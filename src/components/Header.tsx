import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offres spéciales', href: '#offres' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F5E1D2]/90 backdrop-blur-sm border-b border-[#E7A33C] shadow-lg' 
          : 'bg-[#F5E1D2]/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#114A2F] rounded-full flex items-center justify-center">
              <span className="text-[#F5E1D2] text-lg lg:text-xl font-bold">F</span>
            </div>
            <div>
              <h1 className="text-[#114A2F] text-xl lg:text-2xl font-extrabold tracking-tight">
                FRESH FOOD
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#1C1C1C] hover:text-[#114A2F] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E7A33C] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#C4513C] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Appeler</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#114A2F] text-[#F5E1D2] hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-3 border-t border-[#E7A33C]/20">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-[#1C1C1C] hover:text-[#114A2F] hover:bg-[#E7A33C]/10 rounded-lg font-medium transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;