import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure the Vite server
  server: {
    port: 3001,
    // Set up a proxy for the /api endpoint
    // Requests to /api are forwarded to http://localhost:3000
    proxy: {
      "/api": { target: "http://localhost:3000" },
    },
  },
});
