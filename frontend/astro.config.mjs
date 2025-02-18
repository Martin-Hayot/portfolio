import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://martinhayot.com",
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Table of Contents", maxDepth: 3 }]],
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    vue(),
    react(),
  ],
});
