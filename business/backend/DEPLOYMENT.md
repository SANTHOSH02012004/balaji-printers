# Backend Deployment Guide

## 🚀 Deploying to Render

### 1. Environment Variables
Set these environment variables in your Render dashboard:

```
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://dazzling-bubblegum-5e0770.netlify.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 2. Build Settings
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 16 or higher

### 3. CORS Configuration
The backend is now configured to allow requests from:
- `http://localhost:3000` (local development)
- `https://dazzling-bubblegum-5e0770.netlify.app` (your Netlify domain)
- `https://shribalajiprinters.netlify.app` (alternative domain)

### 4. Health Check
After deployment, test the health endpoint:
```
https://your-render-app.onrender.com/health
```

## 🔧 Troubleshooting CORS Issues

### If you get CORS errors:
1. **Check the exact origin** in the error message
2. **Add the origin** to the `allowedOrigins` array in `src/index.ts`
3. **Redeploy** the backend
4. **Clear browser cache** and try again

### Common CORS Origins to Add:
- Your Netlify domain (check the exact URL)
- Any custom domains you're using
- Local development URLs

## 📝 API Endpoints

### Health Check
- `GET /health` - Check if API is running

### Contact API
- `GET /api/contact` - Get all contacts
- `POST /api/contact/submit` - Submit contact form
- `PATCH /api/contact/:id/status` - Update contact status

### Enquiry API
- `GET /api/enquiry` - Get all enquiries
- `POST /api/enquiry/submit` - Submit enquiry form
- `PATCH /api/enquiry/:id/status` - Update enquiry status

## 🔒 Security Features

- **CORS Protection**: Only allows requests from specified origins
- **Rate Limiting**: Prevents abuse with request limits
- **Helmet**: Security headers for Express
- **Input Validation**: Validates all incoming requests

## 📊 Monitoring

Check your Render dashboard for:
- **Logs**: View application logs
- **Metrics**: Monitor performance
- **Errors**: Check for any deployment issues 