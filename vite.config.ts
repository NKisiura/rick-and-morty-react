import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rick-and-morty-react",
  resolve: {
    alias: {
      "@app": "/src/app",
      "@context": "/src/app/context",
      "@hooks": "/src/app/hooks",
      "@store": "/src/app/store",
      "@pages": "/src/app/pages",
      "@ui": "/src/app/ui",
      "@features": "/src/app/features",
    },
  },
});
