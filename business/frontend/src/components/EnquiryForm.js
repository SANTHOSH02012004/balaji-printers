import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPrint, FaFileAlt, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { submitEnquiryForm } from '../config/api';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    quantity: '',
    deadline: '',
    description: '',
    budget: '',
    additionalInfo: ''
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
      const result = await submitEnquiryForm(formData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', serviceType: '', 
          quantity: '', deadline: '', description: '', budget: '', additionalInfo: ''
        });
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

  const serviceTypes = [
    "School Books & Guides",
    "Notebooks",
    "Diaries",
    "Calendars",
    "Sweet Boxes",
    "Invitation Cards",
    "Business Cards",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium mb-4"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-sm font-medium text-primary-700 mb-4">
              <FaFileAlt className="text-primary-600" />
              <span>Get Free Quote</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-display mb-4">
              Request a Printing Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll provide you with a detailed quote for your printing project. 
              Our team will get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
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
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter company name (optional)"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                    Project Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity *
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="e.g., 1000 pieces"
                      />
                    </div>

                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                        Deadline
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹10,000">Under ₹10,000</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe your printing requirements in detail..."
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Any additional requirements or specifications..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
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
                      <span className="text-green-800 font-medium">Enquiry submitted successfully! We'll get back to you with a detailed quote within 24 hours.</span>
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
                      <span className="text-red-800 font-medium">Failed to submit enquiry. Please try again.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">9361259552</div>
                    <div className="text-sm text-gray-600">Primary</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">9789111525</div>
                    <div className="text-sm text-gray-600">Secondary</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-600" />
                  <div>
                    <div className="font-medium text-gray-900">shribalajiprinters6@gmail.com</div>
                    <div className="text-sm text-gray-600">Email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FaPrint className="text-primary-200" />
                  <span className="text-sm">25+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPrint className="text-primary-200" />
                  <span className="text-sm">Affordable Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPrint className="text-primary-200" />
                  <span className="text-sm">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPrint className="text-primary-200" />
                  <span className="text-sm">Fast Turnaround</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <FaCalendarAlt className="text-primary-600 text-xl" />
                <h3 className="text-lg font-bold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond to all enquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm; 