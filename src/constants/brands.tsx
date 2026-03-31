export interface BrandProduct {
  name: string;
  desc: string;
}

export interface BrandData {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: string[];
  products: BrandProduct[];
}

export const brands: Record<string, BrandData> = {
  "hartindo-af31": {
    name: "Lithium Fire Killer Hartindo AF31",
    tagline: "The next level solution to face the rising risk of lithium-ion battery fire hazard.",
    description: "A revolutionary fire extinguisher specifically designed for lithium-ion batteries. Formulated to be non-toxic, non-ozone depleting, PFAS-free (eliminating cancer risks), and complies with TKDN standards (49.31%). LFK AF31 is the ultimate choice for EV and mining fire mitigation, while also highly effective at preventing re-ignition in forest fires.",
    heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Eco-Friendly & PFAS-Free (Eurofins Certified)",
      "Passed National Standard TKDN Test (49.31%)",
      "Global Certifications (UL Greenguard Gold, SGS, OECD)",
      "Multi-function for all classes of fire (A, B, C, D, F/K)"
    ],
    products: [
      { name: "LFK AF31 Portable", desc: "Lightweight suppression cylinder for electric vehicles and commercial areas." },
      { name: "LFK for Mining & Forestry", desc: "Large-scale solution for the mining industry and forest fire prevention." }
    ]
  },
  "ballistic-app": {
    name: "BALLISTIC App",
    tagline: "Predictive IoT Battery Monitoring System",
    description: "BALLISTIC is an IoT-powered mobile application that monitors lithium battery conditions in real-time for electric vehicles (EV) and data centers. Designed to address potential battery failures, it detects temperature anomalies and sends early warnings directly to your smartphone.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Real-time battery temperature monitoring",
      "Smart early warning notifications to smartphone",
      "Seamless IoT sensor integration",
      "Prevents thermal runaway before ignition"
    ],
    products: [
      { name: "BALLISTIC for EV", desc: "Dedicated integrated monitoring for electric vehicle users." },
      { name: "BALLISTIC Enterprise", desc: "Centralized monitoring system for modern Data Centers." }
    ]
  },
  "uss-ev": {
    name: "Undercarriage Suppressions System (USS)",
    tagline: "Targeted Protection for EV Batteries",
    description: "FAST's innovative suppression system is strategically installed under the vehicle (undercarriage). When a temperature anomaly or spark is detected, this system automatically delivers a high-powered jet spray of extinguishing agent (Lithium Fire Killer) directly into the crucial battery compartment.",
    heroImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Direct jet-spray targeting the battery compartment",
      "Instant automatic response during critical conditions",
      "Adaptive design integrated with EV underbody structure",
      "Prevents explosions and fire spread to the passenger cabin"
    ],
    products: [
      { name: "USS Standard Edition", desc: "Suppression system for premium class passenger vehicles." },
      { name: "USS Commercial Fleet", desc: "Heavy-duty design specifically for electric buses and trucks." }
    ]
  },
  "flat-af11e": {
    name: "FLAT Hartindo AF11E",
    tagline: "Advanced Liquid Gas Fire Suppression",
    description: "FLAT Hartindo AF11E is an advanced liquid gas technology capable of extinguishing various classes of fire without leaving destructive residue. This formulation is the safest and most reliable solution for protecting electronic equipment, vital records, and control rooms.",
    heroImage: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Zero destructive or corrosive residue",
      "100% safe for electronic equipment and servers",
      "Rapid suppression reaction by cutting off the oxygen chain",
      "Eco-friendly and safe for human respiration"
    ],
    products: [
      { name: "FLAT Portable Series", desc: "Liquid gas-based Portable Fire Extinguishers." },
      { name: "FLAT System Integration", desc: "Centralized automatic suppression installations for server rooms." }
    ]
  }
};