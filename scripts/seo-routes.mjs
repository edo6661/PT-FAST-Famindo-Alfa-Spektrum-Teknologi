/**
 * Shared SEO route definitions for sitemap generation and prerendering.
 */
export const siteUrl = "https://www.famindofast.com";

export const LFK_SLUG = "lithium-fire-killer-hartindo-af31";

export const catalogProductSlugs = [
  "ballistic-app",
  "power-tech-shield-fire-blanket",
  "altex-alpha-tech-shield",
  "g-tech-defend",
  "flat-af11e",
  "uss-undercarriage",
  "x-cap",
];

export const categorySlugs = ["predictive", "preventive", "protective"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function slugToTitle(slug) {
  const titles = {
    "ballistic-app": "BALLISTIC (Battery Life Alert Diagnostic)",
    "power-tech-shield-fire-blanket": "Power Tech Shield Fire Blanket",
    "altex-alpha-tech-shield": "ALTEX ALPHA TECH SHIELD",
    "g-tech-defend": "G-TECH Passive Gel Fire Suppression",
    "flat-af11e": "FLAT AF11E Clean Agent Fire Extinguisher",
    "uss-undercarriage": "Undercarriage Suppression System (USS)",
    "x-cap": "X-CAP Emergency Escape Breathing Apparatus",
  };
  return titles[slug] || slug.replace(/-/g, " ");
}

const productDescriptions = {
  "ballistic-app":
    "BALLISTIC is an IoT and Machine Learning application designed to detect lithium battery temperature anomalies in real-time. Trusted by PLN as a Battery Monitoring Center.",
  "power-tech-shield-fire-blanket":
    "A specialized safety blanket designed to isolate and prevent fire spread by cutting off the oxygen supply. Heat resistant up to 1600°C.",
  "altex-alpha-tech-shield":
    "High-performance indoor anti-fire coating with Thermafrost Technology. Withstands extreme heat up to 1300°C with up to 3 hours of fire resistance.",
  "g-tech-defend":
    "Patented gel technology that acts as a passive fire suppressant when lithium batteries ignite, absorbing heat and preventing re-ignition.",
  "flat-af11e":
    "FLAT AF11E is a clean liquefied gas fire extinguisher (HCFC 123 blend) — a residue-free, non-conductive Halon alternative ideal for hospitals, panel rooms, and data centers.",
  "uss-undercarriage":
    "The Undercarriage Suppression System (USS) is a portable extinguisher extension engineered with Pindad Indonesia to tackle electric vehicle battery fires located beneath the chassis.",
  "x-cap":
    "X-CAP is a CCC-certified emergency escape breathing apparatus engineered for rapid deployment, protecting your airway while you reach safety during a fire hazard.",
};

const productImages = {
  "ballistic-app": "/products/ballistic-for-ups.avif",
  "power-tech-shield-fire-blanket": "/products/fire-blanket.avif",
  "altex-alpha-tech-shield": "/products/altex.avif",
  "g-tech-defend": "/products/g-tech.avif",
  "flat-af11e": "/products/flat.avif",
  "uss-undercarriage": "/products/uss.avif",
  "x-cap": "/products/xcap.avif",
};

const productCategory = {
  "ballistic-app": "predictive",
  "power-tech-shield-fire-blanket": "preventive",
  "altex-alpha-tech-shield": "preventive",
  "g-tech-defend": "preventive",
  "flat-af11e": "protective",
  "uss-undercarriage": "protective",
  "x-cap": "protective",
};

const productFeatures = {
  "ballistic-app": [
    "Real-time battery temperature monitoring",
    "Smart early warning notifications",
    "Machine Learning anomaly detection",
    "Trusted by the National Electric Company (PLN)",
  ],
  "power-tech-shield-fire-blanket": [
    "Heat resistant up to 1600°C",
    "Withstands 1100°C for up to 50 hours",
    "Reusable 6-7 times",
    "ASTM Tested & Certified",
  ],
  "altex-alpha-tech-shield": [
    "Withstands extreme heat up to 1300°C",
    "Up to 3 hours of fire resistance",
    "Thermafrost Barrier Technology",
    "100% Non-Toxic (Carcinogen & VOC free)",
  ],
  "g-tech-defend": [
    "Advanced heat absorption capabilities",
    "Forms a proactive cooling coating",
    "Prevents thermal runaway re-ignition",
    "Integrates into everyday lifestyle products",
  ],
  "flat-af11e": [
    "Leaves zero residue after discharge",
    "Safe for human respiration on accidental discharge",
    "Non-conductive, perfect for electrical fires",
    "Suitable for Fire Classes A, B, and C",
  ],
  "uss-undercarriage": [
    "High-pressure Jet Spray & Fine Mist modes",
    "Spear extension for safe undercarriage insertion",
    "Connects to 25 KG - 50 KG extinguisher units",
    "Engineered with Pindad Indonesia",
  ],
  "x-cap": [
    "Rapid deployment mechanism",
    "High-efficiency respiratory protection",
    "Compact and reliable",
    "CCC certified, valid for 3 years",
  ],
};

const lfkFeatures = [
  "SNI Certified (Standar Nasional Indonesia)",
  "Handles Fire Classes A, B, D, F/K & L (Lithium)",
  "One tool for every emergency",
  "Lab-tested & TKDN Certified",
  "Eco-friendly & Non-toxic",
];

const categoryNames = {
  predictive: "Predictive",
  preventive: "Preventive",
  protective: "Protective",
};

const categoryDescriptions = {
  predictive:
    "Sophisticated battery monitoring systems to detect anomalies on lithium-ion battery cells with IoT technology.",
  preventive:
    "Patented gel-based materials, anti-fire liquid coatings, and protective fire blankets to reinforce passive security.",
  protective:
    "Active fire suppression solutions including the world's first lithium fire extinguisher — Lithium Fire Killer HARTINDO AF31.",
};

const HOME_CRUMB = { name: "Home", path: "" };
const CATALOG_CRUMB = { name: "Catalog", path: "catalog" };

function categoryCrumb(catId) {
  return {
    name: `${categoryNames[catId]} Solutions`,
    path: `category/${catId}`,
  };
}

export const staticPages = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: `/${LFK_SLUG}`, priority: 1.0, changefreq: "weekly" },
  { path: "/catalog", priority: 0.9, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/clients", priority: 0.8, changefreq: "monthly" },
  { path: "/blogs", priority: 0.7, changefreq: "weekly" },
];

export const dynamicRoutes = [
  ...catalogProductSlugs.map((slug) => `/catalog/${slug}`),
  `/${LFK_SLUG}`,
  ...categorySlugs.map((slug) => `/category/${slug}`),
];

export const prerenderPages = [
  {
    routePath: "",
    title: "FAST | Lithium Fire Safety Solutions Indonesia",
    description:
      "FAST delivers advanced lithium fire safety — Lithium Fire Killer AF31, BALLISTIC battery monitoring, and industrial fire protection across Indonesia.",
    keywords:
      "lithium fire killer, LFK AF31, lithium fire safety, FAST Indonesia, fire extinguisher, battery fire protection",
    image: `${siteUrl}/fast-blue.png`,
    ogType: "website",
    h1: "Advanced Lithium Fire Safety Solutions",
    subtitle: "Every Second Matters — Securing Safety One At A Time",
    body: "PT. Famindo Alfa Spektrum Teknologi (FAST) is Indonesia's leading provider of advanced lithium-ion battery fire safety technology. Since 2022, we have protected high-profile government events, transportation fleets, and industrial facilities with predictive, preventive, and protective fire safety solutions. Our flagship product, Lithium Fire Killer HARTINDO AF31, is the world's first dedicated lithium fire extinguisher — SNI and TKDN certified, non-toxic, and effective against Class A, B, D, F/K, and Lithium (L) fires. FAST also offers BALLISTIC, an IoT and Machine Learning application for real-time battery temperature monitoring trusted by PLN; Power Tech Shield fire blankets rated to 1600°C; ALTEX ALPHA anti-fire coatings with up to 3 hours of fire resistance; G-TECH passive gel fire suppression; FLAT AF11E clean agent extinguishers; the Undercarriage Suppression System (USS) for electric vehicles; and X-CAP emergency escape breathing apparatus. We are headquartered at TCC Tower One Menara Batavia, Jakarta Pusat, and can be reached at +62 812 9000 3278 or support@famindofast.com.",
    schemaType: "WebPage",
    features: [
      "World's first lithium fire extinguisher — Lithium Fire Killer AF31",
      "Real-time battery monitoring with BALLISTIC IoT platform",
      "Predictive, preventive, and protective fire safety categories",
      "Trusted by Presidential Inauguration 2024, KTT IAF Bali, and Bluebird Group",
    ],
    related: [
      { name: "Lithium Fire Killer HARTINDO AF31", path: LFK_SLUG },
      { name: "Fire Safety Product Catalog", path: "catalog" },
      { name: "Predictive Solutions", path: "category/predictive" },
      { name: "Preventive Solutions", path: "category/preventive" },
      { name: "Protective Solutions", path: "category/protective" },
      { name: "About FAST", path: "about" },
      { name: "Our Client Base", path: "clients" },
      { name: "FAST Insights Blog", path: "blogs" },
      ...catalogProductSlugs.map((slug) => ({
        name: slugToTitle(slug),
        path: `catalog/${slug}`,
      })),
    ],
  },
  {
    routePath: LFK_SLUG,
    title:
      "Lithium Fire Killer HARTINDO AF31 | World's First Lithium Fire Extinguisher",
    description:
      "Lithium Fire Killer (LFK) HARTINDO AF31 — the world's first lithium fire extinguisher. SNI certified, eco-friendly, TKDN certified. Extinguishes Class A, B, D, F/K & Lithium battery fires.",
    keywords:
      "lithium fire killer, HARTINDO AF31, LFK AF31, lithium fire extinguisher, pemadam api baterai lithium, FAST Indonesia",
    image: `${siteUrl}/products/lfk.avif`,
    ogType: "product",
    h1: "Lithium Fire Killer HARTINDO AF31",
    subtitle: "The First Lithium Fire Extinguisher In The World",
    body: "Lithium Fire Killer (LFK) HARTINDO AF31 is the world's first dedicated lithium fire extinguisher — a multi-function, non-toxic, and eco-friendly fire safety solution for common fires and high-risk lithium-ion battery blazes. Available in portable 1kg, 3kg, 6kg cylinders and 25kg/50kg trolley units.",
    schemaType: "Product",
    breadcrumbs: [
      HOME_CRUMB,
      CATALOG_CRUMB,
      categoryCrumb("protective"),
      { name: "Lithium Fire Killer HARTINDO AF31", path: LFK_SLUG },
    ],
    features: lfkFeatures,
    faqs: [
      {
        q: "What is Lithium Fire Killer HARTINDO AF31?",
        a: "Lithium Fire Killer HARTINDO AF31 is the world's first dedicated lithium-ion battery fire extinguisher. It is SNI and TKDN certified, non-toxic, and eco-friendly, and extinguishes Class A, B, D, F/K and Lithium (L) fires.",
      },
      {
        q: "What fire classes can Lithium Fire Killer extinguish?",
        a: "It handles Class A (solids), B (flammable liquids), D (metals), F/K (cooking oils) and Class L lithium-ion battery fires with a single tool.",
      },
      {
        q: "What sizes are available?",
        a: "LFK AF31 is available in 1kg, 3kg, and 6kg portable cylinders, as well as 25kg and 50kg trolley units for industrial use.",
      },
    ],
  },
  {
    routePath: "catalog",
    title: "Fire Safety Product Catalog | FAST Indonesia",
    description:
      "Browse FAST's complete catalog of lithium fire safety solutions: Lithium Fire Killer, BALLISTIC battery monitoring, fire blankets, anti-fire coatings, and more.",
    keywords:
      "fire safety catalog, lithium fire products, FAST Indonesia, fire extinguisher catalog",
    image: `${siteUrl}/fast-blue.png`,
    ogType: "website",
    h1: "Fire Safety Product Catalog",
    subtitle: "Advanced Lithium Fire Safety Solutions",
    body: "Explore predictive, preventive, and protective fire safety technologies from PT. Famindo Alfa Spektrum Teknologi (FAST).",
    schemaType: "CollectionPage",
    breadcrumbs: [HOME_CRUMB, { name: "Catalog", path: "catalog" }],
    related: [
      ...categorySlugs.map((slug) => ({
        name: `${categoryNames[slug]} Solutions`,
        path: `category/${slug}`,
      })),
      { name: "Lithium Fire Killer HARTINDO AF31", path: LFK_SLUG },
      ...catalogProductSlugs.map((slug) => ({
        name: slugToTitle(slug),
        path: `catalog/${slug}`,
      })),
    ],
  },
  {
    routePath: "about",
    title: "About Us | FAST - PT. Famindo Alfa Spektrum Teknologi",
    description:
      "Learn about FAST (PT. Famindo Alfa Spektrum Teknologi) — Indonesia's leader in advanced lithium fire safety technology and industrial fire protection solutions.",
    keywords:
      "about FAST, Famindo Alfa Spektrum Teknologi, lithium fire safety company Indonesia",
    image: `${siteUrl}/fast-blue.png`,
    ogType: "website",
    h1: "About FAST",
    subtitle: "PT. Famindo Alfa Spektrum Teknologi",
    body: "Every second matters. FAST provides high-level advanced fire safety technology solutions to mitigate Lithium-ion battery risks and secure industrial facilities.",
    schemaType: "AboutPage",
    breadcrumbs: [HOME_CRUMB, { name: "About", path: "about" }],
  },
  {
    routePath: "clients",
    title: "Our Client Base | FAST Fire Safety",
    description:
      "Trusted by national institutions, international summits, and industry leaders. Explore organizations protected by FAST lithium fire safety technology.",
    keywords:
      "FAST clients, lithium fire safety clients, fire safety Indonesia",
    image: `${siteUrl}/fast-blue.png`,
    ogType: "website",
    h1: "Our Client Base",
    subtitle: "Strategic Deployments",
    body: "FAST is trusted by government institutions, transportation companies, and industry leaders across Indonesia.",
    schemaType: "WebPage",
    breadcrumbs: [HOME_CRUMB, { name: "Clients", path: "clients" }],
  },
  {
    routePath: "blogs",
    title: "FAST Insights Blog | Lithium Fire Safety News",
    description:
      "Read the latest insights on lithium battery fire safety, industry trends, and FAST product updates from PT. Famindo Alfa Spektrum Teknologi.",
    keywords:
      "lithium fire blog, battery fire safety, FAST insights, fire safety news",
    image: `${siteUrl}/fast-blue.png`,
    ogType: "website",
    h1: "FAST Insights",
    subtitle: "Lithium Fire Safety News & Articles",
    body: "Stay informed about lithium-ion battery fire risks, prevention strategies, and the latest fire safety innovations.",
    schemaType: "Blog",
    breadcrumbs: [HOME_CRUMB, { name: "Blog", path: "blogs" }],
  },
  ...catalogProductSlugs.map((slug) => ({
    routePath: `catalog/${slug}`,
    title: `${slugToTitle(slug)} | FAST Fire Safety`,
    description:
      productDescriptions[slug] ||
      `Learn about ${slugToTitle(slug)} from FAST Indonesia.`,
    keywords: `${slugToTitle(slug)}, FAST fire safety, lithium fire protection`,
    image: `${siteUrl}${productImages[slug] || "/fast-blue.png"}`,
    ogType: "product",
    h1: slugToTitle(slug),
    subtitle: "FAST Fire Safety Product",
    body: productDescriptions[slug] || "",
    schemaType: "Product",
    breadcrumbs: [
      HOME_CRUMB,
      CATALOG_CRUMB,
      categoryCrumb(productCategory[slug]),
      { name: slugToTitle(slug), path: `catalog/${slug}` },
    ],
    features: productFeatures[slug] || [],
  })),
  ...categorySlugs.map((slug) => ({
    routePath: `category/${slug}`,
    title: `${capitalize(slug)} Fire Safety Solutions | FAST`,
    description: categoryDescriptions[slug],
    keywords: `${slug} fire safety, FAST ${slug}, lithium fire protection`,
    image: `${siteUrl}/fast-blue.png`,
    ogType: "website",
    h1: `${capitalize(slug)} Solutions`,
    subtitle: "FAST Fire Safety Category",
    body: categoryDescriptions[slug],
    schemaType: "CollectionPage",
    breadcrumbs: [HOME_CRUMB, CATALOG_CRUMB, categoryCrumb(slug)],
    related: catalogProductSlugs
      .filter((s) => productCategory[s] === slug)
      .map((s) => ({ name: slugToTitle(s), path: `catalog/${s}` }))
      .concat(
        slug === "protective"
          ? [{ name: "Lithium Fire Killer HARTINDO AF31", path: LFK_SLUG }]
          : [],
      ),
  })),
];
