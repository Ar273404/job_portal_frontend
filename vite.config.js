import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/": {
        target: "http://localhost:4000", // Replace with your backend server address
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  }
});
