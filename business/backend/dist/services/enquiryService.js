"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnquiryService = void 0;
const database_1 = require("../config/database");
class EnquiryService {
    static async submitEnquiry(formData, ipAddress, userAgent) {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.ENQUIRY_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Enquiry service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async getAllEnquiries() {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.ENQUIRY_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Enquiry service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async getEnquiryById(id) {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.ENQUIRY_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Enquiry service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async updateEnquiryStatus(id, status, quoteAmount, quoteNotes) {
        try {
            const updateData = { status };
            if (quoteAmount !== undefined)
                updateData.quote_amount = quoteAmount;
            if (quoteNotes)
                updateData.quote_notes = quoteNotes;
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.ENQUIRY_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Enquiry service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async getEnquiriesByServiceType(serviceType) {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.ENQUIRY_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Enquiry service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
}
exports.EnquiryService = EnquiryService;
//# sourceMappingURL=enquiryService.js.map