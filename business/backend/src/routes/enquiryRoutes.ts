import { Router } from 'express';
import { EnquiryController } from '../controllers/enquiryController';
import { validateEnquiryForm } from '../middleware/validation';

const router: Router = Router();

// Public routes
router.post('/submit', validateEnquiryForm, EnquiryController.submitEnquiry);

// Admin routes (add authentication middleware later)
router.get('/', EnquiryController.getAllEnquiries);
router.get('/:id', EnquiryController.getEnquiryById);
router.patch('/:id/status', EnquiryController.updateEnquiryStatus);
router.get('/service/:serviceType', EnquiryController.getEnquiriesByServiceType);

export default router; 