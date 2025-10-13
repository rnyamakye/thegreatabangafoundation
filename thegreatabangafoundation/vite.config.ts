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
      "framer-motion"
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create separate chunks for large vendor libraries
          if (id.includes('node_modules')) {
            // Don't chunk React since it's handled by React Router
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('@emailjs')) {
              return 'emailjs';
            }
            if (id.includes('react-hot-toast')) {
              return 'toast';
            }
            // Group other small vendor libraries
            return 'vendor';
          }
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
