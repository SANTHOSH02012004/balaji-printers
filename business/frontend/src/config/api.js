// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://balaji-printers.onrender.com';

export const API_ENDPOINTS = {
  // Contact endpoints
  CONTACT_SUBMIT: `${API_BASE_URL}/api/contact/submit`,
  CONTACT_GET_ALL: `${API_BASE_URL}/api/contact`,
  CONTACT_GET_BY_ID: (id) => `${API_BASE_URL}/api/contact/${id}`,
  CONTACT_UPDATE_STATUS: (id) => `${API_BASE_URL}/api/contact/${id}/status`,

  // Enquiry endpoints
  ENQUIRY_SUBMIT: `${API_BASE_URL}/api/enquiry/submit`,
  ENQUIRY_GET_ALL: `${API_BASE_URL}/api/enquiry`,
  ENQUIRY_GET_BY_ID: (id) => `${API_BASE_URL}/api/enquiry/${id}`,
  ENQUIRY_UPDATE_STATUS: (id) => `${API_BASE_URL}/api/enquiry/${id}/status`,
  ENQUIRY_GET_BY_SERVICE: (serviceType) => `${API_BASE_URL}/api/enquiry/service/${serviceType}`,

  // Health check
  HEALTH_CHECK: `${API_BASE_URL}/health`
};

// API Helper Functions
export const apiRequest = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  };

  const response = await fetch(url, { ...defaultOptions, ...options });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
};

// Contact API functions
export const submitContactForm = async (formData) => {
  return apiRequest(API_ENDPOINTS.CONTACT_SUBMIT, {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};

// Enquiry API functions
export const submitEnquiryForm = async (formData) => {
  return apiRequest(API_ENDPOINTS.ENQUIRY_SUBMIT, {
    method: 'POST',
    body: JSON.stringify(formData)
  });
}; 