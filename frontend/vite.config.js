import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
	  proxy: {
		"/api": {
		  target: "http://localhost:5000",  // Make sure this is pointing to the correct backend port (5000)
		  changeOrigin: true,
		  secure: false,
		},
	  },
	},
  });
  