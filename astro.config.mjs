// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pingrhub.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'tr'],
    routing: {
      // EN served at the root (/), others prefixed (/es, /de, /tr)
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [UnoCSS()],
  },
});
