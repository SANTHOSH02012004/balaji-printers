-- Supabase Tables for Shri Balaji Printers Website
-- Run these SQL commands in your Supabase SQL Editor

-- 1. Contact Form Submissions Table
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
    notes TEXT,
    ip_address INET,
    user_agent TEXT
);

-- 2. Enquiry/Quote Requests Table
CREATE TABLE enquiry_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    company VARCHAR(255),
    service_type VARCHAR(100) NOT NULL,
    quantity VARCHAR(100) NOT NULL,
    deadline DATE,
    description TEXT NOT NULL,
    budget VARCHAR(100),
    additional_info TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'quoted', 'accepted', 'rejected', 'closed')),
    quote_amount DECIMAL(10,2),
    quote_notes TEXT,
    ip_address INET,
    user_agent TEXT
);

-- 3. Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

CREATE INDEX idx_enquiry_submissions_created_at ON enquiry_submissions(created_at DESC);
CREATE INDEX idx_enquiry_submissions_status ON enquiry_submissions(status);
CREATE INDEX idx_enquiry_submissions_email ON enquiry_submissions(email);
CREATE INDEX idx_enquiry_submissions_service_type ON enquiry_submissions(service_type);

-- 4. Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 5. Create triggers for updated_at
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enquiry_submissions_updated_at 
    BEFORE UPDATE ON enquiry_submissions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 6. Row Level Security (RLS) - Enable for admin access only
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiry_submissions ENABLE ROW LEVEL SECURITY;

-- 7. Create policies for admin access (adjust based on your auth setup)
-- For now, allowing all operations - you should restrict this based on your needs
CREATE POLICY "Allow all operations for authenticated users" ON contact_submissions
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON enquiry_submissions
    FOR ALL USING (auth.role() = 'authenticated');

-- 8. Optional: Create a view for dashboard
CREATE VIEW submissions_dashboard AS
SELECT 
    'contact' as type,
    id,
    name,
    email,
    phone,
    created_at,
    status,
    'Contact Form' as source
FROM contact_submissions
UNION ALL
SELECT 
    'enquiry' as type,
    id,
    name,
    email,
    phone,
    created_at,
    status,
    service_type as source
FROM enquiry_submissions
ORDER BY created_at DESC;

-- 9. Optional: Create function to get submission statistics
CREATE OR REPLACE FUNCTION get_submission_stats()
RETURNS TABLE (
    total_contacts BIGINT,
    total_enquiries BIGINT,
    new_contacts BIGINT,
    new_enquiries BIGINT,
    today_contacts BIGINT,
    today_enquiries BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        (SELECT COUNT(*) FROM contact_submissions) as total_contacts,
        (SELECT COUNT(*) FROM enquiry_submissions) as total_enquiries,
        (SELECT COUNT(*) FROM contact_submissions WHERE status = 'new') as new_contacts,
        (SELECT COUNT(*) FROM enquiry_submissions WHERE status = 'new') as new_enquiries,
        (SELECT COUNT(*) FROM contact_submissions WHERE DATE(created_at) = CURRENT_DATE) as today_contacts,
        (SELECT COUNT(*) FROM enquiry_submissions WHERE DATE(created_at) = CURRENT_DATE) as today_enquiries;
END;
$$ LANGUAGE plpgsql; 