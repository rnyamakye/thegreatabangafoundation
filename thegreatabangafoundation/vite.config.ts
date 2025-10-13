import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    exclude: [
      "@vercel/analytics/react",
      "@vercel/speed-insights/react",
      "framer-motion",
    ],
    include: ["react", "react-dom", "react-router"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router"],
        },
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
