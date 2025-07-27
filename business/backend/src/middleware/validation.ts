import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validation middleware
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
    return;
  }
  next();
};

// Contact form validation
export const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage('Phone number must be between 8 and 20 characters'),
  
  body('message')
    .optional()
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage('Message must be between 1 and 1000 characters'),
  
  handleValidationErrors
];

// Enquiry form validation
export const validateEnquiryForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage('Phone number must be between 8 and 20 characters'),
  
  body('company')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('Company name must be less than 255 characters'),
  
  body('serviceType')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Service type is required and must be between 2 and 100 characters'),
  
  body('quantity')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Quantity is required and must be between 2 and 100 characters'),
  
  body('deadline')
    .optional()
    .isISO8601()
    .withMessage('Deadline must be a valid date'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Description must be between 1 and 2000 characters'),
  
  body('budget')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Budget must be less than 100 characters'),
  
  body('additionalInfo')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Additional info must be less than 1000 characters'),
  
  handleValidationErrors
]; 