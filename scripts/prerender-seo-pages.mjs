/**
 * Post-build: emit static index.html for SEO-critical routes so crawlers
 * receive full meta tags and visible content without executing JavaScript.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { prerenderPages, siteUrl, LFK_SLUG } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildBreadcrumbNav(page) {
  if (!page.breadcrumbs || page.breadcrumbs.length === 0) return "";
  const trail = page.breadcrumbs;
  const links = trail
    .map((crumb, i) => {
      const isLast = i === trail.length - 1;
      const url = crumb.path ? `${siteUrl}/${crumb.path}` : `${siteUrl}/`;
      const sep = i > 0 ? '<span style="color:#475569;"> / </span>' : "";
      if (isLast) {
        return `${sep}<span style="color:#94a3b8;">${escapeHtml(crumb.name)}</span>`;
      }
      return `${sep}<a href="${url}" style="color: #3898d4;">${escapeHtml(crumb.name)}</a>`;
    })
    .join("");
  return `<nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem;">${links}</nav>`;
}

function buildFeaturesHtml(page) {
  if (!page.features || page.features.length === 0) return "";
  const items = page.features
    .map((f) => `<li>${escapeHtml(f)}</li>`)
    .join("\n        ");
  return `
      <h2 style="color:#fff; font-size:1.25rem;">Key Features</h2>
      <ul>
        ${items}
      </ul>`;
}

function buildFaqHtml(page) {
  if (!page.faqs || page.faqs.length === 0) return "";
  const items = page.faqs
    .map(
      (f) =>
        `<div><h3 style="color:#fff; font-size:1rem;">${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p></div>`,
    )
    .join("\n      ");
  return `
      <h2 style="color:#fff; font-size:1.25rem;">Frequently Asked Questions</h2>
      ${items}`;
}

function buildRelatedHtml(page) {
  if (!page.related || page.related.length === 0) return "";
  const links = page.related
    .map(
      (r) =>
        `<li><a href="${siteUrl}/${r.path}" style="color:#3898d4;">${escapeHtml(r.name)}</a></li>`,
    )
    .join("\n        ");
  return `
      <h2 style="color:#fff; font-size:1.25rem;">Explore More</h2>
      <ul>
        ${links}
      </ul>`;
}

function buildBodyHtml(page) {
  return `
    <main style="font-family: system-ui, sans-serif; max-width: 48rem; margin: 0 auto; padding: 2rem; line-height: 1.6; color: #e2e8f0; background: #0a192f;">
      ${buildBreadcrumbNav(page)}
      <h1 style="color: #fff; font-size: 2rem;">${escapeHtml(page.h1)}</h1>
      <p style="color: #3898d4; font-size: 1.25rem;">${escapeHtml(page.subtitle)}</p>
      <p>${escapeHtml(page.body)}</p>
      ${buildFeaturesHtml(page)}
      ${buildFaqHtml(page)}
      ${buildRelatedHtml(page)}
      <p>
        <a href="${siteUrl}/catalog" style="color: #3898d4;">View catalog</a> ·
        <a href="${siteUrl}/about" style="color: #3898d4;">About us</a> ·
        <a href="${siteUrl}/clients" style="color: #3898d4;">Our clients</a> ·
        <a href="${siteUrl}/blogs" style="color: #3898d4;">Blog</a> ·
        <a href="${siteUrl}/${LFK_SLUG}" style="color: #3898d4;">Lithium Fire Killer AF31</a>
      </p>
    </main>
  `;
}

function buildSeoHead(page) {
  const canonical = `${siteUrl}/${page.routePath}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    name: page.h1,
    description: page.description,
    url: canonical,
    ...(page.schemaType === "Product" && {
      brand: { "@type": "Brand", name: "HARTINDO" },
      manufacturer: {
        "@type": "Organization",
        name: "PT. Famindo Alfa Spektrum Teknologi (FAST)",
        url: siteUrl,
      },
    }),
    ...(page.schemaType === "Blog" && {
      publisher: {
        "@type": "Organization",
        name: "PT. Famindo Alfa Spektrum Teknologi (FAST)",
      },
    }),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.description,
    url: canonical,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "famindofast.com", url: siteUrl },
  };

  const schemaList = [schema, webPageSchema];

  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: page.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.path ? `${siteUrl}/${crumb.path}` : `${siteUrl}/`,
      })),
    });
  }

  if (page.faqs && page.faqs.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const schemas = schemaList
    .map(
      (s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`,
    )
    .join("\n    ");

  return `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    ${page.keywords ? `<meta name="keywords" content="${escapeHtml(page.keywords)}" />` : ""}
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:site_name" content="FAST | PT. Famindo Alfa Spektrum Teknologi" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${page.image}" />
    ${schemas}
  `;
}

function prerenderPage(baseHtml, page) {
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/gi, "");
  html = html.replace(/<meta\s+name="title"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="keywords"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<meta\s+(name|property)="twitter:[^"]+"[^>]*>/gi, "");
  html = html.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
    "",
  );

  html = html.replace("</head>", `${buildSeoHead(page)}\n  </head>`);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${buildBodyHtml(page)}</div>`,
  );
  html = html.replace(/<html lang="[^"]*">/, '<html lang="en">');

  return html;
}

const indexPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error(
    "prerender-seo-pages: dist/index.html not found. Run vite build first.",
  );
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, "utf-8");

for (const page of prerenderPages) {
  const outPath =
    page.routePath === ""
      ? indexPath
      : path.join(distDir, page.routePath, "index.html");

  if (page.routePath !== "") {
    fs.mkdirSync(path.join(distDir, page.routePath), { recursive: true });
  }

  fs.writeFileSync(outPath, prerenderPage(baseHtml, page), "utf-8");
  console.log(
    `prerender-seo-pages: wrote ${page.routePath === "" ? siteUrl + "/" : `${siteUrl}/${page.routePath}`}`,
  );
}
