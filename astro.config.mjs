// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'gl',
    locales: ['gl', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'gl', locales: { gl: 'gl-ES', es: 'es-ES' } },
    }),
  ],
});
