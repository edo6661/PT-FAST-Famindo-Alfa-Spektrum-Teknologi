import { Cpu, ShieldAlert } from "lucide-react";

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

};



export const mainBrands = [
  {
    name: "Lithium Fire Killer Hartindo AF31",
    slug: "hartindo-af31",
    description: "The next level solution to face the rising risk of lithium-ion battery fire hazard. Eco-friendly, highly effective, and globally certified.",
    logo: "AF31",
    icon: <ShieldAlert size={32} className="text-accent" />,
    gridClass: "md:col-span-2 md:row-span-2",
    bgImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "BALLISTIC App",
    slug: "ballistic-app",
    description: "Mobile application that monitors and provides warnings of lithium battery conditions using advanced IoT technology.",
    logo: "APP",
    icon: <Cpu size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Altex",
    slug: "altex",
    description: "Belum ada data.",
    logo: "APP",
    icon: <Cpu size={24} className="text-white" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"

  }

];