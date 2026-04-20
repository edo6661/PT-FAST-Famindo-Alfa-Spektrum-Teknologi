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

export const products = [
  {
    id: 'ballistic-app',
    slug: 'ballistic-app',
    title: 'BALLISTIC (Battery Life Diagnostic)',
    categoryId: 'predictive',
    description: 'IoT and Machine Learning application to detect lithium battery temperature anomalies in real-time, sending early warnings to secure tech assets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    variants: []
  },

  {
    id: 'power-tech-shield-fire-blanket',
    slug: 'power-tech-shield-fire-blanket',
    title: 'Power Tech Shield - Fire Blanket',
    categoryId: 'preventive',
    description: 'Thermal isolation blanket to prevent fire spread by cutting off oxygen supply. Heat resistant up to 1600°C. Ideal for EV garages and ferries.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    variants: [
      { id: 'fb1', weight: '9 x 6 Meter (37 KG)' },
      { id: 'fb2', weight: '4 x 4 Meter (11 KG)' },
      { id: 'fb3', weight: '2 x 2 Meter (3 KG)' }
    ]
  },
  {
    id: 'altex-alpha-tech-shield',
    slug: 'altex-alpha-tech-shield',
    title: 'ALTEX ALPHA TECH SHIELD',
    categoryId: 'preventive',
    description: 'Epoxy Fire Coating based anti-fire liquid that prevents material ignition. Safe, non-toxic, and creates a solid char barrier.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
    variants: []
  },
  {
    id: 'g-tech-defend',
    slug: 'g-tech-defend',
    title: 'G-TECH & DEFEND (Gel Technology)',
    categoryId: 'preventive',
    description: 'Passive fire suppression using advanced Gel technology to secure Lithium batteries by absorbing heat and preventing re-ignition.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
    variants: []
  },

  {
    id: 'lithium-fire-killer-hartindo-af31',
    slug: 'lithium-fire-killer-hartindo-af31',
    title: 'Lithium Fire Killer HARTINDO AF31',
    tagline: 'The First Lithium Fire Extinguisher In The World',
    categoryId: 'protective',
    description: 'A multi-function, eco-friendly extinguisher that handles it all. From common paper fires to high-stakes lithium battery blazes. Protect your home, your fleet, and your life with our specialized fire safety solutions.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop',
    features: [
      "SNI Certified (Standar Nasional Indonesia)", // Sertifikat SNI ditambahkan
      "Fire Classes: A, B, D, F/K, & L (Lithium)",
      "Lab-tested & TKDN Certified (49.31%)",
      "Eco-friendly & Non-toxic",
      "One tool for every emergency"
    ],
    variants: [
      {
        id: 'v1',
        name: "LFK AF31 Portable - 1 KG",
        weight: '1kg (Portable)',
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
        name: "LFK AF31 Portable - 3 KG",
        weight: '3kg (Portable)',
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
        name: "LFK AF31 Portable - 6 KG",
        weight: '6kg (Portable)',
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
        name: "LFK AF31 Trolley - 25 KG",
        weight: '25kg (Trolley)',
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
        name: "LFK AF31 Trolley - 50 KG",
        weight: '50kg (Trolley)',
        desc: "Maximum capacity suppression system for extreme industrial environments and massive battery banks.",
        images: {
          front: "/products/LFK/LFK_50_KG_[Font].png",
          back: "/products/LFK/LFK_50_KG_[Back].png",
          left: "/products/LFK/LFK_50_KG_[Left].png",
          right: "/products/LFK/LFK_50_KG_[Right].png"
        }
      }
    ],
    partners: [
      { name: "Azko", logo: "/partners/azko.png" },
      { name: "Motovillage", logo: "/partners/motovillage.png" },
      { name: "Blackstone", logo: "/partners/blackstone.png" } // Asumsi path
    ]
  },
  {
    id: 'flat-af11e',
    slug: 'flat-af11e',
    title: 'FLAT Flame Accurate Termination (AF11E)',
    categoryId: 'protective',
    description: 'Clean liquefied gas fire extinguishing media (HCFC 123 blend). A Halon alternative leaving no residue, perfect for hospitals, data centers, and military.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop',
    variants: [
      { id: 'f1', weight: '3kg (CA 1130-F)' },
      { id: 'f2', weight: '6kg (CA 1160-F)' }
    ]
  },
  {
    id: 'uss-undercarriage',
    slug: 'uss-undercarriage',
    title: 'Undercarriage Suppression System (USS)',
    categoryId: 'protective',
    description: 'Specialized portable fire extinguisher extension designed to tackle electric vehicle undercarriage fires with high-pressure jet/mist nozzles.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop',
    variants: []
  }
];