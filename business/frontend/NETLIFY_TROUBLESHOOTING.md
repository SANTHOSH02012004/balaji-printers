# Netlify Deployment Troubleshooting

## 🚨 "Page not found" Error on /admin

If you're getting a 404 error when accessing `/admin` on Netlify, follow these steps:

### 1. Check Build Settings in Netlify
- Go to your Netlify dashboard
- Navigate to Site settings > Build & deploy
- Verify these settings:
  - **Build command**: `npm run build:netlify`
  - **Publish directory**: `build`
  - **Node version**: 16 or higher

### 2. Verify Redirects File
The `_redirects` file should be in your `public` folder and contain:
```
# Handle client-side routing
/*    /index.html   200

# Specific routes for better handling
/admin    /index.html   200
/enquiry  /index.html   200
```

### 3. Check Build Output
After deployment, check if the `_redirects` file is in your build output:
1. Go to Netlify dashboard
2. Click on your latest deploy
3. Check the "Files" tab
4. Look for `_redirects` file in the root

### 4. Manual Deploy Test
Try a manual deploy:
```bash
cd frontend
npm run build:netlify
# Then drag the 'build' folder to Netlify
```

### 5. Alternative Solutions

#### Option A: Use netlify.toml
The `netlify.toml` file should contain:
```toml
[build]
  publish = "build"
  command = "npm run build:netlify"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Option B: Force Redirect
Add this to your `_redirects` file:
```
/admin    /index.html   200
/enquiry  /index.html   200
/*        /index.html   200
```

### 6. Test Locally First
Before deploying to Netlify, test locally:
```bash
cd frontend
npm run build
npx serve -s build
```
Then visit `http://localhost:3000/admin`

### 7. Check Browser Console
Open browser developer tools and check:
- Network tab for failed requests
- Console for JavaScript errors
- Application tab for routing issues

### 8. Common Issues & Solutions

#### Issue: Redirects not working
**Solution**: Clear Netlify cache and redeploy

#### Issue: Build fails
**Solution**: Check Node.js version compatibility

#### Issue: Routes work locally but not on Netlify
**Solution**: Verify the `_redirects` file is in build output

### 9. Emergency Fix
If nothing works, try this temporary solution:
1. Create a simple HTML file at `/admin/index.html`
2. Add a redirect script to your main page

### 10. Contact Support
If the issue persists:
1. Check Netlify status page
2. Contact Netlify support with your site URL
3. Provide build logs and error screenshots

## ✅ Success Checklist
- [ ] `_redirects` file exists in `public` folder
- [ ] `netlify.toml` is configured correctly
- [ ] Build command includes redirects copy
- [ ] Build output contains `_redirects` file
- [ ] Local build works correctly
- [ ] No JavaScript errors in console
- [ ] Routes work in local build test 