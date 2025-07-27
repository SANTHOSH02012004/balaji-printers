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
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FaTimes className="text-gray-700 w-6 h-6" />
            ) : (
              <FaBars className="text-gray-700 w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4 animate-fade-in">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100"
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
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100"
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
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100"
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
                className="btn-primary text-center py-3 px-4"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <FaPhone className="text-primary-600 flex-shrink-0" />
                  <span className="break-all">9361259552</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                  <FaEnvelope className="text-primary-600 flex-shrink-0" />
                  <span className="break-all">shribalajiprinters6@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 