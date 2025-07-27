import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-14 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/bgremove.png" 
                  alt="Shri Balaji Printers Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">Shri Balaji Printers</h3>
                <p className="text-sm text-gray-400">Sivakasi, Tamil Nadu</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              25+ years of trusted printing services with affordable pricing and quality guaranteed. 
              We handle all types of printing orders from small to large scale.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/919361259552" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/enquiry" className="text-gray-300 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">School Books & Guides</span>
              </li>
              <li>
                <span className="text-gray-300">Notebooks</span>
              </li>
              <li>
                <span className="text-gray-300">Diaries</span>
              </li>
              <li>
                <span className="text-gray-300">Calendars</span>
              </li>
              <li>
                <span className="text-gray-300">Sweet Boxes</span>
              </li>
              <li>
                <span className="text-gray-300">Invitation Cards</span>
              </li>
              <li>
                <span className="text-gray-300">Business Cards</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Primary: 9361259552</div>
                  <div className="text-gray-300">Secondary: 9789111525</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">shribalajiprinters6@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Sivakasi, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Monday - Saturday: 9:00 AM - 7:00 PM</div>
                <div>Sunday: 10:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Shri Balaji Printers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 