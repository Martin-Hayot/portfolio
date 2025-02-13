import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://martinhayot.com",
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        vue(),
        react(),
    ],
});
