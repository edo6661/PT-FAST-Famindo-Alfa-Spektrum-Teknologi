import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import Sitemap from "vite-plugin-sitemap";
// @ts-expect-error shared ESM module without type declarations
import { dynamicRoutes } from "./scripts/seo-routes.mjs";

function deferCss() {
  return {
    name: "defer-css",
    enforce: "post" as const,
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin>\n<noscript><link rel="stylesheet" href="$1" crossorigin></noscript>',
      );
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    deferCss(),
    Sitemap({
      hostname: "https://www.famindofast.com",
      dynamicRoutes: dynamicRoutes,
      exclude: ["/login", "/admin/blog"],
      lastmod: new Date(),
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
