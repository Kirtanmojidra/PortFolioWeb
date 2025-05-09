import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking a nav item
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 transition-all duration-300 w-screen overflow-hidden ${
        scrolled 
        ? 'bg-neutral-900/95 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-neutral-900/60 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center group"
            aria-label="Kirtan Mojidra"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/30 transition-all duration-300">
              <span className="font-bold text-neutral-900">KM</span>
            </div>
            <span className="font-semibold text-lg text-white group-hover:text-amber-400 transition-colors duration-300">
              Kirtan<span className="text-amber-400 group-hover:text-white transition-colors duration-300">Mojidra</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink href="#hero" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-amber-400"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute w-full bg-neutral-900/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4 border-t border-neutral-800' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-1">
            <MobileNavLink href="#hero" label="Home" onClick={handleNavClick} />
            <MobileNavLink href="#about" label="About" onClick={handleNavClick} />
            <MobileNavLink href="#skills" label="Skills" onClick={handleNavClick} />
            <MobileNavLink href="#projects" label="Projects" onClick={handleNavClick} />
            <MobileNavLink href="#contact" label="Contact" onClick={handleNavClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="relative px-4 py-2 text-neutral-300 hover:text-amber-400 transition-colors duration-300 group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
  </a>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ href, label, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="block px-4 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/50 rounded-lg transition-all duration-300"
  >
    {label}
  </a>
);

export default Header;