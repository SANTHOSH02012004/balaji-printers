"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnquiryForm = exports.validateContactForm = exports.handleValidationErrors = void 0;
const express_validator_1 = require("express-validator");
const handleValidationErrors = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
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
exports.handleValidationErrors = handleValidationErrors;
exports.validateContactForm = [
    (0, express_validator_1.body)('name')
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage('Name must be between 1 and 100 characters'),
    (0, express_validator_1.body)('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    (0, express_validator_1.body)('phone')
        .trim()
        .isLength({ min: 8, max: 20 })
        .withMessage('Phone number must be between 8 and 20 characters'),
    (0, express_validator_1.body)('message')
        .trim()
        .isLength({ min: 5, max: 1000 })
        .withMessage('Message must be between 5 and 1000 characters'),
    exports.handleValidationErrors
];
exports.validateEnquiryForm = [
    (0, express_validator_1.body)('name')
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage('Name must be between 1 and 100 characters'),
    (0, express_validator_1.body)('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    (0, express_validator_1.body)('phone')
        .trim()
        .isLength({ min: 8, max: 20 })
        .withMessage('Phone number must be between 8 and 20 characters'),
    (0, express_validator_1.body)('company')
        .optional()
        .trim()
        .isLength({ max: 255 })
        .withMessage('Company name must be less than 255 characters'),
    (0, express_validator_1.body)('serviceType')
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage('Service type is required and must be less than 100 characters'),
    (0, express_validator_1.body)('quantity')
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage('Quantity is required and must be less than 100 characters'),
    (0, express_validator_1.body)('deadline')
        .optional()
        .isISO8601()
        .withMessage('Deadline must be a valid date'),
    (0, express_validator_1.body)('description')
        .trim()
        .isLength({ min: 5, max: 2000 })
        .withMessage('Description must be between 5 and 2000 characters'),
    (0, express_validator_1.body)('budget')
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage('Budget must be less than 100 characters'),
    (0, express_validator_1.body)('additionalInfo')
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage('Additional info must be less than 1000 characters'),
    exports.handleValidationErrors
];
//# sourceMappingURL=validation.js.map