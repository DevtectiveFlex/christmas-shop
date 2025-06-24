import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/pages/index.html',
        gifts: './src/pages/gifts.html',
      },
    },
  },
});