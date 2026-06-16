import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import vue from "@astrojs/vue";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://martinhayot.com",
  markdown: {
    processor: unified({
      remarkPlugins: [
        [remarkToc, { heading: "Table of Contents", maxDepth: 3 }],
      ],
      rehypePlugins: [rehypeAccessibleEmojis],
    }),
  },
  integrations: [vue(), react()],
});
