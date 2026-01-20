// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node'; // ← nuevo adaptador

export default defineConfig({
  output: 'static', // <-- genera HTML estático
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});

