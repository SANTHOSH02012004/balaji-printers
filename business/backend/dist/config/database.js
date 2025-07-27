"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENQUIRY_STATUS = exports.CONTACT_STATUS = exports.TABLES = exports.supabasePublic = exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase configuration');
}
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
exports.supabasePublic = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
exports.TABLES = {
    CONTACT_SUBMISSIONS: 'contact_submissions',
    ENQUIRY_SUBMISSIONS: 'enquiry_submissions',
    SUBMISSIONS_DASHBOARD: 'submissions_dashboard'
};
exports.CONTACT_STATUS = {
    NEW: 'new',
    READ: 'read',
    REPLIED: 'replied',
    CLOSED: 'closed'
};
exports.ENQUIRY_STATUS = {
    NEW: 'new',
    REVIEWING: 'reviewing',
    QUOTED: 'quoted',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected',
    CLOSED: 'closed'
};
//# sourceMappingURL=database.js.map