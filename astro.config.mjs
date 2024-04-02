import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://semi-static-sites-astro.fly.dev",
  integrations: [mdx()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
