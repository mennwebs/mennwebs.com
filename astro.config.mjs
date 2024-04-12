import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: 'https://mennwebs.com/',
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), icon(), playformInline()]
});