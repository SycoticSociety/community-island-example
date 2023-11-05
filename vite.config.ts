import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3002,
  },
  build: {
    rollupOptions: {
      input: {
        scene: resolve(__dirname, "Scene.ts"), // Correct path to Scene.ts
      },
    },
  },
});

