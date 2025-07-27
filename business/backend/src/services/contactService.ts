import { supabase, TABLES } from '../config/database';
import { ContactFormData, ContactSubmission, ApiResponse } from '../types';

export class ContactService {
  // Submit contact form
  static async submitContact(formData: ContactFormData, ipAddress?: string, userAgent?: string): Promise<ApiResponse<ContactSubmission>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.CONTACT_SUBMISSIONS)
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
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
          message: 'Failed to submit contact form',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Contact form submitted successfully',
        data: data as ContactSubmission
      };
    } catch (error) {
      console.error('Contact service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Get all contact submissions
  static async getAllContacts(): Promise<ApiResponse<ContactSubmission[]>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.CONTACT_SUBMISSIONS)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to fetch contact submissions',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Contact submissions fetched successfully',
        data: data as ContactSubmission[]
      };
    } catch (error) {
      console.error('Contact service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Get contact by ID
  static async getContactById(id: string): Promise<ApiResponse<ContactSubmission>> {
    try {
      const { data, error } = await supabase
        .from(TABLES.CONTACT_SUBMISSIONS)
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Contact submission not found',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Contact submission fetched successfully',
        data: data as ContactSubmission
      };
    } catch (error) {
      console.error('Contact service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Update contact status
  static async updateContactStatus(id: string, status: string, notes?: string): Promise<ApiResponse<ContactSubmission>> {
    try {
      const updateData: any = { status };
      if (notes) updateData.notes = notes;

      const { data, error } = await supabase
        .from(TABLES.CONTACT_SUBMISSIONS)
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          message: 'Failed to update contact status',
          error: error.message
        };
      }

      return {
        success: true,
        message: 'Contact status updated successfully',
        data: data as ContactSubmission
      };
    } catch (error) {
      console.error('Contact service error:', error);
      return {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
} 