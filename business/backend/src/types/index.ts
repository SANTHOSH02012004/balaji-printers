// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  notes?: string;
  ip_address?: string;
  user_agent?: string;
}

// Enquiry Form Types
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  quantity: string;
  deadline?: string;
  description: string;
  budget?: string;
  additionalInfo?: string;
}

export interface EnquirySubmission extends EnquiryFormData {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'new' | 'reviewing' | 'quoted' | 'accepted' | 'rejected' | 'closed';
  quote_amount?: number;
  quote_notes?: string;
  ip_address?: string;
  user_agent?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Dashboard Types
export interface SubmissionStats {
  total_contacts: number;
  total_enquiries: number;
  new_contacts: number;
  new_enquiries: number;
  today_contacts: number;
  today_enquiries: number;
}

export interface DashboardSubmission {
  type: 'contact' | 'enquiry';
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  status: string;
  source: string;
}

// Request Types
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
} 