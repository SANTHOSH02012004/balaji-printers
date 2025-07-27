"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const contactService_1 = require("../services/contactService");
class ContactController {
    static async submitContact(req, res) {
        try {
            const formData = req.body;
            const ipAddress = req.ip || req.connection.remoteAddress;
            const userAgent = req.get('User-Agent');
            const result = await contactService_1.ContactService.submitContact(formData, ipAddress, userAgent);
            if (result.success) {
                return res.status(201).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Contact controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async getAllContacts(req, res) {
        try {
            const result = await contactService_1.ContactService.getAllContacts();
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Contact controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async getContactById(req, res) {
        try {
            const { id } = req.params;
            const result = await contactService_1.ContactService.getContactById(id);
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(404).json(result);
            }
        }
        catch (error) {
            console.error('Contact controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
    static async updateContactStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, notes } = req.body;
            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: 'Status is required'
                });
            }
            const result = await contactService_1.ContactService.updateContactStatus(id, status, notes);
            if (result.success) {
                return res.status(200).json(result);
            }
            else {
                return res.status(400).json(result);
            }
        }
        catch (error) {
            console.error('Contact controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=contactController.js.map