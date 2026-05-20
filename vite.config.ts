import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import Sitemap from "vite-plugin-sitemap";

// Definisikan route dinamis dari katalog produk dan kategorimu
const dynamicRoutes = [
  "/catalog/ballistic-app",
  "/catalog/power-tech-shield-fire-blanket",
  "/catalog/altex-alpha-tech-shield",
  "/catalog/g-tech-defend",
  "/lithium-fire-killer-hartindo-af31",
  "/catalog/flat-af11e",
  "/catalog/uss-undercarriage",
  "/catalog/x-cap",
  "/category/predictive",
  "/category/preventive",
  "/category/protective",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://www.famindofast.com",
      dynamicRoutes: dynamicRoutes,
      exclude: ["/login", "/admin/blog"],
      generateRobotsTxt: false,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animations: ["framer-motion", "gsap"],
          firebase: ["firebase/app", "firebase/auth", "firebase/firestore"],
        },
      },
    },
  },
});
