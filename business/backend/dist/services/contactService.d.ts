import { ContactFormData, ContactSubmission, ApiResponse } from '../types';
export declare class ContactService {
    static submitContact(formData: ContactFormData, ipAddress?: string, userAgent?: string): Promise<ApiResponse<ContactSubmission>>;
    static getAllContacts(): Promise<ApiResponse<ContactSubmission[]>>;
    static getContactById(id: string): Promise<ApiResponse<ContactSubmission>>;
    static updateContactStatus(id: string, status: string, notes?: string): Promise<ApiResponse<ContactSubmission>>;
}
//# sourceMappingURL=contactService.d.ts.map