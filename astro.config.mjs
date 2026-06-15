import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import fs from "node:fs";
import path from "node:path";

// Dev-only endpoint so the local /admin page can save copy.json in any browser.
// `apply: "serve"` means it only runs under `npm run dev`, never in the build/deploy.
const copyWriter = {
  name: "eddy-copy-writer",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (!req.url || req.url.split("?")[0] !== "/__save-copy" || req.method !== "POST") return next();
      let body = "";
      req.on("data", (c) => (body += c));
      req.on("end", () => {
        try {
          JSON.parse(body); // validate it's real JSON before writing
          fs.writeFileSync(path.join(process.cwd(), "src/data/copy.json"), body);
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("ok");
        } catch (e) {
          res.statusCode = 400;
          res.end(String(e && e.message ? e.message : e));
        }
      });
    });
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://swimwitheddy.com",
  base: "/",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  build: {
    // Should be './' but GitHub pages can have issues with that
    assetsPrefix: '',
  },
  vite: {
    plugins: [copyWriter],
  },

  // GitHub pages always has a trailing slash - can remove if i change host to 'never'
  trailingSlash: "always",
});
