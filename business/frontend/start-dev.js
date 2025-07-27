const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Shri Balaji Printers Development Environment...\n');

// Start backend
console.log('📡 Starting Backend Server...');
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Wait a bit for backend to start, then start frontend
setTimeout(() => {
  console.log('\n🌐 Starting Frontend Development Server...');
  const frontend = spawn('npm', ['start'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down development servers...');
    backend.kill();
    frontend.kill();
    process.exit();
  });

  frontend.on('close', (code) => {
    console.log(`\n🌐 Frontend server exited with code ${code}`);
    backend.kill();
    process.exit(code);
  });
}, 3000);

backend.on('close', (code) => {
  console.log(`\n📡 Backend server exited with code ${code}`);
  process.exit(code);
});

console.log('✅ Development environment starting...');
console.log('📡 Backend will be available at: http://localhost:5000');
console.log('🌐 Frontend will be available at: http://localhost:3000');
console.log('📊 Admin Dashboard will be available at: http://localhost:3000/admin');
console.log('\nPress Ctrl+C to stop all servers\n'); 