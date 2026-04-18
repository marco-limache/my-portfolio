import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://marco.limache.dev',
  srcDir: './app',
  publicDir: './app/public',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
});
