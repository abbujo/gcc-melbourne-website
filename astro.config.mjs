// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://abbujo.github.io",
  base: process.env.PUBLIC_BASE_PATH,
  output: "static",
  integrations: [
    process.env.PUBLIC_NO_INDEX === "false" ? sitemap() : null,
  ].filter(Boolean),
  vite: {
    plugins: [tailwindcss()],
  },
});


