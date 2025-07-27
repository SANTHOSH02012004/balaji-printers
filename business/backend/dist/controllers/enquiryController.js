"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnquiryController = void 0;
const enquiryService_1 = require("../services/enquiryService");
class EnquiryController {
    static async submitEnquiry(req, res) {
        try {
            const formData = req.body;
            const ipAddress = req.ip || req.connection.remoteAddress;
            const userAgent = req.get('User-Agent');
            const result = await enquiryService_1.EnquiryService.submitEnquiry(formData, ipAddress, userAgent);
            if (result.success) {
                return res.status(201).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Enquiry controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async getAllEnquiries(req, res) {
        try {
            const result = await enquiryService_1.EnquiryService.getAllEnquiries();
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Enquiry controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async getEnquiryById(req, res) {
        try {
            const { id } = req.params;
            const result = await enquiryService_1.EnquiryService.getEnquiryById(id);
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(404).json(result);
            }
        }
        catch (error) {
            console.error('Enquiry controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async updateEnquiryStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, quoteAmount, quoteNotes } = req.body;
            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: 'Status is required'
                });
            }
            const result = await enquiryService_1.EnquiryService.updateEnquiryStatus(id, status, quoteAmount, quoteNotes);
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Enquiry controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async getEnquiriesByServiceType(req, res) {
        try {
            const { serviceType } = req.params;
            const result = await enquiryService_1.EnquiryService.getEnquiriesByServiceType(serviceType);
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Enquiry controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
}
exports.EnquiryController = EnquiryController;
//# sourceMappingURL=enquiryController.js.map