import React from 'react';
import { FaAward, FaUsers, FaHandshake, FaHeart, FaCheckCircle, FaStar } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaAward />, number: "25+", label: "Years Experience" },
    { icon: <FaUsers />, number: "1000+", label: "Happy Clients" },
    { icon: <FaHandshake />, number: "5000+", label: "Projects Completed" },
    { icon: <FaHeart />, number: "100%", label: "Customer Satisfaction" }
  ];

  const values = [
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every project, ensuring customer satisfaction."
    },
    {
      icon: <FaHandshake />,
      title: "Trust & Reliability",
      description: "25+ years of building trust with our clients through consistent, reliable service delivery."
    },
    {
      icon: <FaStar />,
      title: "Affordable Excellence",
      description: "Premium quality printing services at competitive prices, making excellence accessible to all."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 scroll-mt-16 md:scroll-mt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-sm font-medium text-primary-700">
                <FaAward className="text-primary-600" />
                <span>About Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
                Trusted Printing Partner for{' '}
                <span className="text-gradient">25+ Years</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Shri Balaji Printers has been serving the Sivakasi community and beyond with 
                exceptional printing services since 1998. Our commitment to quality, affordability, 
                and customer satisfaction has made us a trusted name in the printing industry.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in all types of printing orders from small to large scale, 
                offering creative design options and reliable service that our clients can depend on. 
                Our experienced team ensures every project meets the highest standards of excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 font-display">
                Our Core Values
              </h3>
              
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* USP Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Unique Promise</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Trustable service with affordable pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Handles all types of printing orders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Small to large scale projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Creative design options available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-300 text-xl" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
              "Shri Balaji Printers has been our trusted printing partner for over 10 years. 
              Their quality, reliability, and affordable pricing make them the best choice for all our printing needs."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SB</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Satisfied Client</div>
                <div className="text-primary-100">Regular Customer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 