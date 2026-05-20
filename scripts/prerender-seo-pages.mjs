/**
 * Post-build: emit static index.html for SEO-critical routes so crawlers
 * receive full meta tags and visible content without executing JavaScript.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const siteUrl = "https://www.famindofast.com";

const LFK_PAGE = {
  routePath: "catalog/lithium-fire-killer-hartindo-af31",
  title: "Lithium Fire Killer HARTINDO AF31 | World's First Lithium Fire Extinguisher",
  description:
    "Lithium Fire Killer (LFK) HARTINDO AF31 — the world's first lithium fire extinguisher. SNI certified, eco-friendly, TKDN certified. Extinguishes Class A, B, D, F/K & Lithium battery fires. Buy from PT. Famindo Alfa Spektrum Teknologi (FAST).",
  keywords:
    "lithium fire killer, Lithium Fire Killer, HARTINDO AF31, LFK AF31, lithium fire extinguisher, pemadam api baterai lithium, pemadam api lithium, lithium battery fire extinguisher, FAST Indonesia",
  image: `${siteUrl}/products/lfk.avif`,
  bodyHtml: `
    <main style="font-family: system-ui, sans-serif; max-width: 48rem; margin: 0 auto; padding: 2rem; line-height: 1.6; color: #e2e8f0; background: #0a192f;">
      <p><a href="${siteUrl}/" style="color: #3898d4;">FAST — PT. Famindo Alfa Spektrum Teknologi</a></p>
      <h1 style="color: #fff; font-size: 2rem;">Lithium Fire Killer HARTINDO AF31</h1>
      <p style="color: #3898d4; font-size: 1.25rem;">The First Lithium Fire Extinguisher In The World</p>
      <p>Lithium Fire Killer (LFK) HARTINDO AF31 is a multi-function, non-toxic, and eco-friendly fire extinguisher for common fires and high-risk lithium-ion battery blazes. Protect your home, fleet, and loved ones with this specialized fire safety solution from FAST Indonesia.</p>
      <h2 style="color: #fff;">Key features</h2>
      <ul>
        <li>SNI Certified (Standar Nasional Indonesia)</li>
        <li>Fire Classes: A, B, D, F/K, &amp; L (Lithium)</li>
        <li>One tool for every emergency</li>
        <li>Lab-tested &amp; TKDN Certified</li>
        <li>Eco-friendly &amp; Non-toxic</li>
      </ul>
      <p><a href="${siteUrl}/catalog" style="color: #3898d4;">View full catalog</a> · <a href="https://www.tokopedia.com/famindofast" style="color: #3898d4;">Buy on Tokopedia</a></p>
    </main>
  `,
  productSchema: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Lithium Fire Killer HARTINDO AF31",
    alternateName: ["LFK", "Lithium Fire Killer AF31", "HARTINDO AF31"],
    image: `${siteUrl}/products/lfk.avif`,
    description:
      "The world's first lithium fire extinguisher. SNI certified, eco-friendly, TKDN certified lithium-ion battery fire suppression by FAST Indonesia.",
    url: `${siteUrl}/catalog/lithium-fire-killer-hartindo-af31`,
    category: "Fire Extinguisher",
    brand: { "@type": "Brand", name: "HARTINDO" },
    manufacturer: {
      "@type": "Organization",
      name: "PT. Famindo Alfa Spektrum Teknologi (FAST)",
      url: siteUrl,
    },
    slogan: "The First Lithium Fire Extinguisher In The World",
    keywords: "lithium fire killer, lithium fire extinguisher, HARTINDO AF31",
  },
};

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSeoHead(page) {
  const canonical = `${siteUrl}/${page.routePath}`;
  return `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="keywords" content="${escapeHtml(page.keywords)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="product" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:site_name" content="FAST | PT. Famindo Alfa Spektrum Teknologi" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${page.image}" />
    <script type="application/ld+json">${JSON.stringify(page.productSchema)}</script>
  `;
}

function prerenderPage(baseHtml, page) {
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/gi, "");
  html = html.replace(/<meta\s+name="title"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="keywords"[^>]*>/gi, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<meta\s+(name|property)="twitter:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

  html = html.replace(
    "</head>",
    `${buildSeoHead(page)}\n  </head>`
  );

  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${page.bodyHtml}</div>`
  );

  html = html.replace(
    /<html lang="[^"]*">/,
    '<html lang="en">'
  );

  return html;
}

const indexPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("prerender-seo-pages: dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, "utf-8");
const page = LFK_PAGE;
const outDir = path.join(distDir, page.routePath);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), prerenderPage(baseHtml, page), "utf-8");
console.log(`prerender-seo-pages: wrote ${siteUrl}/${page.routePath}`);
