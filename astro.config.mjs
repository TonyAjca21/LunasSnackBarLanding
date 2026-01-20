// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',  // necesario para rutas dinámicas
  adapter: vercel(), // ✅ ahora sí funciona
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
