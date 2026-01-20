// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node'; // ← nuevo adaptador

export default defineConfig({
  output: 'server', // ← importante para rutas dinámicas
adapter: node({
  mode: 'standalone', // genera un build que se puede ejecutar solo con Node         // carpeta de salida del build
}),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
