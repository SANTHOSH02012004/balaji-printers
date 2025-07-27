import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, 
  FaFileAlt, 
  FaCalendarAlt, 
  FaGift, 
  FaEnvelope, 
  FaIdCard,
  FaPalette,
  FaPrint,
  FaStar
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBook className="text-4xl" />,
      title: "School Books & Guides",
      description: "High-quality textbooks, workbooks, and study guides for educational institutions with custom content and branding.",
      features: ["Custom Content", "Durable Binding", "Educational Standards"]
    },
    {
      icon: <FaFileAlt className="text-4xl" />,
      title: "Notebooks",
      description: "Custom notebooks and exercise books with personalized covers, paper quality, and binding options.",
      features: ["Custom Covers", "Multiple Sizes", "Quality Paper"]
    },
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: "Calendars",
      description: "Personalized calendars with custom designs, photos, and branding for businesses and individuals.",
      features: ["Custom Designs", "Photo Integration", "Business Branding"]
    },
    {
      icon: <FaGift className="text-4xl" />,
      title: "Sweet Boxes",
      description: "Attractive packaging solutions for sweets and gifts with custom designs and branding options.",
      features: ["Custom Designs", "Food Safe", "Brand Integration"]
    },
    {
      icon: <FaEnvelope className="text-4xl" />,
      title: "Invitation Cards",
      description: "Elegant invitation cards for weddings, events, and celebrations with premium printing quality.",
      features: ["Premium Paper", "Custom Designs", "Quick Turnaround"]
    },
    {
      icon: <FaIdCard className="text-4xl" />,
      title: "Business Cards",
      description: "Professional business cards with modern designs, various finishes, and quick printing services.",
      features: ["Modern Designs", "Multiple Finishes", "Fast Delivery"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white scroll-mt-16 md:scroll-mt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-sm font-medium text-primary-700 mb-4">
            <FaPrint className="text-primary-600" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display mb-4">
            Comprehensive Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From educational materials to business essentials, we provide high-quality printing services 
            with custom designs and affordable pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <FaStar className="text-primary-500 text-sm" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-display mb-4">
                Custom Design & Creative Solutions
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Our creative team works closely with you to bring your vision to life. 
                We offer custom design services, creative consultation, and innovative printing solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <FaPalette className="text-primary-600" />
                  <span className="text-gray-700 font-medium">Custom Designs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPrint className="text-primary-600" />
                  <span className="text-gray-700 font-medium">Quality Printing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-primary-600" />
                  <span className="text-gray-700 font-medium">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBook className="text-primary-600" />
                  <span className="text-gray-700 font-medium">Bulk Orders</span>
                </div>
              </div>
              <Link to="/enquiry" className="btn-primary">
                Get Custom Quote
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">25+ Years Experience</h5>
                    <p className="text-sm text-gray-600">Decades of expertise in printing industry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Affordable Pricing</h5>
                    <p className="text-sm text-gray-600">Competitive rates without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Fast Turnaround</h5>
                    <p className="text-sm text-gray-600">Quick delivery for urgent orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 