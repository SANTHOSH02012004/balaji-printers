import React, { useState, useEffect } from 'react';
import { FaEye, FaEdit, FaTrash, FaCheck, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { API_ENDPOINTS, apiRequest } from '../config/api';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('contacts');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [contactsData, enquiriesData] = await Promise.all([
        apiRequest(API_ENDPOINTS.CONTACT_GET_ALL),
        apiRequest(API_ENDPOINTS.ENQUIRY_GET_ALL)
      ]);

      setContacts(contactsData.data || []);
      setEnquiries(enquiriesData.data || []);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setError('Failed to load dashboard data. Please check if the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id, status, notes = '') => {
    try {
      await apiRequest(API_ENDPOINTS.CONTACT_UPDATE_STATUS(id), {
        method: 'PATCH',
        body: JSON.stringify({ status, notes })
      });
      fetchData();
    } catch (error) {
      console.error('Failed to update contact status:', error);
    }
  };

  const updateEnquiryStatus = async (id, status, quoteAmount = null, quoteNotes = '') => {
    try {
      await apiRequest(API_ENDPOINTS.ENQUIRY_UPDATE_STATUS(id), {
        method: 'PATCH',
        body: JSON.stringify({ status, quoteAmount, quoteNotes })
      });
      fetchData();
    } catch (error) {
      console.error('Failed to update enquiry status:', error);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      read: 'bg-yellow-100 text-yellow-800',
      replied: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
      reviewing: 'bg-orange-100 text-orange-800',
      quoted: 'bg-purple-100 text-purple-800',
      accepted: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Connection Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage contact and enquiry submissions</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Total Contacts</h3>
            <p className="text-3xl font-bold text-primary-600">{contacts.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Total Enquiries</h3>
            <p className="text-3xl font-bold text-primary-600">{enquiries.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">New Contacts</h3>
            <p className="text-3xl font-bold text-blue-600">
              {contacts.filter(c => c.status === 'new').length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">New Enquiries</h3>
            <p className="text-3xl font-bold text-blue-600">
              {enquiries.filter(e => e.status === 'new').length}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contacts'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contacts ({contacts.length})
              </button>
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'enquiries'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Enquiries ({enquiries.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No contact submissions yet.</p>
                ) : (
                  contacts.map((contact) => (
                    <div key={contact.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                          <p className="text-sm text-gray-600">{contact.phone}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                            {contact.status}
                          </span>
                          <button
                            onClick={() => setSelectedItem(contact)}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            <FaEye />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{contact.message}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Submitted: {formatDate(contact.created_at)}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateContactStatus(contact.id, 'read')}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            Mark Read
                          </button>
                          <button
                            onClick={() => updateContactStatus(contact.id, 'replied')}
                            className="text-green-600 hover:text-green-700"
                          >
                            Mark Replied
                          </button>
                          <button
                            onClick={() => updateContactStatus(contact.id, 'closed')}
                            className="text-gray-600 hover:text-gray-700"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'enquiries' && (
              <div className="space-y-4">
                {enquiries.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No enquiry submissions yet.</p>
                ) : (
                  enquiries.map((enquiry) => (
                    <div key={enquiry.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{enquiry.name}</h3>
                          <p className="text-sm text-gray-600">{enquiry.email}</p>
                          <p className="text-sm text-gray-600">{enquiry.phone}</p>
                          {enquiry.company && <p className="text-sm text-gray-600">{enquiry.company}</p>}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(enquiry.status)}`}>
                            {enquiry.status}
                          </span>
                          <button
                            onClick={() => setSelectedItem(enquiry)}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            <FaEye />
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-700"><strong>Service:</strong> {enquiry.service_type}</p>
                        <p className="text-sm text-gray-700"><strong>Quantity:</strong> {enquiry.quantity}</p>
                        <p className="text-sm text-gray-700"><strong>Description:</strong> {enquiry.description}</p>
                        {enquiry.budget && <p className="text-sm text-gray-700"><strong>Budget:</strong> {enquiry.budget}</p>}
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Submitted: {formatDate(enquiry.created_at)}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateEnquiryStatus(enquiry.id, 'reviewing')}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            Review
                          </button>
                          <button
                            onClick={() => updateEnquiryStatus(enquiry.id, 'quoted')}
                            className="text-purple-600 hover:text-purple-700"
                          >
                            Quote
                          </button>
                          <button
                            onClick={() => updateEnquiryStatus(enquiry.id, 'closed')}
                            className="text-gray-600 hover:text-gray-700"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal for detailed view */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedItem.name} - {selectedItem.status}
                  </h2>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                    <p><strong>Email:</strong> {selectedItem.email}</p>
                    <p><strong>Phone:</strong> {selectedItem.phone}</p>
                    {selectedItem.company && <p><strong>Company:</strong> {selectedItem.company}</p>}
                  </div>

                  {selectedItem.service_type && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                      <p><strong>Service:</strong> {selectedItem.service_type}</p>
                      <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
                      {selectedItem.deadline && <p><strong>Deadline:</strong> {selectedItem.deadline}</p>}
                      {selectedItem.budget && <p><strong>Budget:</strong> {selectedItem.budget}</p>}
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Message</h3>
                    <p className="text-gray-700">{selectedItem.message || selectedItem.description}</p>
                  </div>

                  {selectedItem.additional_info && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Additional Information</h3>
                      <p className="text-gray-700">{selectedItem.additional_info}</p>
                    </div>
                  )}

                  <div className="text-sm text-gray-500">
                    <p><strong>Submitted:</strong> {formatDate(selectedItem.created_at)}</p>
                    <p><strong>Last Updated:</strong> {formatDate(selectedItem.updated_at)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 