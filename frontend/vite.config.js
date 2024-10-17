import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd());

  // Define the proxy URL based on whether you're in development or production
  const proxy_url =
    env.VITE_DEV_REMOTE === 'remote'
      ? env.VITE_BACKEND_SERVER
      : 'http://localhost:8888/';

  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      // Proxy configuration only needed in development
      ...(mode === 'production' ? {} : {
        proxy: {
          '/api': {
            target: proxy_url,
            changeOrigin: true,
            secure: false,
          },
        },
      }),
      // Configure HMR for WebSocket connections
      hmr: {
        host: env.VITE_DEV_REMOTE === 'remote' ? 'accounting-carmax-frontend.onrender.com' : 'localhost',
        port: 3000, // or the port you are using
      },
    },
  };

  // Set the backend URL for production
  if (mode === 'production') {
    process.env.VITE_BACKEND_SERVER = 'https://accounting-carmax-backend.onrender.com';
  }

  return defineConfig(config);
};
