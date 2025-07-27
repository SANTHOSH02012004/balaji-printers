"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const enquiryRoutes_1 = __importDefault(require("./routes/enquiryRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.'
    }
});
app.use(limiter);
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Shri Balaji Printers API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});
app.use('/api/contact', contactRoutes_1.default);
app.use('/api/enquiry', enquiryRoutes_1.default);
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found'
    });
});
app.use((error, req, res, next) => {
    console.error('Global error handler:', error);
    res.status(error.status || 500).json({
        success: false,
        message: error.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Shri Balaji Printers API server running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    console.log(`📝 Contact API: http://localhost:${PORT}/api/contact`);
    console.log(`💼 Enquiry API: http://localhost:${PORT}/api/enquiry`);
});
exports.default = app;
//# sourceMappingURL=index.js.map