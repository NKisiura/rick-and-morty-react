import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rick-and-morty-react",
  resolve: {
    alias: {
      "@app": "/src/app",
      "@features": "/src/app/features",
      "@pages": "/src/app/pages",
      "@shared": "/src/app/shared",
      "@ui": "/src/app/ui",
    },
  },
});
