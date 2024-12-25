import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        },
        https: {
            key: fs.readFileSync('certs/localhost-key.pem'),
            cert: fs.readFileSync('certs/localhost.pem'),
        },
        port: 4000, // Custom port for development
    },
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
    build: {
        target: 'es2015', // Ensures compatibility with older browsers
    },
});
