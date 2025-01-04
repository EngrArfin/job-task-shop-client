import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunking
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Bundle all node_modules into a separate chunk
            return "vendor";
          }
        },
      },
    },
    // Increase chunk size warning limit (e.g., 1000 KB)
    chunkSizeWarningLimit: 1000,
  },
});
