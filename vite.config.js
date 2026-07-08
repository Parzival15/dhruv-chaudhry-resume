import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works whether served from a domain root,
// a GitHub Pages project subpath, or opened locally.
export default defineConfig({
  plugins: [react()],
  base: './',
});
