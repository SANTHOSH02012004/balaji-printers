import { Request, Response } from 'express';
import { ContactService } from '../services/contactService';

export class ContactController {
  // Submit contact form
  static async submitContact(req: Request, res: Response) {
    try {
      const formData = req.body;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.get('User-Agent');

      const result = await ContactService.submitContact(formData, ipAddress, userAgent);

      if (result.success) {
        return res.status(201).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Contact controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Get all contact submissions (admin only)
  static async getAllContacts(req: Request, res: Response) {
    try {
      const result = await ContactService.getAllContacts();

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Contact controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Get contact by ID (admin only)
  static async getContactById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await ContactService.getContactById(id);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json(result);
      }
    } catch (error) {
      console.error('Contact controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Update contact status (admin only)
  static async updateContactStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      if (!status) {
        return res.status(400).json({
          success: false,
          message: 'Status is required'
        });
      }

      const result = await ContactService.updateContactStatus(id, status, notes);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Contact controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
} 