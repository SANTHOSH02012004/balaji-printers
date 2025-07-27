import { Router } from 'express';
import { ContactController } from '../controllers/contactController';
import { validateContactForm } from '../middleware/validation';

const router = Router();

// Public routes
router.post('/submit', validateContactForm, ContactController.submitContact);

// Admin routes (add authentication middleware later)
router.get('/', ContactController.getAllContacts);
router.get('/:id', ContactController.getContactById);
router.patch('/:id/status', ContactController.updateContactStatus);

export default router; 