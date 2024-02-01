import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features': '/src/features',
      '@components': '/src/components',
      '@services': '/src/services',
    },
  },
});
