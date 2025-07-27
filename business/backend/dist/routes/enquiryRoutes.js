"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enquiryController_1 = require("../controllers/enquiryController");
const validation_1 = require("../middleware/validation");
const router = (0, express_1.Router)();
router.post('/submit', validation_1.validateEnquiryForm, enquiryController_1.EnquiryController.submitEnquiry);
router.get('/', enquiryController_1.EnquiryController.getAllEnquiries);
router.get('/:id', enquiryController_1.EnquiryController.getEnquiryById);
router.patch('/:id/status', enquiryController_1.EnquiryController.updateEnquiryStatus);
router.get('/service/:serviceType', enquiryController_1.EnquiryController.getEnquiriesByServiceType);
exports.default = router;
//# sourceMappingURL=enquiryRoutes.js.map