import { Activity, ShieldCheck, Flame } from 'lucide-react';

export interface ProductVariant {
  id: string;
  name?: string;
  weight?: string;
  desc?: string;
  images?: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
}

export interface ProductPartner {
  name: string;
  logo: string;
  locations?: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  description: string;
  tagline?: string;
  brochureUrl?: string;
  tokopediaUrl?: string; // <-- Tambahkan properti ini
  image: string;
  features?: string[];
  variants?: ProductVariant[];
  partners?: ProductPartner[];
}

export const categories = [
  {
    id: 'predictive',
    slug: 'predictive',
    name: 'Predictive',
    description: 'Sophisticated battery monitoring system to detect anomalies on lithium-ion battery cells with an Internet of Things (IoT) system.',
    icon: Activity
  },
  {
    id: 'preventive',
    slug: 'preventive',
    name: 'Preventive',
    description: 'Patented gel-based materials, anti-fire liquid coatings, and protective fire blankets to reinforce passive security and isolate fire.',
    icon: ShieldCheck
  },
  {
    id: 'protective',
    slug: 'protective',
    name: 'Protective',
    description: 'The world\'s first lithium fire extinguisher, advanced liquid gas FLAT AF11E, and specialized suppression systems for maximum active protection.',
    icon: Flame
  }
];

export const products: Product[] = [
  {
    id: 'ballistic-app',
    slug: 'ballistic-app',
    brochureUrl: '/brochures/ballistic-brochure.pdf',
    title: 'BALLISTIC (Battery Life Diagnostic)',
    tagline: 'Battery Life Diagnostic System',
    categoryId: 'predictive',
    description: 'BALLISTIC is an IoT (Internet of Things) and Machine Learning application designed to detect lithium battery temperature anomalies in real-time. Trusted by PLN as a Battery Monitoring Center (BMC) for large portable UPS/Power Banks across data centers.',
    image: '/products/ballistic-for-ups.png',
    features: [
      "Real-time battery temperature monitoring",
      "Smart early warning notifications",
      "Machine Learning anomaly detection",
      "Trusted by National Electric Company (PLN)"
    ],
    variants: [
      { id: 'b1', name: "BALLISTIC for EV", desc: "Dedicated integrated monitoring for electric vehicle users." },
      { id: 'b2', name: "BALLISTIC Enterprise BMC", desc: "Centralized monitoring system for modern Data Centers and utility providers." }
    ]
  },
  {
    id: 'power-tech-shield-fire-blanket',
    slug: 'power-tech-shield-fire-blanket',
    brochureUrl: '/brochures/powertechshield-brochure.pdf',
    title: 'Power Tech Shield - Fire Blanket',
    tagline: 'The Heavy-Duty Armor Built to Withstand the Extreme',
    categoryId: 'preventive',
    description: 'A specialized safety blanket designed to isolate and prevent fire spread by cutting off the oxygen supply. The ultimate heavy-duty armor for electric vehicles, garages, and parking areas.',
    image: '/products/fire-blanket.png',
    features: [
      "Heat resistant up to 1600°C",
      "Withstands 1100°C for up to 50 hours",
      "Reusable 6-7 times (if exposed to 300°C - 400°C)",
      "ASTM Tested & Certified"
    ],
    variants: [
      { id: 'fb1', weight: '9 x 6 Meter (37 KG)', name: "Large Vehicle Shield", desc: "Ideal for SUVs and large electric vehicles." },
      { id: 'fb2', weight: '4 x 4 Meter (11 KG)', name: "Standard Shield", desc: "Compact sizes for smaller vehicles and localized fires." },
      { id: 'fb3', weight: '2 x 2 Meter (3 KG)', name: "Compact Shield", desc: "For extremely localized use." }
    ]
  },
  {
    id: 'altex-alpha-tech-shield',
    slug: 'altex-alpha-tech-shield',
    brochureUrl: "/brochures/altex-brochure.pdf",
    title: 'ALTEX ALPHA TECH SHIELD',
    tagline: 'Indoor Anti-Fire Coating with Thermafrost Technology',
    categoryId: 'preventive',
    description: 'A high-performance indoor anti-fire coating designed to protect your valuable assets. It works by reflecting heat and forming a dense char barrier to isolate the building structure, giving you critical extra time during emergencies.',
    image: '/products/altex.png',
    features: [
      "Withstands extreme heat up to 1300°C",
      "Provides 3 hours of fire resistance duration",
      "Thermafrost Char Barrier Technology",
      "100% Non-Toxic (Carcinogen & VOC free)",
      "Applied via airless spray gun (3-hour drying)"
    ],
    variants: [
      { id: 'a1', name: "Altex End-to-End Service", desc: "Includes free consultation, site survey, and precise application by trained experts." }
    ]
  },
  {
    id: 'g-tech-defend',
    slug: 'g-tech-defend',
    brochureUrl: '/brochures/gtech-brochure.pdf',
    title: 'G-TECH',
    tagline: 'Passive Gel Technology Fire Suppression',
    categoryId: 'preventive',
    description: 'Passive fire damper based on advanced Gel technology to secure Lithium batteries. It works by absorbing heat, forming a cooling coating, and preventing re-ignition. DEFEND products are lifestyle containers integrated with G-Tech, perfect for placing directly over lithium battery compartments.',
    image: '/products/g-tech.png',
    features: [
      "Advanced heat absorption capabilities",
      "Forms a proactive cooling coating",
      "Prevents thermal runaway re-ignition",
      "Integrates seamlessly into daily lifestyle products"
    ],
    variants: [
      { id: 'g1', name: "DEFEND Pouch & Battery Bag", desc: "Everyday carry solutions integrated with G-Tech for personal electronics." },
      { id: 'g2', name: "DEFEND Battery Blanket", desc: "Targeted protection for medium-sized lithium battery packs." }
    ]
  },
  {
    id: 'lithium-fire-killer-hartindo-af31',
    brochureUrl: "/brochures/lfk-brochure.pdf",
    tokopediaUrl: "https://www.tokopedia.com/famindofast", // <-- Link Tokopedia
    slug: 'lithium-fire-killer-hartindo-af31',
    title: 'Lithium Fire Killer HARTINDO AF31',
    tagline: 'The First Lithium Fire Extinguisher In The World',
    categoryId: 'protective',
    description: 'A multi-function, eco-friendly extinguisher that handles it all. From common paper fires to high-stakes lithium battery blazes. Protect your home, your fleet, and your life with our specialized fire safety solutions.',
    image: '/products/lfk.png',
    features: [
      "SNI Certified (Standar Nasional Indonesia)",
      "Fire Classes: A, B, D, F/K, & L (Lithium)",
      "One tool for every emergency",
      "Lab-tested & TKDN Certified",
      "Eco-friendly & Non-toxic"
    ],
    partners: [
      {
        name: "Azko",
        logo: "/partners/azko.png",
        locations: ["Gandaria City", "Kota Kasablanka", "Mall Artha Gading", "Living World Alam Sutera", "Q-Big BSD"]
      },
      {
        name: "Motovillage",
        logo: "/partners/motovillage.png",
        locations: ["Moto Village Kemang"]
      },
      {
        name: "Blackstone",
        logo: "/partners/blackstone.png",
        locations: ["Blackstone Garage Kebayoran"]
      },
      {
        name: "Jaecoo Andalan",
        logo: "/partners/jaecoo.png",
        locations: ["Jaecoo Andalan Mampang"]
      },
    ],
    variants: [
      {
        id: 'v1',
        weight: '1kg (Portable)',
        name: "LFK AF31 Portable - 1 KG",
        desc: "Lightweight suppression cylinder ideal for personal electric vehicles and compact areas.",
        images: {
          front: "/products/LFK/LFK_1_KG_[Font].png",
          back: "/products/LFK/LFK_1_KG_[Back].png",
          left: "/products/LFK/LFK_1_KG_[Left].png",
          right: "/products/LFK/LFK_1_KG_[Right].png"
        }
      },
      {
        id: 'v2',
        weight: '3kg (Portable)',
        name: "LFK AF31 Portable - 3 KG",
        desc: "Versatile cylinder for standard EV garages, server rooms, and commercial spaces.",
        images: {
          front: "/products/LFK/LFK_3_KG_[Font].png",
          back: "/products/LFK/LFK_3_KG_[Back].png",
          left: "/products/LFK/LFK_3_KG_[Left].png",
          right: "/products/LFK/LFK_3_KG_[Right].png"
        }
      },
      {
        id: 'v3',
        weight: '6kg (Portable)',
        name: "LFK AF31 Portable - 6 KG",
        desc: "High-capacity portable unit for industrial facilities and larger scale protection.",
        images: {
          front: "/products/LFK/LFK_6_KG_[Font].png",
          back: "/products/LFK/LFK_6_KG_[Back].png",
          left: "/products/LFK/LFK_6_KG_[Left].png",
          right: "/products/LFK/LFK_6_KG_[Right].png"
        }
      },
      {
        id: 'v4',
        weight: '25kg (Trolley)',
        name: "LFK AF31 Trolley - 25 KG",
        desc: "Heavy-duty mobility solution for mining sites, large warehouses, and EV charging stations.",
        images: {
          front: "/products/LFK/LFK_25_KG_[Font].png",
          back: "/products/LFK/LFK_25_KG_[Back].png",
          left: "/products/LFK/LFK_25_KG_[Left].png",
          right: "/products/LFK/LFK_25_KG_[Right].png"
        }
      },
      {
        id: 'v5',
        weight: '50kg (Trolley)',
        name: "LFK AF31 Trolley - 50 KG",
        desc: "Maximum capacity suppression system for extreme industrial environments and massive battery banks.",
        images: {
          front: "/products/LFK/LFK_50_KG_[Font].png",
          back: "/products/LFK/LFK_50_KG_[Back].png",
          left: "/products/LFK/LFK_50_KG_[Left].png",
          right: "/products/LFK/LFK_50_KG_[Right].png"
        }
      }
    ]
  },
  {
    id: 'flat-af11e',
    slug: 'flat-af11e',
    brochureUrl: '/brochures/flat-brochure.pdf',
    title: 'FLAT Flame Accurate Termination (AF11E)',
    tagline: 'Advanced Clean Liquefied Gas Extinguisher (AF11E)',
    categoryId: 'protective',
    description: 'Clean liquefied gas fire extinguishing media (HCFC 123 blend). The perfect Halon alternative without harmful environmental side effects. It leaves no residue, has low environmental impact, and is non-conductive, making it highly suitable for critical areas like Hospitals, Panel Rooms, Data Centers, and Military bases.',
    image: '/products/flat.avif',
    features: [
      "Leaves zero residue after discharge",
      "Safe for human respiration during accidental discharge",
      "Non-conductive, perfect for electrical fires",
      "Suitable for Fire Classes A, B, and C"
    ],
    variants: [
      { id: 'f1', weight: '3kg (CA 1130-F)', name: "CA 1130-F", desc: "Red cylinder finish with 14-16 Bar working pressure. 10m discharge range." },
      { id: 'f2', weight: '6kg (CA 1160-F)', name: "CA 1160-F", desc: "Silver cylinder finish with 14-16 Bar working pressure. 10m discharge range." }
    ]
  },
  {
    id: 'uss-undercarriage',
    slug: 'uss-undercarriage',
    brochureUrl: '/brochures/uss-brochure.pdf',
    title: 'Undercarriage Suppression System (USS)',
    tagline: 'Specialized Extinguisher Extension for EV Bottom Fires',
    categoryId: 'protective',
    description: 'A portable fire extinguisher extension device specifically designed to tackle fires in electric vehicles where the battery is located underneath the chassis. Developed in collaboration with Pindad Indonesia for maximum deployment safety.',
    image: '/products/uss.png',
    features: [
      "High-pressure Jet Spray & Fine Mist modes",
      "Spear extension for safe undercarriage insertion",
      "Hose connection to large 25KG-50KG APAR units",
      "Engineered with Pindad Indonesia"
    ],
    variants: [
      { id: 'u1', name: "USS Deployment Kit", desc: "Complete nozzle and spear extension kit for emergency EV response teams." }
    ]
  },
  {
    id: 'x-cap',
    slug: 'x-cap',
    brochureUrl: '/brochures/X-CAP-A5-Flyer-brochure.pdf',
    title: 'X-CAP',
    tagline: 'Advanced Rapid Extinguishing Solutions',
    categoryId: 'protective',
    description: 'Specialized fire suppression tools designed for rapid deployment and maximum efficiency in critical scenarios. Ensures that emergency exits and escape routes are quickly secured.',
    image: '/products/xcap.png',
    features: [
      "Rapid deployment mechanism",
      "High-efficiency suppression",
      "Compact and reliable"
    ],
    variants: [
      { id: 'xc1', name: "X-CAP Standard", desc: "Standard deployment unit for rapid suppression." }
    ]
  }
];