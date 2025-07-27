import { EnquiryFormData, EnquirySubmission, ApiResponse } from '../types';
export declare class EnquiryService {
    static submitEnquiry(formData: EnquiryFormData, ipAddress?: string, userAgent?: string): Promise<ApiResponse<EnquirySubmission>>;
    static getAllEnquiries(): Promise<ApiResponse<EnquirySubmission[]>>;
    static getEnquiryById(id: string): Promise<ApiResponse<EnquirySubmission>>;
    static updateEnquiryStatus(id: string, status: string, quoteAmount?: number, quoteNotes?: string): Promise<ApiResponse<EnquirySubmission>>;
    static getEnquiriesByServiceType(serviceType: string): Promise<ApiResponse<EnquirySubmission[]>>;
}
//# sourceMappingURL=enquiryService.d.ts.map