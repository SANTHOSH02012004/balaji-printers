import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { submitContactForm } from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone Numbers",
      details: [
        { label: "Primary", value: "9361259552" },
        { label: "Secondary", value: "9789111525" }
      ],
      action: "Call Now",
      actionLink: "tel:9361259552"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: [
        { label: "Email", value: "shribalajiprinters6@gmail.com" }
      ],
      action: "Send Email",
      actionLink: "mailto:shribalajiprinters6@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: [
        { label: "Address", value: "Sivakasi, Tamil Nadu, India" }
      ],
      action: "Get Directions",
      actionLink: "https://maps.google.com/?q=Sivakasi,Tamil+Nadu"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: [
        { label: "Monday - Saturday", value: "9:00 AM - 7:00 PM" },
        { label: "Sunday", value: "10:00 AM - 5:00 PM" }
      ],
      action: "Contact Us",
      actionLink: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white scroll-mt-16 md:scroll-mt-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-sm font-medium text-primary-700 mb-4">
            <FaPhone className="text-primary-600" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your printing project? Contact us for a free quote and consultation. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-display mb-6">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                        {info.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <span className="text-sm text-gray-500">{detail.label}:</span>
                          <div className="text-gray-700 font-medium">{detail.value}</div>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href={info.actionLink}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      <span>{info.action}</span>
                      {info.icon.type === FaPhone && <FaPhone />}
                      {info.icon.type === FaEnvelope && <FaEnvelope />}
                      {info.icon.type === FaMapMarkerAlt && <FaMapMarkerAlt />}
                      {info.icon.type === FaClock && <FaClock />}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Quick Response on WhatsApp</h4>
                  <p className="text-green-100 mb-3">
                    Get instant quotes and quick responses for your printing needs.
                  </p>
                  <a
                    href="https://wa.me/919361259552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
                  >
                    <FaWhatsapp />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 font-display mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your printing requirements... (optional)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-red-800 font-medium">Failed to send message. Please try again.</span>
                  </div>
                </div>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 