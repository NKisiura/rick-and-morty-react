import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rick-and-morty-react",
  resolve: {
    alias: {
      "@app": "/src/app",
      "@pages": "/src/app/pages",
      "@context": "/src/app/context",
      "@hooks": "/src/app/hooks",
      "@ui": "/src/app/ui",
    },
  },
});
