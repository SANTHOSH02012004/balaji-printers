import { supabase, TABLES } from '../config/database';
import { EnquiryFormData, EnquirySubmission, ApiResponse } from '../types';

export class EnquiryService {
  // Submit enquiry form
  static async submitEnquiry(formData: EnquiryFormData, ipAddress?: string, userAgent?: string): Promise<ApiResponse<EnquirySubmission>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.ENQUIRY_SUBMISSIONS)
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service_type: formData.serviceType,
            quantity: formData.quantity,
            deadline: formData.deadline || null,
            description: formData.description,
            budget: formData.budget,
            additional_info: formData.additionalInfo,
            ip_address: ipAddress,
            user_agent: userAgent
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to submit enquiry form',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Enquiry form submitted successfully',
        data: data as EnquirySubmission
      };
    } catch (error) {
      console.error('Enquiry service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Get all enquiry submissions
  static async getAllEnquiries(): Promise<ApiResponse<EnquirySubmission[]>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.ENQUIRY_SUBMISSIONS)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to fetch enquiry submissions',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Enquiry submissions fetched successfully',
        data: data as EnquirySubmission[]
      };
    } catch (error) {
      console.error('Enquiry service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Get enquiry by ID
  static async getEnquiryById(id: string): Promise<ApiResponse<EnquirySubmission>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.ENQUIRY_SUBMISSIONS)
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Enquiry submission not found',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Enquiry submission fetched successfully',
        data: data as EnquirySubmission
      };
    } catch (error) {
      console.error('Enquiry service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Update enquiry status and quote
  static async updateEnquiryStatus(
    id: string, 
    status: string, 
    quoteAmount?: number, 
    quoteNotes?: string
  ): Promise<ApiResponse<EnquirySubmission>> {
    try {
      const updateData: any = { status };
      if (quoteAmount !== undefined) updateData.quote_amount = quoteAmount;
      if (quoteNotes) updateData.quote_notes = quoteNotes;

      const { data, error } = await supabase
        .from(TABLES.ENQUIRY_SUBMISSIONS)
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to update enquiry status',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Enquiry status updated successfully',
        data: data as EnquirySubmission
      };
    } catch (error) {
      console.error('Enquiry service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Get enquiries by service type
  static async getEnquiriesByServiceType(serviceType: string): Promise<ApiResponse<EnquirySubmission[]>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.ENQUIRY_SUBMISSIONS)
        .select('*')
        .eq('service_type', serviceType)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to fetch enquiries by service type',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Enquiries fetched successfully',
        data: data as EnquirySubmission[]
      };
    } catch (error) {
      console.error('Enquiry service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
} 