import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-14 flex items-center justify-center">
              <img 
                src="/bgremove.png" 
                alt="Shri Balaji Printers Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 font-display">Shri Balaji Printers</h1>
              <p className="text-xs text-gray-600">Sivakasi, Tamil Nadu</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </a>
            <Link to="/enquiry" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FaPhone className="text-primary-600" />
              <span>9361259552</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FaEnvelope className="text-primary-600" />
              <span>shribalajiprinters6@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <FaTimes className="text-gray-700" /> : <FaBars className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  // Smooth scroll to section
                  setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  // Smooth scroll to section
                  setTimeout(() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  // Smooth scroll to section
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Contact
              </a>
              <Link
                to="/enquiry"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaPhone className="text-primary-600" />
                  <span>9361259552</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaEnvelope className="text-primary-600" />
                  <span>shribalajiprinters6@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 