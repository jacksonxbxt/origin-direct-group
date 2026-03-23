// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://origindirectgroup.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (item.url.includes('/products/') && !item.url.endsWith('/products/')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (item.url.includes('/markets/') && !item.url.endsWith('/markets/')) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        } else if (item.url.endsWith('/products/') || item.url.endsWith('/markets/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (item.url === 'https://origindirectgroup.com/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
