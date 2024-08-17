import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});
