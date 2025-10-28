import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            KS
          </button>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;