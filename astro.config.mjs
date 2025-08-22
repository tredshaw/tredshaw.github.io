import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://tredshaw.github.io",
  base: "/",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  build: {
    // Should be './' but GitHub pages can have issues with that
    assetsPrefix: '',
  },
  // vite: {
  //   plugins: [tailwindcss()],
  // },

  // GitHub pages always has a trailing slash - can remove if i change host to 'never'
  trailingSlash: "always",
});
