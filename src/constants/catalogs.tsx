import { Activity, ShieldCheck, Flame } from 'lucide-react';

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
  // --- PREDICTIVE ---
  {
    id: 'ballistic-app',
    slug: 'ballistic-app',
    title: 'BALLISTIC (Battery Life Diagnostic)',
    categoryId: 'predictive',
    description: 'IoT and Machine Learning application to detect lithium battery temperature anomalies in real-time, sending early warnings to secure tech assets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    variants: []
  },

  // --- PREVENTIVE ---
  {
    id: 'power-tech-shield-fire-blanket',
    slug: 'power-tech-shield-fire-blanket',
    title: 'Power Tech Shield - Fire Blanket',
    categoryId: 'preventive',
    description: 'Thermal isolation blanket to prevent fire spread by cutting off oxygen supply. Heat resistant up to 1600°C. Ideal for EV garages and ferries.',
    image: 'https://images.unsplash.com/photo-1620325867502-2211b5f70f6f?q=80&w=1000&auto=format&fit=crop',
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

  // --- PROTECTIVE ---
  {
    id: 'lithium-fire-killer-hartindo-af31',
    slug: 'lithium-fire-killer-hartindo-af31',
    title: 'Lithium Fire Killer HARTINDO AF31',
    categoryId: 'protective',
    description: 'Effective multi-function fire extinguisher. Eco-friendly, non-toxic, and TKDN certified (49.31%). The ultimate choice for EV and mining fire mitigation.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop',
    variants: [
      { id: 'v1', weight: '1kg (Portable)' },
      { id: 'v2', weight: '3kg (Portable)' },
      { id: 'v3', weight: '6kg (Portable)' },
      { id: 'v4', weight: '25kg (Trolley)' },
      { id: 'v5', weight: '50kg (Trolley)' }
    ]
  },
  {
    id: 'flat-af11e',
    slug: 'flat-af11e',
    title: 'FLAT Flame Accurate Termination (AF11E)',
    categoryId: 'protective',
    description: 'Clean liquefied gas fire extinguishing media (HCFC 123 blend). A Halon alternative leaving no residue, perfect for hospitals, data centers, and military.',
    image: 'https://images.unsplash.com/photo-1485575301924-6891ebbfaf88?q=80&w=1000&auto=format&fit=crop',
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