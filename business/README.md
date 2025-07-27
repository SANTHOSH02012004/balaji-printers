# Shri Balaji Printers - Business Website

A modern business website for Shri Balaji Printers with contact forms, enquiry system, and admin dashboard.

## 🚀 Quick Start

### Option 1: Start Both Servers (Recommended)
```bash
node start-dev.js
```

### Option 2: Start Servers Separately

#### Backend (API Server)
```bash
cd backend
npm install
npm start
```
Backend will run on: http://localhost:5000

#### Frontend (React App)
```bash
cd frontend
npm install
npm start
```
Frontend will run on: http://localhost:3000

## 📁 Project Structure

```
business/
├── backend/          # Node.js/Express API server
├── frontend/         # React frontend application
├── start-dev.js      # Development script to start both servers
└── README.md         # This file
```

## 🔧 Environment Setup

### Backend Environment Variables
Create a `.env` file in the `backend` directory:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Frontend Environment Variables
Create a `.env` file in the `frontend` directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

## 🌐 Deployment

### Frontend (Netlify)
The frontend is configured for Netlify deployment with:
- `_redirects` file for client-side routing
- `netlify.toml` configuration

### Backend (Render/Railway)
The backend can be deployed to any Node.js hosting service.

## 📱 Features

- **Responsive Design**: Works on all devices
- **Contact Form**: Customer contact submissions
- **Enquiry System**: Project quote requests
- **Admin Dashboard**: Manage submissions and status
- **Mobile-First**: Optimized for mobile devices

## 🔗 Important URLs

- **Homepage**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **Enquiry Form**: http://localhost:3000/enquiry
- **API Health Check**: http://localhost:5000/health

## 🛠️ Troubleshooting

### Admin Dashboard Not Loading
1. Make sure the backend server is running on port 5000
2. Check browser console for API errors
3. Verify the API URL in `frontend/src/config/api.js`

### Mobile Menu Issues
The mobile menu has been optimized with:
- Smooth animations
- Better touch targets
- Improved accessibility
- Visual feedback on interactions

### 404 Errors on Netlify
The `_redirects` file handles client-side routing for React Router. 