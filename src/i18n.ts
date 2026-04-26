// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      clientBase: {
        title: "Engineered for Excellence,",
        titleHighlight: "Proven in Practice",
        desc: "Advanced fire safety solutions for the most demanding environments.",
        viewAll: "View Complete Portfolios",
        clients: {
          presidential: {
            name: "2024 Presidential Inauguration",
            desc: "Protection for all EV units escorting international VVIP guests for the 2024 presidential inauguration.",
          },
          iaf: {
            name: "KTT IAF Bali [2024]",
            desc: "Protection for all EV units escorting international VVIP guests for the IAF Summit, Bali.",
          },
          pope: {
            name: "Pope Francis Visit [2024]",
            desc: "Protection for the electric vehicle (EV) units escorting Pope Francis.",
          },
          bluebird: {
            name: "Bluebird Group [2025]",
            desc: "FAST was appointed as the official fire safety supplier for the Bluebird Group.",
          },
        },
      },
      footer: {
        title: "Secure Your Business",
        titleHighlight: "Today.",
        desc: "Contact our experts for an in-depth fire protection audit specific to your scale.",
        headquarters: "Headquarters",
        phone: "Phone & WhatsApp",
        emailTitle: "Email",
        form: {
          title: "Schedule a Consultation",
          name: "Full Name",
          namePlaceholder: "Enter your name",
          email: "Company Email",
          emailPlaceholder: "email@company.com",
          message: "Protection Needs",
          messagePlaceholder: "Tell us about your fire safety needs...",
          submit: "Send Message",
          submitting: "Sending Request...",
          success: "Message sent successfully! We will contact you shortly.",
          error: "An error occurred. Please try again.",
        },
        insights: {
          title: "Latest Insights",
          desc: "Follow our latest technology updates & education.",
          viewAll: "View All Articles",
          empty: "No article updates available right now.",
        },
        copyright: "All rights reserved.",
      },
      hero: {
        badge: "Every Second Matters",
        badgeSuffix: "",
        title: "Securing Safety",
        titleHighlight: "One At A Time.",
        subtitle: "Advanced Lithium Fire Solutions.",
        desc: "Trusted by top enterprises for maximum safety since 2022.",
        cta1: "Explore Catalog",
        cta2: "Consult Us",
        trusted: "Securing High-Profile Assets",
      },
      floatingWa: {
        tooltip: "Chat via WhatsApp",
        message:
          "Hello FAST team, I want to consult about Fire Safety solutions for my facility.",
      },
      about: {
        title: "Advanced Fire Solutions",
        desc: "We provide trusted tech for your safety & peace of mind.",
        missionTitle: "Mission",
        missionDesc:
          "Providing Cutting-Edge Solutions for Lithium Battery Fire Risk Mitigation.",
        visionTitle: "Vision",
        visionDesc: "Empowering a Safer Future, Where Innovation is Fearless.",
      },
      brands: {
        sectionTitle: "Innovation &",
        sectionHighlight: "Technology",
        sectionDesc: "Specialized tech for precision fire risk handling.",
        viewCatalog: "View Complete Catalog",
        items: {
          "lithium-fire-killer-hartindo-af31": {
            name: "Lithium Fire Killer AF31",
            desc: "Eco-friendly lithium fire mitigation with global certification.",
          },
          "ballistic-app": {
            name: "BALLISTIC App",
            desc: "Advanced IoT mobile app for real-time battery monitoring.",
          },
          "altex-alpha-tech-shield": {
            name: "ALTEX ALPHA TECH SHIELD",
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
        desc: "Lithium Fire Killer (LFK) AF31 proudly bears the badges of the world's most prestigious certifications as a testament to excellence, safety, and environmental dedication.",
        nationalTitle: "National Certifications",
        internationalTitle: "International Certifications",
        national: [
          {
            title: "TKDN",
            desc: "Passed the test from Indonesia's Ministry of Industry. A top-of-mind choice to secure the mining and manufacturing industry.",
            logo: "/certi/lfk-af31/TKDN.svg.png",
          },
          {
            title: "Ministry of Environment & Forestry (KLHK)",
            desc: "Effective solution for combating forest fires. Safe for humans, animals, and the environment. Prevents fire re-ignition.",
            logo: "/certi/lfk-af31/KLKH_[Kementerian_Lingkungan_Hidup_dan_Kehutanan]_Logo.png",
          },
          {
            title: "DAMKAR",
            desc: "Qualified for extinguishing every class of fire [A, B, C, D, F/K] according to stringent test method parameters.",
            logo: "/certi/lfk-af31/LOGO_DAMKAR_YUDHA_BRAMA_JAYA.png",
          },
          {
            title: "Ministry of Transportation",
            desc: "Certified as a fire extinguisher for classes A, B, C, and D. Highly reliable for transportation fleets.",
            logo: "/certi/lfk-af31/Kementerian_Perhubungan_Indonesia_(Kemenhub)_Logo.png",
          },
          {
            title: "POLRI",
            desc: "Meets rigorous testing parameters and safety methods evaluated by the Indonesian National Police.",
            logo: "/certi/lfk-af31/Kepolisian_Negara_Republik_Indonesia_Logo.png",
          },
          {
            title: "SNI",
            desc: "Complies with the Indonesian National Standard (Standar Nasional Indonesia) for product quality and safety.",
            logo: "/certi/lfk-af31/SNI_Logo.png",
          },
        ],
        international: [
          {
            title: "Nucro Technics",
            desc: "Certified testing and standard approvals for international quality and safety.",
            logo: "/certi/lfk-af31/Nucro-Technics.svg",
          },
          {
            title: "EUROFINS - Environment Test",
            desc: "Certified as a non-PFAS fire extinguisher. Removing the fear and risk of cancer development for its users.",
            logo: "/certi/lfk-af31/EUROFINS.png",
          },
          {
            title: "SGS (USA): ASTM E84-07 & UL723",
            desc: "Effective fire suppression solution for building material surfaces in accordance with ASTM standards.",
            logo: "/certi/lfk-af31/SGS_Logo.svg.png",
          },
          {
            title: "Pollutech EnviroQuatics (Canada)",
            desc: "LC50 Certified. Proven not to cause acute toxicity and death to living organisms in natural environments.",
            logo: "/certi/lfk-af31/Pollutec_Logo.png",
          },
          {
            title: "KGK Synergize (Canada) OECD",
            desc: "Achieved 'non-irritation' status. Causes no acute eye, skin irritation, or oral toxicity following OECD guidelines.",
            logo: "/certi/lfk-af31/KGK_Science_Logo.svg",
          },

          {
            title: "UL Solutions (USA) - GREENGUARD Gold",
            desc: "Verified to have low total VOC emissions, ensuring high suitability for sensitive environments like schools and healthcare.",
            logo: "/certi/lfk-af31/Greenguard_Logo_2.png",
          },
          {
            title: "FAA (US Dept. of Transportation)",
            desc: "Successfully and rapidly extinguished lithium battery fires in Federal Aviation Administration testing.",
            logo: "/certi/lfk-af31/Department_of_Transportation_USA.png",
          },
        ],
      },
    },
  },
  id: {
    translation: {
      clientBase: {
        title: "Keunggulan Teruji,",
        titleHighlight: "Terbukti di Lapangan",
        desc: "Solusi fire safety canggih untuk lingkungan yang paling menantang.",
        viewAll: "Lihat Semua Portofolio",
        clients: {
          presidential: {
            name: "Pelantikan Presiden 2024",
            desc: "Proteksi untuk seluruh unit EV yang mengawal tamu VVIP dari luar negeri untuk pelantikan presiden 2024.",
          },
          iaf: {
            name: "KTT IAF Bali [2024]",
            desc: "Proteksi untuk seluruh unit EV yang akan mengawal tamu VVIP dari luar negeri untuk KTT IAF, Bali.",
          },
          pope: {
            name: "Kunjungan Paus Fransiskus [2024]",
            desc: "Proteksi unit mobil listrik (EV) yang akan mengawal Paus Fransiskus.",
          },
          bluebird: {
            name: "Bluebird Group [2025]",
            desc: "FAST ditunjuk sebagai pemasok resmi keselamatan kebakaran untuk Bluebird Group.",
          },
        },
      },
      footer: {
        title: "Amankan Bisnis Anda",
        titleHighlight: "Hari Ini.",
        desc: "Hubungi ahli kami untuk audit proteksi kebakaran mendalam sesuai skala bisnis Anda.",
        headquarters: "Kantor Pusat",
        phone: "Telepon & WhatsApp",
        emailTitle: "Email",
        form: {
          title: "Jadwalkan Konsultasi",
          name: "Nama Lengkap",
          namePlaceholder: "Masukkan nama Anda",
          email: "Email Perusahaan",
          emailPlaceholder: "email@perusahaan.com",
          message: "Kebutuhan Proteksi",
          messagePlaceholder: "Ceritakan kebutuhan keamanan fasilitas Anda...",
          submit: "Kirim Pesan",
          submitting: "Mengirim Pesan...",
          success: "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",
          error: "Terjadi kesalahan. Silakan coba lagi.",
        },
        insights: {
          title: "Artikel Terbaru",
          desc: "Ikuti pembaruan teknologi dan edukasi fire safety kami.",
          viewAll: "Lihat Semua Artikel",
          empty: "Belum ada pembaruan artikel saat ini.",
        },
        copyright: "Hak cipta dilindungi.",
      },
      hero: {
        badge: "Setiap Detik Berharga",
        badgeSuffix: "Menjaga Keamanan",
        title: "Total Solusi Keamanan",
        titleHighlight: "Ada Dalam Genggaman.",
        subtitle: "Solusi Canggih Kebakaran Lithium.",
        desc: "Dipercaya perusahaan top untuk keamanan maksimal sejak 2022.",
        cta1: "Lihat Katalog",
        cta2: "Konsultasi",
        trusted: "Mengamankan Aset Berharga",
      },
      floatingWa: {
        tooltip: "Chat WhatsApp",
        message:
          "Halo tim FAST, saya ingin konsultasi solusi Fire Safety untuk fasilitas saya.",
      },
      about: {
        title: "Solusi Kebakaran Modern",
        desc: "Kami hadirkan teknologi terpercaya untuk keamanan Anda.",
        missionTitle: "Mission",
        missionDesc:
          "Menyediakan Solusi Mutakhir Untuk Mitigasi Risiko Kebakaran Baterai Lithium.",
        visionTitle: "Vision",
        visionDesc:
          "Menciptakan Masa Depan yang Lebih Aman, Di Mana Inovasi Hadir Tanpa Ragu.",
      },
      brands: {
        sectionTitle: "Inovasi &",
        sectionHighlight: "Teknologi",
        sectionDesc:
          "Teknologi khusus untuk penanganan risiko kebakaran yang presisi.",
        viewCatalog: "Lihat Semua Katalog",
        items: {
          "lithium-fire-killer-hartindo-af31": {
            name: "Lithium Fire Killer AF31",
            desc: "Mitigasi kebakaran lithium ramah lingkungan bersertifikasi global.",
          },
          "ballistic-app": {
            name: "Aplikasi BALLISTIC",
            desc: "Aplikasi IoT canggih untuk pemantauan baterai real-time.",
          },
          "altex-alpha-tech-shield": {
            name: "ALTEX ALPHA TECH SHIELD",
            desc: "Pelapis cairan anti-api untuk mencegah penyebaran api secara efektif.",
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
        desc: "Lithium Fire Killer (LFK) AF31 kebanggaan kami telah melalui pengujian ketat dan meraih sertifikasi bergengsi dunia sebagai bukti dedikasi pada keselamatan dan lingkungan.",
        nationalTitle: "Sertifikasi Nasional",
        internationalTitle: "Sertifikasi Internasional",
        national: [
          {
            title: "TKDN",
            desc: "Disetujui Kemenperin. Menjadi pilihan utama produk dalam negeri untuk mengamankan industri tambang dan manufaktur.",
            logo: "/certi/lfk-af31/TKDN.svg.png",
          },
          {
            title: "KLHK",
            desc: "Solusi efektif kebakaran hutan (Karhutla). Aman bagi manusia, hewan, dan lingkungan, serta mencegah re-ignisi.",
            logo: "/certi/lfk-af31/KLKH_[Kementerian_Lingkungan_Hidup_dan_Kehutanan]_Logo.png",
          },
          {
            title: "DAMKAR",
            desc: "Lulus kualifikasi memadamkan semua kelas api [A, B, C, D, F/K] berdasarkan parameter uji yang ketat.",
            logo: "/certi/lfk-af31/LOGO_DAMKAR_YUDHA_BRAMA_JAYA.png",
          },
          {
            title: "Kementerian Perhubungan",
            desc: "Sertifikasi pemadam untuk Kelas A, B, C, D. Sangat andal untuk proteksi armada transportasi dan logistik.",
            logo: "/certi/lfk-af31/Kementerian_Perhubungan_Indonesia_(Kemenhub)_Logo.png",
          },
          {
            title: "POLRI",
            desc: "Memenuhi parameter pengujian teknis dan standar keamanan yang dievaluasi langsung oleh Kepolisian Republik Indonesia.",
            logo: "/certi/lfk-af31/Kepolisian_Negara_Republik_Indonesia_Logo.png",
          },
          {
            title: "SNI",
            desc: "Memenuhi Standar Nasional Indonesia untuk kualitas material dan keamanan produk pemadam.",
            logo: "/certi/lfk-af31/SNI_Logo.png",
          },
        ],
        international: [
          {
            title: "Nucro Technics",
            desc: "Lulus standar pengujian sertifikasi untuk jaminan kualitas dan keselamatan.",
            logo: "/certi/lfk-af31/Nucro-Technics.svg",
          },
          {
            title: "EUROFINS",
            desc: "Sertifikasi bebas PFAS (senyawa kimia abadi), menghilangkan risiko pembentukan kanker bagi penggunanya.",
            logo: "/certi/lfk-af31/EUROFINS.png",
          },
          {
            title: "SGS (USA) & ASTM",
            desc: "Standar ASTM E84-07 & UL723. Solusi supresi api yang sangat efektif untuk material permukaan bangunan.",
            logo: "/certi/lfk-af31/SGS_Logo.svg.png",
          },
          {
            title: "Pollutech EnviroQuatics",
            desc: "Sertifikasi LC50: terbukti tidak menyebabkan toksisitas akut maupun kematian pada organisme hidup di air/alam.",
            logo: "/certi/lfk-af31/Pollutec_Logo.png",
          },
          {
            title: "KGK Synergize (Kanada)",
            desc: "Status non-iritasi sesuai pedoman OECD. Tidak beracun untuk mata, kulit, maupun konsumsi oral.",
            logo: "/certi/lfk-af31/KGK_Science_Logo.svg",
          },

          {
            title: "UL Solutions - GREENGUARD Gold",
            desc: "Emisi VOC sangat rendah, menjamin keamanan untuk digunakan di lingkungan sensitif seperti sekolah & rumah sakit.",
            logo: "/certi/lfk-af31/Greenguard_Logo_2.png",
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
