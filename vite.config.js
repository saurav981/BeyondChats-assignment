import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnWarning: false,
      failOnError: false,
      cache: false,
      fix: true,
    }),
  ],
  server: {
    // Disable HMR overlay to hide screen error overlay
    hmr: {
      overlay: false,
    },
  },
});
