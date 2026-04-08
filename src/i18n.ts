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
      catalog: {
        tagline: "Embark On Your Safety Journey",
        title: "No Fire",
        titleHighlight: "No Fear",
        desc: "High-level fire safety engineered for maximum reliability in critical industries.",
        explore: "Explore Category",
        categories: {
          predictive: {
            name: "Predictive",
            desc: "IoT battery monitoring system to detect anomalies early.",
          },
          preventive: {
            name: "Preventive",
            desc: "Anti-fire gel and coating to suppress fire at first ignition.",
          },
          protective: {
            name: "Protective",
            desc: "Advanced liquid gas and specialized suppression systems.",
          },
        },
      },
      adminBlog: {
        addTitle: "Add New Blog",
        editTitle: "Edit Blog",
        titleLabel: "Blog Title",
        descLabel: "Description",
        photoLabel: "Blog Photo",
        uploadHint: "Click to upload photo",
        showLanding: "Show on Landing Page",
        cancel: "Cancel",
        save: "Save Blog",
        saving: "Saving...",
      },
      certifications: {
        badge: "World-Class Standard",
        title: "Global Certifications",
        desc: "LFK AF31 is certified globally, ensuring top-tier safety and excellence.",
        nationalTitle: "National Certifications",
        internationalTitle: "International Certifications",
        national: [
          {
            title: "TKDN (49.31%)",
            desc: "Approved by Ministry of Industry. Top choice for mining.",
          },
          {
            title: "KLHK",
            desc: "Eco-friendly solution to safely prevent re-ignition.",
          },
          {
            title: "DAMKAR",
            desc: "Certified for fire classes A, B, C, D, and F/K.",
          },
          {
            title: "Kemenhub",
            desc: "Class A, B, C, D certified. Effective for forest fires.",
          },
          {
            title: "POLRI",
            desc: "Meets rigorous safety standards for law enforcement.",
          },
        ],
        international: [
          {
            title: "UL Solutions (USA)",
            desc: "GREENGUARD Gold. Low VOC emissions, human safe.",
          },
          {
            title: "EUROFINS",
            desc: "Non-PFAS certified, eliminating cancer risks.",
          },
          {
            title: "SGS (USA)",
            desc: "ASTM E84-07 & UL723. Effective for building surfaces.",
          },
          {
            title: "KGK Synergize (Canada)",
            desc: "OECD-certified: non-irritating to eyes and skin.",
          },
          {
            title: "Pollutech (Canada)",
            desc: "LC50 certified: non-toxic and safe for ecosystems.",
          },
          {
            title: "EN1568-3",
            desc: "Complies with stringent European extinguishing standards.",
          },
          {
            title: "Nucro Technics",
            desc: "Internationally verified for chemical safety.",
          },
        ],
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
      catalog: {
        tagline: "Mulai Perjalanan Keamanan Anda",
        title: "Tanpa Api",
        titleHighlight: "Tanpa Takut",
        desc: "Keamanan tingkat tinggi yang dirancang untuk keandalan di industri kritis.",
        explore: "Lihat Kategori",
        categories: {
          predictive: {
            name: "Prediktif",
            desc: "Sistem IoT pemantauan baterai untuk deteksi dini anomali.",
          },
          preventive: {
            name: "Preventif",
            desc: "Gel dan pelapis anti-api untuk meredam titik api pertama.",
          },
          protective: {
            name: "Protektif",
            desc: "Gas cair tingkat lanjut dan sistem supresi kebakaran khusus.",
          },
        },
      },
      adminBlog: {
        addTitle: "Tambah Blog Baru",
        editTitle: "Edit Blog",
        titleLabel: "Judul Blog",
        descLabel: "Deskripsi",
        photoLabel: "Foto Blog",
        uploadHint: "Klik untuk upload foto",
        showLanding: "Tampilkan di Landing Page",
        cancel: "Batal",
        save: "Simpan Blog",
        saving: "Menyimpan...",
      },
      certifications: {
        badge: "Standar Dunia",
        title: "Sertifikasi Global",
        desc: "LFK AF31 tersertifikasi secara global, menjamin keamanan tingkat tinggi.",
        nationalTitle: "Sertifikasi Nasional",
        internationalTitle: "Sertifikasi Internasional",
        national: [
          {
            title: "TKDN (49.31%)",
            desc: "Disetujui Kemenperin. Pilihan utama industri tambang.",
          },
          {
            title: "KLHK",
            desc: "Solusi ramah lingkungan pencegah re-ignisi karhutla.",
          },
          {
            title: "DAMKAR",
            desc: "Tersertifikasi untuk kelas api A, B, C, D, dan F/K.",
          },
          {
            title: "Kemenhub",
            desc: "Sertifikasi Kelas A, B, C, D. Efektif untuk karhutla.",
          },
          {
            title: "POLRI",
            desc: "Memenuhi standar keamanan ketat untuk kepolisian.",
          },
        ],
        international: [
          {
            title: "UL Solutions (USA)",
            desc: "GREENGUARD Gold. Emisi VOC rendah, sangat aman.",
          },
          {
            title: "EUROFINS",
            desc: "Bebas PFAS, menghilangkan risiko kanker pada tubuh.",
          },
          {
            title: "SGS (USA)",
            desc: "ASTM E84-07 & UL723. Efektif untuk permukaan bangunan.",
          },
          {
            title: "KGK Synergize",
            desc: "Sertifikasi OECD: tidak mengiritasi mata dan kulit.",
          },
          {
            title: "Pollutech",
            desc: "Sertifikasi LC50: tidak beracun dan aman ekosistem.",
          },
          {
            title: "EN1568-3",
            desc: "Memenuhi standar ketat pemadaman api Eropa.",
          },
          {
            title: "Nucro Technics",
            desc: "Terverifikasi internasional untuk keamanan kimia.",
          },
        ],
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
