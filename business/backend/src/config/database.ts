import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration');
}

// Create Supabase client with service role for admin operations
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Create public client for user operations
export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey);

// Database table names
export const TABLES = {
  CONTACT_SUBMISSIONS: 'contact_submissions',
  ENQUIRY_SUBMISSIONS: 'enquiry_submissions',
  SUBMISSIONS_DASHBOARD: 'submissions_dashboard'
} as const;

// Status options
export const CONTACT_STATUS = {
  NEW: 'new',
  READ: 'read',
  REPLIED: 'replied',
  CLOSED: 'closed'
} as const;

export const ENQUIRY_STATUS = {
  NEW: 'new',
  REVIEWING: 'reviewing',
  QUOTED: 'quoted',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  CLOSED: 'closed'
} as const; 