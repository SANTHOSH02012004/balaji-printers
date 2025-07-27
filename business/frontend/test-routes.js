// Simple test to verify routes are working
console.log('🔍 Testing React Router Routes...');

// Test if we can access the routes
const testRoutes = async () => {
  try {
    // Test home route
    const homeResponse = await fetch('/');
    console.log('✅ Home route:', homeResponse.status);
    
    // Test admin route
    const adminResponse = await fetch('/admin');
    console.log('✅ Admin route:', adminResponse.status);
    
    // Test enquiry route
    const enquiryResponse = await fetch('/enquiry');
    console.log('✅ Enquiry route:', enquiryResponse.status);
    
  } catch (error) {
    console.error('❌ Route test failed:', error);
  }
};

// Run the test
testRoutes(); 