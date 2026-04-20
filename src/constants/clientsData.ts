export type ClientCategory =
  | "all"
  | "energy"
  | "government"
  | "private-sector"
  | "property"
  | "transportation";

export interface ClientLogo {
  id: string;
  name: string;
  category: ClientCategory;
  src: string;
}

export const clientCategories: { id: ClientCategory; label: string }[] = [
  { id: "all", label: "All Clients" },
  { id: "energy", label: "Energy" },
  { id: "government", label: "Government" },
  { id: "private-sector", label: "Private Sector" },
  { id: "property", label: "Property" },
  { id: "transportation", label: "Transportation" },
];

export const clientLogos: ClientLogo[] = [
  {
    id: "pln",
    name: "PLN",
    category: "energy",
    src: "/clients/energy/PLN_Logo_01.png",
  },
  {
    id: "pertamina",
    name: "Pertamina",
    category: "energy",
    src: "/clients/energy/Pertamina_Logo.png",
  },
  {
    id: "mind-id",
    name: "MIND ID",
    category: "energy",
    src: "/clients/energy/MIND_ID_Logo.png",
  },
  {
    id: "vale",
    name: "Vale",
    category: "energy",
    src: "/clients/energy/Vale_Logo.png",
  },
  {
    id: "voltron",
    name: "Voltron",
    category: "energy",
    src: "/clients/energy/Voltron_Logo.png",
  },

  {
    id: "istana",
    name: "Istana Kepresidenan RI",
    category: "government",
    src: "/clients/government/Istana_Kepresidenan_RI_Logo.png",
  },
  {
    id: "bumn",
    name: "BUMN",
    category: "government",
    src: "/clients/government/BUMN_Logo.png",
  },
  {
    id: "polri",
    name: "POLRI",
    category: "government",
    src: "/clients/government/Kepolisian_Negara_Republik_Indonesia_Logo.png",
  },
  {
    id: "tni",
    name: "TNI",
    category: "government",
    src: "/clients/government/Tentara_Nasional_Indonesia-logo-1E16A25DC7-seeklogo.com.png",
  },
  {
    id: "kemenhub",
    name: "Kemenhub",
    category: "government",
    src: "/clients/government/Kementerian_Perhubungan_Republik_Indonesia.png",
  },

  {
    id: "bca",
    name: "BCA Group",
    category: "private-sector",
    src: "/clients/private-sector/BCA_Grup_Logo.png",
  },
  {
    id: "djarum",
    name: "Djarum",
    category: "private-sector",
    src: "/clients/private-sector/Djarum_Logo.png",
  },
  {
    id: "indofood",
    name: "Indofood",
    category: "private-sector",
    src: "/clients/private-sector/Indofood_CBP_Logo.png",
  },
  {
    id: "sinarmas",
    name: "Sinarmas",
    category: "private-sector",
    src: "/clients/private-sector/Sinarmas_Logo.png",
  },
  {
    id: "lippo",
    name: "Lippo Group",
    category: "private-sector",
    src: "/clients/private-sector/Lippo_Group_Logo.svg.png",
  },

  {
    id: "pakuwon",
    name: "Pakuwon Group",
    category: "property",
    src: "/clients/property/Pakuwon_Group_Logo.png",
  },
  {
    id: "intiland",
    name: "Intiland",
    category: "property",
    src: "/clients/property/Intiland_Logo.svg.png",
  },
  {
    id: "wtc",
    name: "World Trade Center",
    category: "property",
    src: "/clients/property/World_Trade_Center_Logo.png",
  },
  {
    id: "ciputra",
    name: "Ciputra World",
    category: "property",
    src: "/clients/property/Ciputra_World_Surabaya_Logo.png",
  },
  {
    id: "agung-sedayu",
    name: "Agung Sedayu",
    category: "property",
    src: "/clients/private-sector/Agung_Sedayu_Group_Logo.png",
  },

  {
    id: "bluebird",
    name: "Bluebird Group",
    category: "transportation",
    src: "/clients/transportation/Bluebird_Logogram.png",
  },
  {
    id: "toyota",
    name: "Toyota Astra Motor",
    category: "transportation",
    src: "/clients/transportation/Astra_-_Toyota_Astra_Motor.png",
  },
  {
    id: "bmw",
    name: "BMW",
    category: "transportation",
    src: "/clients/transportation/BMW.png",
  },
  {
    id: "dhl",
    name: "DHL",
    category: "transportation",
    src: "/clients/transportation/DHL.png",
  },
  {
    id: "porsche",
    name: "Porsche",
    category: "transportation",
    src: "/clients/transportation/Porsche_Logo.svg.png",
  },
];
