import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: {
        title: "Advanced Fire Solutions",
        desc: "We provide trusted tech for your safety & peace of mind.",
        missionTitle: "Our Mission",
        missionDesc:
          "Provide top fire safety tech to mitigate lithium battery risks.",
        visionTitle: "Our Vision",
        visionDesc: "Creating a safer world so you can focus on what matters.",
      },
      brands: {
        sectionTitle: "Innovation &",
        sectionHighlight: "Technology",
        sectionDesc: "Specialized tech for precision fire risk handling.",
        viewCatalog: "View Complete Catalog",
        items: {
          "hartindo-af31": {
            name: "Lithium Fire Killer AF31",
            desc: "Eco-friendly lithium fire mitigation with global certification.",
          },
          "ballistic-app": {
            name: "BALLISTIC App",
            desc: "Advanced IoT mobile app for real-time battery monitoring.",
          },
          altex: {
            name: "Altex Coating",
            desc: "Anti-fire liquid coating to effectively stop fire spread.",
          },
        },
      },
    },
  },
  id: {
    translation: {
      about: {
        title: "Solusi Kebakaran Modern",
        desc: "Kami hadirkan teknologi terpercaya untuk keamanan Anda.",
        missionTitle: "Misi Kami",
        missionDesc:
          "Memberikan solusi mitigasi risiko baterai lithium terbaik.",
        visionTitle: "Visi Kami",
        visionDesc: "Menciptakan dunia yang aman agar Anda lebih tenang.",
      },
      brands: {
        sectionTitle: "Inovasi &",
        sectionHighlight: "Teknologi",
        sectionDesc:
          "Teknologi khusus untuk penanganan risiko kebakaran yang presisi.",
        viewCatalog: "Lihat Semua Katalog",
        items: {
          "hartindo-af31": {
            name: "Lithium Fire Killer AF31",
            desc: "Mitigasi kebakaran lithium ramah lingkungan bersertifikasi global.",
          },
          "ballistic-app": {
            name: "Aplikasi BALLISTIC",
            desc: "Aplikasi IoT canggih untuk pemantauan baterai real-time.",
          },
          altex: {
            name: "Pelapis Altex",
            desc: "Pelapis cairan anti-api untuk mencegah penyebaran api.",
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id",
  fallbackLng: "id",
  interpolation: { escapeValue: false },
});

export default i18n;
