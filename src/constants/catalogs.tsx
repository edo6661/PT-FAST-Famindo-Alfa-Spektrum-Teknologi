import { Activity, ShieldCheck, Flame } from 'lucide-react';

export const categories = [
  {
    id: 'predictive',
    slug: 'predictive',
    name: 'Predictive',
    description: 'Sophisticated battery monitoring system to detect anomaly on the lithium-ion battery cells with Internet of Things [IoT] system developed by NKRI.',
    icon: Activity
  },
  {
    id: 'preventive',
    slug: 'preventive',
    name: 'Preventive',
    description: 'Patented gel-based material, anti-fire liquid coating, and protective fire blanket to reinforce passive security and immediately suppress fire from the first ignition.',
    icon: ShieldCheck
  },
  {
    id: 'protective',
    slug: 'protective',
    name: 'Protective',
    description: 'The first lithium fire extinguisher in the world, advanced liquid gas FLAT AF11E, and specialized Undercarriage Suppressions System for maximum protection.',
    icon: Flame
  }
];

export const products = [
  {
    id: 'ballistic-iot',
    slug: 'ballistic-iot-monitoring',
    title: 'Predictive IoT Battery Monitoring',
    categoryId: 'predictive',
    description: 'Sophisticated battery monitoring system to detect anomaly on the lithium-ion battery cells with Internet of Things [IoT] system developed by NKRI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    variants: []
  },
  {
    id: 'lfk-af31',
    slug: 'lithium-fire-killer-af31',
    title: 'Lithium Fire Killer (LFK) AF31',
    categoryId: 'preventive',
    description: 'Patented gel-based material, anti-fire liquid coating, and protective fire blanket to reinforce passive security and immediately suppress fire from the first ignition.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop',
    variants: [
      { id: 'v1', weight: '1kg' },
      { id: 'v2', weight: '3kg' },
      { id: 'v3', weight: '6kg' },
      { id: 'v4', weight: '25kg' },
      { id: 'v5', weight: '50kg' }
    ]
  },
  {
    id: 'flat-af11e',
    slug: 'flat-af11e-gas',
    title: 'Advanced Liquid Gas FLAT AF11E',
    categoryId: 'protective',
    description: 'The first lithium fire extinguisher in the world, advanced liquid gas FLAT AF11E, and specialized Undercarriage Suppressions System for maximum protection.',
    image: 'https://images.unsplash.com/photo-1485575301924-6891ebbfaf88?q=80&w=1000&auto=format&fit=crop',
    variants: []
  }
];