"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const database_1 = require("../config/database");
class ContactService {
    static async submitContact(formData, ipAddress, userAgent) {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.CONTACT_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Contact service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async getAllContacts() {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.CONTACT_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Contact service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async getContactById(id) {
        try {
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.CONTACT_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Contact service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
    static async updateContactStatus(id, status, notes) {
        try {
            const updateData = { status };
            if (notes)
                updateData.notes = notes;
            const { data, error } = await database_1.supabase
                .from(database_1.TABLES.CONTACT_SUBMISSIONS)
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
                data: data
            };
        }
        catch (error) {
            console.error('Contact service error:', error);
            return {
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
}
exports.ContactService = ContactService;
//# sourceMappingURL=contactService.js.map