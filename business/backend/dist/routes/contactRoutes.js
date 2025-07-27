"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = require("../controllers/contactController");
const validation_1 = require("../middleware/validation");
const router = (0, express_1.Router)();
router.post('/submit', validation_1.validateContactForm, contactController_1.ContactController.submitContact);
router.get('/', contactController_1.ContactController.getAllContacts);
router.get('/:id', contactController_1.ContactController.getContactById);
router.patch('/:id/status', contactController_1.ContactController.updateContactStatus);
exports.default = router;
//# sourceMappingURL=contactRoutes.js.map