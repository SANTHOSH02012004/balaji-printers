import { Request, Response } from 'express';
import { EnquiryService } from '../services/enquiryService';

export class EnquiryController {
  // Submit enquiry form
  static async submitEnquiry(req: Request, res: Response) {
    try {
      const formData = req.body;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.get('User-Agent');

      const result = await EnquiryService.submitEnquiry(formData, ipAddress, userAgent);

      if (result.success) {
        return res.status(201).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Enquiry controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Get all enquiry submissions (admin only)
  static async getAllEnquiries(req: Request, res: Response) {
    try {
      const result = await EnquiryService.getAllEnquiries();

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Enquiry controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Get enquiry by ID (admin only)
  static async getEnquiryById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await EnquiryService.getEnquiryById(id);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json(result);
      }
    } catch (error) {
      console.error('Enquiry controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Update enquiry status and quote (admin only)
  static async updateEnquiryStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, quoteAmount, quoteNotes } = req.body;

      if (!status) {
        return res.status(400).json({
          success: false,
          message: 'Status is required'
        });
      }

      const result = await EnquiryService.updateEnquiryStatus(id, status, quoteAmount, quoteNotes);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Enquiry controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Get enquiries by service type (admin only)
  static async getEnquiriesByServiceType(req: Request, res: Response) {
    try {
      const { serviceType } = req.params;
      const result = await EnquiryService.getEnquiriesByServiceType(serviceType);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      console.error('Enquiry controller error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
} 