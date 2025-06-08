import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    port: 4000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
