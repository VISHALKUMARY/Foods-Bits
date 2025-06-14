import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Foods-Bits/',
  plugins: [react()],
  resolve: {
    alias: {
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
