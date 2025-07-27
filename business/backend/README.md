# Shri Balaji Printers - Backend API

Express.js TypeScript backend API for Shri Balaji Printers website with Supabase integration.

## 🚀 Features

### **API Endpoints**
- **Contact Form Submission** - Handle contact form data
- **Enquiry Form Submission** - Handle quote requests
- **Admin Management** - View and manage submissions
- **Status Tracking** - Update submission statuses
- **Quote Management** - Add quotes and notes

### **Security Features**
- **Rate Limiting** - Prevent abuse
- **CORS Protection** - Secure cross-origin requests
- **Input Validation** - Validate all form inputs
- **Helmet Security** - HTTP headers protection
- **Error Handling** - Comprehensive error management

### **Database Integration**
- **Supabase Connection** - PostgreSQL database
- **Real-time Updates** - Live data synchronization
- **Row Level Security** - Secure data access
- **Automatic Timestamps** - Created/updated tracking

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn
- Supabase account and project

### **1. Install Dependencies**
```bash
cd backend
npm install
```

### **2. Environment Configuration**
Create a `.env` file in the backend directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=public
DB_USER=public
DB_PASSWORD=virat18*

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### **3. Database Setup**
1. Run the SQL commands from `supabase_tables.sql` in your Supabase SQL Editor
2. Ensure your Supabase project is properly configured

### **4. Start Development Server**
```bash
npm run dev
```

### **5. Build for Production**
```bash
npm run build
npm start
```

## 📡 API Endpoints

### **Contact Form**
```
POST /api/contact/submit
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello, I need printing services"
}
```

### **Enquiry Form**
```
POST /api/enquiry/submit
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "company": "ABC Company",
  "serviceType": "Business Cards",
  "quantity": "1000 pieces",
  "deadline": "2024-01-15",
  "description": "Need business cards with company logo",
  "budget": "₹5000 - ₹10000",
  "additionalInfo": "Urgent requirement"
}
```

### **Admin Endpoints**

#### **Get All Contacts**
```
GET /api/contact
```

#### **Get Contact by ID**
```
GET /api/contact/:id
```

#### **Update Contact Status**
```
PATCH /api/contact/:id/status
```
**Request Body:**
```json
{
  "status": "replied",
  "notes": "Customer contacted via phone"
}
```

#### **Get All Enquiries**
```
GET /api/enquiry
```

#### **Get Enquiry by ID**
```
GET /api/enquiry/:id
```

#### **Update Enquiry Status**
```
PATCH /api/enquiry/:id/status
```
**Request Body:**
```json
{
  "status": "quoted",
  "quoteAmount": 7500,
  "quoteNotes": "Quote sent to customer"
}
```

#### **Get Enquiries by Service Type**
```
GET /api/enquiry/service/:serviceType
```

## 🔧 Configuration

### **Environment Variables**
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `CORS_ORIGIN` - Allowed origin for CORS
- `RATE_LIMIT_WINDOW_MS` - Rate limiting window
- `RATE_LIMIT_MAX_REQUESTS` - Max requests per window

### **Database Configuration**
The backend connects to Supabase using the provided credentials:
- **Database**: public
- **User**: public
- **Password**: virat18*

## 📊 Response Format

All API responses follow this format:
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data
  }
}
```

Error responses:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## 🔒 Security

### **Rate Limiting**
- 100 requests per 15 minutes per IP
- Configurable via environment variables

### **Input Validation**
- All form inputs are validated
- Email format validation
- Phone number validation
- Required field validation

### **CORS Protection**
- Configured for frontend origin
- Secure cross-origin requests

## 🚀 Deployment

### **Local Development**
```bash
npm run dev
```

### **Production Build**
```bash
npm run build
npm start
```

### **Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 5000
CMD ["npm", "start"]
```

## 📝 API Documentation

### **Health Check**
```
GET /health
```
Returns server status and environment information.

### **Error Codes**
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `429` - Too Many Requests (rate limiting)
- `500` - Internal Server Error

## 🔗 Frontend Integration

Update your frontend API calls to use the backend endpoints:

```javascript
// Contact form submission
const response = await fetch('http://localhost:5000/api/contact/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});

// Enquiry form submission
const response = await fetch('http://localhost:5000/api/enquiry/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

## 📞 Support

For any issues or questions:
- **Email**: shribalajiprinters6@gmail.com
- **Phone**: 9361259552, 9789111525
- **Location**: Sivakasi, Tamil Nadu

---

**Shri Balaji Printers** - Professional Printing Services
*25+ Years of Excellence | Affordable Pricing | Quality Guaranteed* 