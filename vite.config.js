import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({

  base:"/3d_portfolio/",
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
});
