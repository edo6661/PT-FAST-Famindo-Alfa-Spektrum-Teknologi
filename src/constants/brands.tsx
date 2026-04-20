import { Cpu, ShieldAlert, Layers, Flame, Car } from "lucide-react";

// 1. Tambahkan tipe 'images' pada interface BrandProduct
export interface BrandProduct {
  name: string;
  desc: string;
  images?: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
}

export interface BrandData {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: string[];
  products: BrandProduct[];
  brochureUrl?: string;
}

export const brands: Record<string, BrandData> = {
  "lithium-fire-killer-hartindo-af31": {
    name: "Lithium Fire Killer HARTINDO AF31",
    tagline: "The First Lithium Fire Extinguisher In The World",
    description: "A multi-function, eco-friendly extinguisher that handles it all. From common paper fires to high-stakes lithium battery blazes. Protect your home, your fleet, and your life with our specialized fire safety solutions.",
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Fire Classes: A, B, D, F/K, & L (Lithium)",
      "One tool for every emergency",
      "Lab-tested & TKDN Certified",
      "Eco-friendly & Non-toxic"
    ],
    // 2. Perbarui list products (varian) dengan memasukkan path gambar yang baru Anda upload
    products: [
      {
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
        name: "LFK AF31 Trolley - 50 KG",
        desc: "Maximum capacity suppression system for extreme industrial environments and massive battery banks.",
        images: {
          front: "/products/LFK/LFK_50_KG_[Font].png",
          back: "/products/LFK/LFK_50_KG_[Back].png",
          left: "/products/LFK/LFK_50_KG_[Left].png",
          right: "/products/LFK/LFK_50_KG_[Right].png"
        }
      }
    ],
    brochureUrl: "/brochures/lfk-brochure.pdf"
  },

  "altex-alpha-tech-shield": {
    name: "ALTEX ALPHA TECH SHIELD",
    tagline: "Indoor Anti-Fire Coating with Thermafrost Technology",
    description: "A high-performance indoor anti-fire coating designed to protect your valuable assets. It works by reflecting heat and forming a dense char barrier to isolate the building structure, giving you critical extra time during emergencies.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Withstands extreme heat up to 1300°C",
      "Provides 3 hours of fire resistance duration",
      "Thermafrost Char Barrier Technology",
      "100% Non-Toxic (Carcinogen & VOC free)",
      "Applied via airless spray gun (3-hour drying)"
    ],
    products: [
      { name: "Altex End-to-End Service", desc: "Includes free consultation, site survey, and precise application by trained experts." }
    ],
    brochureUrl: "/brochures/altex-brochure.pdf"
  },

  "power-tech-shield-fire-blanket": {
    name: "Power Tech Shield - Fire Blanket",
    tagline: "The Heavy-Duty Armor Built to Withstand the Extreme",
    description: "A specialized safety blanket designed to isolate and prevent fire spread by cutting off the oxygen supply. The ultimate heavy-duty armor for electric vehicles, garages, and parking areas.",
    heroImage: "https://images.unsplash.com/photo-1620325867502-2211b5f70f6f?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Heat resistant up to 1600°C",
      "Withstands 1100°C for up to 50 hours",
      "Reusable 6-7 times (if exposed to 300°C - 400°C)",
      "ASTM Tested & Certified"
    ],
    products: [
      { name: "Large Vehicle Shield", desc: "Ideal for SUVs and large electric vehicles." },
      { name: "Standard Shield", desc: "Compact sizes for smaller vehicles and localized fires." }
    ]
  },

  "ballistic-app": {
    name: "BALLISTIC App",
    tagline: "Battery Life Diagnostic System",
    description: "BALLISTIC is an IoT (Internet of Things) and Machine Learning application designed to detect lithium battery temperature anomalies in real-time. Trusted by PLN as a Battery Monitoring Center (BMC) for large portable UPS/Power Banks across data centers.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Real-time battery temperature monitoring",
      "Smart early warning notifications",
      "Machine Learning anomaly detection",
      "Trusted by National Electric Company (PLN)"
    ],
    products: [
      { name: "BALLISTIC for EV", desc: "Dedicated integrated monitoring for electric vehicle users." },
      { name: "BALLISTIC Enterprise BMC", desc: "Centralized monitoring system for modern Data Centers and utility providers." }
    ]
  },

  "flat-af11e": {
    name: "FLAT Flame Accurate Termination",
    tagline: "Advanced Clean Liquefied Gas Extinguisher (AF11E)",
    description: "Clean liquefied gas fire extinguishing media (HCFC 123 blend). The perfect Halon alternative without harmful environmental side effects. It leaves no residue, has low environmental impact, and is non-conductive, making it highly suitable for critical areas like Hospitals, Panel Rooms, Data Centers, and Military bases.",
    heroImage: "https://images.unsplash.com/photo-1485575301924-6891ebbfaf88?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Leaves zero residue after discharge",
      "Safe for human respiration during accidental discharge",
      "Non-conductive, perfect for electrical fires",
      "Suitable for Fire Classes A, B, and C"
    ],
    products: [
      { name: "CA 1130-F (3 KG)", desc: "Red cylinder finish with 14-16 Bar working pressure. 10m discharge range." },
      { name: "CA 1160-F (6 KG)", desc: "Silver cylinder finish with 14-16 Bar working pressure. 10m discharge range." }
    ]
  },

  "uss-undercarriage": {
    name: "Undercarriage Suppression System (USS)",
    tagline: "Specialized Extinguisher Extension for EV Bottom Fires",
    description: "A portable fire extinguisher extension device specifically designed to tackle fires in electric vehicles where the battery is located underneath the chassis. Developed in collaboration with Pindad Indonesia for maximum deployment safety.",
    heroImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000&auto=format&fit=crop",
    features: [
      "High-pressure Jet Spray & Fine Mist modes",
      "Spear extension for safe undercarriage insertion",
      "Hose connection to large 25KG-50KG APAR units",
      "Engineered with Pindad Indonesia"
    ],
    products: [
      { name: "USS Deployment Kit", desc: "Complete nozzle and spear extension kit for emergency EV response teams." }
    ]
  },

  "g-tech-defend": {
    name: "G-TECH & DEFEND",
    tagline: "Passive Gel Technology Fire Suppression",
    description: "Passive fire damper based on advanced Gel technology to secure Lithium batteries. It works by absorbing heat, forming a cooling coating, and preventing re-ignition. DEFEND products are lifestyle containers integrated with G-Tech, perfect for placing directly over lithium battery compartments.",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Advanced heat absorption capabilities",
      "Forms a proactive cooling coating",
      "Prevents thermal runaway re-ignition",
      "Integrates seamlessly into daily lifestyle products"
    ],
    products: [
      { name: "DEFEND Pouch & Battery Bag", desc: "Everyday carry solutions integrated with G-Tech for personal electronics." },
      { name: "DEFEND Battery Blanket", desc: "Targeted protection for medium-sized lithium battery packs." }
    ]
  }
};

export const mainBrands = [
  {
    name: "Lithium Fire Killer HARTINDO AF31",
    slug: "lithium-fire-killer-hartindo-af31",
    description: "The ultimate 100% Indonesian patented solution for lithium-ion battery fire hazards. Eco-friendly and TKDN certified.",
    logo: "AF31",
    icon: <ShieldAlert size={32} className="text-accent" />,
    gridClass: "md:col-span-2 md:row-span-2",
    bgImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "BALLISTIC App",
    slug: "ballistic-app",
    description: "IoT and Machine Learning application to detect lithium battery temperature anomalies in real-time.",
    logo: "APP",
    icon: <Cpu size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "ALTEX ALPHA TECH SHIELD",
    slug: "altex-alpha-tech-shield",
    description: "Epoxy Fire Coating based anti-fire liquid that prevents any material from catching and spreading fire.",
    logo: "ALTEX",
    icon: <Layers size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Power Tech Shield - Fire Blanket",
    slug: "power-tech-shield-fire-blanket",
    description: "Heavy duty thermal isolation blanket resistant up to 1600°C to cut off oxygen supply instantly.",
    logo: "SHIELD",
    icon: <ShieldAlert size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1620325867502-2211b5f70f6f?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "FLAT Flame Accurate Termination",
    slug: "flat-af11e",
    description: "Clean liquefied gas fire extinguishing media. The perfect Halon alternative leaving zero residue.",
    logo: "FLAT",
    icon: <Flame size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1485575301924-6891ebbfaf88?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "USS Undercarriage System",
    slug: "uss-undercarriage",
    description: "Specialized portable fire extinguisher extension device for EV undercarriage fires.",
    logo: "USS",
    icon: <Car size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop"
  }
];