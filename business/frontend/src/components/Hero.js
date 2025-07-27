import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaStar, FaUsers, FaAward } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
                      <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-700">
                <FaAward className="text-primary-600" />
                <span>25+ Years of Excellence</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-display leading-tight">
                Trusted Printing Services in{' '}
                <span className="text-gradient">Sivakasi</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Affordable pricing with professional quality. We handle all types of printing orders 
                from small to large scale with creative design options and reliable service.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700 font-medium">Affordable Pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700 font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700 font-medium">Fast Turnaround</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700 font-medium">Custom Designs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/enquiry" className="btn-primary text-center">
                Get Free Quote
              </Link>
              <a href="#services" className="btn-secondary text-center">
                View Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by 1000+ clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-primary-600" />
                <span className="text-sm text-gray-600">25+ years experience</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 overflow-hidden">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <img 
                    src="/sideimg.jpg" 
                    alt="Modern Industrial Printing Machine in Operation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
                <div className="flex items-center space-x-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-medium">Best Quality</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                <div className="flex items-center space-x-2">
                  <FaAward className="text-primary-600" />
                  <span className="text-sm font-medium">25+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 