import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "src/assets/FAST_Logo_PNG/logo.png");
const outDir = path.join(root, "public");

await mkdir(outDir, { recursive: true });

const sizes = [
  { width: 200, suffix: "200w" },
  { width: 400, suffix: "400w" },
];

for (const { width, suffix } of sizes) {
  await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 65 })
    .toFile(path.join(outDir, `logo-nav-${suffix}.avif`));

  await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, `logo-nav-${suffix}.webp`));
}

console.log("Optimized navbar logos written to public/");
