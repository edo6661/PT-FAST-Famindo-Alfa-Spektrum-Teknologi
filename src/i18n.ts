// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        Home: "Home",
        "About Us": "About Us",
        Catalog: "Catalog",
        Clients: "Clients",
        contact: "Contact Us",
      },
      seo: {
        defaultTitle: "FAST | PT. Famindo Alfa Spektrum Teknologi",
        defaultDesc:
          "Every second matters. PT. Famindo Alfa Spektrum Teknologi provides high-level advanced fire safety technology solutions to mitigate Lithium-ion battery risks and secure industrial facilities.",
      },
      loginPage: {
        title: "Admin Login",
        errorEmailPass: "Login failed. Check your email and password.",
        email: "Email",
        password: "Password",
        processing: "Processing...",
        loginBtn: "Login",
      },
      clientBasePage: {
        badge: "Strategic Deployments",
        title: "Our",
        titleHighlight: "Client Base",
        desc: "Trusted by national institutions, international summits, and industry leaders. We engineer peace of mind for those who prioritize absolute safety without compromise.",
        trustedTitle: "Trusted Across Industries",
        trustedDesc:
          "Explore the ecosystem of businesses protected by FAST technology.",
        allClients: "All Clients",
        moreLogos: "More logos will be added soon.",
        ctaTitle: "Ready to Secure Your Assets?",
        ctaDesc:
          "Join our growing list of prestigious clients who trust FAST | PT. Famindo Alfa Spektrum Teknologi for their critical fire safety needs.",
        ctaButton: "Consult With Our Experts",
        featured: {
          presidential: {
            name: "Presidential Inauguration 2024",
            category: "Government",
            status: "Deployment Secured",
            desc: "Protection for all EV units escorting international VVIP guests for the Presidential Inauguration 2024.",
          },
          iaf: {
            name: "KTT IAF Bali 2024",
            category: "Government",
            status: "Mass Fleet Protection",
            desc: "Protection for all EV units escorting international VVIP guests for the IAF Summit, Bali.",
          },
          pope: {
            name: "Pope Francis Visit 2024",
            category: "Government",
            status: "Absolute Zero Incident",
            desc: "Protection for the EV unit escorting Pope Francis during his historic visit.",
          },
          bluebird: {
            name: "Bluebird Group 2025",
            category: "Transportation",
            status: "Official Supplier",
            desc: "FAST was appointed as the official fire safety supplier for Bluebird Group.",
          },
        },
      },
      blogsPage: {
        badge: "Our Articles",
        title: "Latest",
        titleHighlight: "Insights",
        desc: "Stay updated with the latest technology developments, case studies, and education on fire safety.",
        readMore: "Read Full Article",
        loading: "Loading Articles...",
        loadMore: "Load More Articles",
        empty: "No articles published at this time.",
      },
      blogDetail: {
        notFound: "Article Not Found",
        notFoundDesc:
          "The article you are looking for was not found or has been removed.",
        share: "Share",
        copied: "Link copied to clipboard!",
      },
      catalogPage: {
        badge: "Our Solutions",
        title: "Complete",
        titleHighlight: "Catalog",
        allProducts: "All Products",
        viewDetails: "View Details",
      },
      categoryDetail: {
        notFound: "Category Not Found",
        badge: "Category",
        viewDetails: "View Details",
        empty: "No products found in this category.",
      },
      productDetail: {
        notFound: "Product Not Found",
        notFoundDesc:
          "The safety solution you are looking for might have been moved or doesn't exist.",
        badgeFallback: "Advanced Solution",
        overview: "Product Overview",
        systemOverview: "System Overview", 
        store: "Official Store",
        secure: "Secure This Technology",
        secureDesc:
          "Request a full technical catalog or consult directly with our enterprise safety engineers to secure your assets.",
        download: "Download Brochure",
        buyTokopedia: "Buy on Tokopedia",
        contact: "Contact",
        variantsTitle: "Available Variants",
        variantsDesc:
          "Explore our range of purpose-built configurations designed to meet specific industrial and commercial requirements.",
        locationDetails: "Location Details",
        weight: "Weight:",
      },
      aboutUs: {
        badge: "About PT. FAST",
        title: "The",
        titleHighlight: "FAST FOUR",
        desc: "Founded by the FAST FOUR. A team of dedicated people with passion for safety.",
        team: [
          {
            role: "CEO",
            bio: "A visionary and adept entrepreneur, proprietor of Famindo Group, with a wealth of experience spanning over 18 years across diverse industries. Currently serving as Director & Commissioner in Famindo Group, he possesses a robust background in the automotive industry and brings a passion for brand building to the challenging landscape of fire safety. He is committed to contributing to the growth and success of the fire safety industry.",
          },
          {
            role: "President Commissioner",
            bio: "A dedicated entrepreneur and proprietor of Famindo Group, bringing over nine years of expertise in human resources and marketing within diverse industries, with a recent focus on the fire safety business. Renowned for developing strategic initiatives, he has played a pivotal role in steering the company's rapid growth, aligning it with the unique challenges and opportunities prevalent in the fire safety industry.",
          },
          {
            role: "Chief Technical Officer",
            bio: "Embarked on a career in the fire engineering sector with PT HARTINDO Chemicatama Industri in 2009. Currently holds directorial positions in various companies, he continuously extends his expertise in fire safety, integrating his extensive experience from the agricultural, plastics, and fire engineering domains.",
          },
          {
            role: "Chief Operating Officer",
            bio: "With a rich background in various industries and armed with insights from diverse operational expertise, his focus is now dedicated to the fire safety industry. Currently serving as an Operational Director, he foresees significant transformations in fire safety and is committed to revolutionizing the standards of fire safety systems across various sectors.",
          },
          {
            role: "Chief Creative Officer",
            bio: "Kicked off her creative path in graphic design, cultivating a sharp eye for visual storytelling and brand identity. Having navigated diverse creative roles across multiple industries, she now leads as Creative Director, seamlessly integrating her design roots with strategic digital expertise. She is dedicated to elevating brand narratives and redefining creative standards through innovative, multi-dimensional campaigns.",
          },
        ],
      },
      adminBlogPage: {
        title: "Blog Management",
        logout: "Logout",
        list: "Blog List",
        setLandingPos: "Set Landing Page Position",
        addNew: "+ Add New Blog",
        loading: "Loading data...",
        empty: "No blog articles yet.",
        colPhoto: "Photo",
        colTitle: "Title",
        colDisplay: "Display",
        colDate: "Date",
        colAction: "Action",
        edit: "Edit",
        delete: "Delete",
        confirmDelete: "Are you sure you want to delete this blog?",
        errorFetch: "Failed to fetch blog data from the server.",
        errorDelete: "Failed to delete blog.",
        landingModalTitle: "Set Blog Landing Page Position",
        landingModalDesc:
          "Select up to 3 blogs. Position 1 will be on the far left, Position 2 in the center, and Position 3 on the far right.",
        pos: "Position",
        posLeft: "(Far Left)",
        posCenter: "(Center)",
        posRight: "(Far Right)",
        emptySlot: "-- Empty Slot --",
        cancel: "Cancel",
        saveOrder: "Save Order",
        saving: "Saving...",
        errorSaveLanding: "Failed to save landing page order.",
      },
      clientBase: {
        title: "Engineered for Excellence,",
        titleHighlight: "Proven in Practice",
        desc: "Advanced fire safety solutions for the most demanding environments.",
        viewAll: "View Complete Portfolios",
        clients: {
          presidential: {
            name: "Presidential Inauguration 2024",
            desc: "Protection for all EV units escorting international VVIP guests for the Presidential Inauguration 2024.",
          },
          iaf: {
            name: "KTT IAF Bali 2024",
            desc: "Protection for all EV units escorting international VVIP guests for the IAF Summit, Bali.",
          },
          bluebird: {
            name: "Bluebird Group 2025",
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
        trustedClients: {
          presidential: "Presidential Inauguration 2024",
          kttVisit: "KTT Visit",
          bluebird: "Bluebird Group",
          kttIaf: "KTT IAF Bali",
        },
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
          "power-tech-shield-fire-blanket": {
            name: "Power Tech Shield",
            desc: "A specialized safety blanket designed to isolate and prevent fire spread by cutting off the oxygen supply.",
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
            title: "Fullfills TKDN Component Standards",
            desc: "Passed the test from Indonesia's Ministry of Industry with a total value of 49.31%. A top-of-mind choice to secure the mining and manufacturing industry.",
            logo: "/certi/lfk-af31/TKDN.svg.avif",
          },
          {
            title: "Ministry of Environment & Forestry (KLHK)",
            desc: "Passed as an effective solution for combating forest fires. Safe for humans, animals, and the environment. Prevents fire re-ignition.",
            logo: "/certi/lfk-af31/KLKH [Kementerian Lingkungan Hidup dan Kehutanan] Logo.avif",
          },
          {
            title: "DAMKAR",
            desc: "Qualified for extinguishing every class of fire [A, B, C, D, F/K] according to stringent DAMKAR test method parameters.",
            logo: "/certi/lfk-af31/LOGO DAMKAR YUDHA BRAMA JAYA.avif",
          },
          {
            title: "Ministry of Transportation",
            desc: "Certified as an effective fire extinguisher for classes A, B, C, and D. Highly reliable for transportation fleets.",
            logo: "/certi/lfk-af31/Kementerian Perhubungan Indonesia (Kemenhub) Logo.avif",
          },
          {
            title: "POLRI",
            desc: "Meets rigorous testing parameters and safety methods evaluated by the Indonesian National Police.",
            logo: "/certi/lfk-af31/Kepolisian Negara Republik Indonesia Logo.avif",
          },
          {
            title: "SNI",
            desc: "Complies with the Indonesian National Standard (Standar Nasional Indonesia) for product quality and safety.",
            logo: "/products/sni.avif",
          },
        ],
        international: [
          {
            title: "Nucro Technics",
            desc: "Certified testing and standard approvals ensuring our solutions meet rigorous international quality and safety benchmarks.",
            logo: "/certi/lfk-af31/Nucro-Technics.avif",
          },
          {
            title: "EUROFINS - Environment Test",
            desc: "Certified as a non-PFAS fire extinguisher. Removing the fear and risk of cancer development for its users.",
            logo: "/certi/lfk-af31/EUROFINS.avif",
          },
          {
            title: "SGS (USA)",
            desc: "Effective fire suppression solution for building material surfaces in accordance with the American Society for Testing and Materials.",
            logo: "/certi/lfk-af31/SGS Logo.svg.avif",
          },
          {
            title: "ASTM International",
            desc: "Complies with ASTM International standards for testing and materials, ensuring superior fire suppression performance.",
            logo: "/certi/lfk-af31/ASTM International Logo.avif",
          },
          {
            title: "US Department of Transportation (DOT)",
            desc: "Approved for transport safety and compliance by the United States Department of Transportation.",
            logo: "/certi/lfk-af31/Department of Transportation USA.avif",
          },
          {
            title: "Pollutech EnviroQuatics (Canada)",
            desc: "LC50 Certified. Proven not to cause acute toxicity and death to living organisms (tested on fish in their natural environment).",
            logo: "/certi/lfk-af31/Pollutec Logo.avif",
          },
          {
            title: "KGK Synergize (Canada) OECD",
            desc: "Achieved 'non-irritation' status. Causes no acute eye, skin irritation, or oral toxicity following OECD guidelines.",
            logo: "/certi/lfk-af31/KGK Science Logo.avif",
          },
          {
            title: "QAI Laboratories",
            desc: "Evaluated and certified by QAI Laboratories for stringent compliance with international safety and performance criteria.",
            logo: "/certi/lfk-af31/QAI logo.avif",
          },
          {
            title: "TUV SUD",
            desc: "Recognized by TUV SUD for meeting premium international quality, safety, and sustainability benchmarks.",
            logo: "/certi/lfk-af31/tuv_sud.avif",
          },
          {
            title: "UL Solutions (USA) - GREENGUARD Gold",
            desc: "Verified to have low total VOC emissions, ensuring high suitability for sensitive environments like schools and healthcare.",
            logo: "/certi/lfk-af31/Greenguard Logo 2.avif",
          },
        ],
      },
    },
  },
  id: {
    translation: {
      nav: {
        Home: "Beranda",
        "About Us": "Tentang Kami",
        Catalog: "Katalog",
        Clients: "Klien",
        contact: "Hubungi Kami",
      },
      seo: {
        defaultTitle: "FAST | PT. Famindo Alfa Spektrum Teknologi",
        defaultDesc:
          "Setiap detik berharga. PT. Famindo Alfa Spektrum Teknologi menyediakan solusi teknologi keselamatan kebakaran tingkat tinggi untuk memitigasi risiko baterai Lithium-ion dan mengamankan fasilitas industri.",
      },
      loginPage: {
        title: "Admin Login",
        errorEmailPass: "Gagal login. Periksa email dan password Anda.",
        email: "Email",
        password: "Password",
        processing: "Memproses...",
        loginBtn: "Masuk",
      },
      clientBasePage: {
        badge: "Penempatan Strategis",
        title: "Klien",
        titleHighlight: "Kami",
        desc: "Dipercaya oleh institusi nasional, konferensi internasional, dan pemimpin industri. Kami menciptakan rasa aman bagi mereka yang mengutamakan keselamatan tanpa kompromi.",
        trustedTitle: "Dipercaya Lintas Industri",
        trustedDesc:
          "Jelajahi ekosistem bisnis yang dilindungi oleh teknologi FAST.",
        allClients: "Semua Klien",
        moreLogos: "Lebih banyak logo akan segera ditambahkan.",
        ctaTitle: "Siap Mengamankan Aset Anda?",
        ctaDesc:
          "Bergabunglah dengan daftar klien bergengsi kami yang mempercayakan FAST | PT. Famindo Alfa Spektrum Teknologi untuk kebutuhan mitigasi kebakaran kritis mereka.",
        ctaButton: "Konsultasi Dengan Ahli Kami",
        featured: {
          presidential: {
            name: "Pelantikan Presiden 2024",
            category: "Government",
            status: "Deployment Secured",
            desc: "Proteksi untuk seluruh unit EV yang mengawal tamu VVIP dari luar negeri untuk pelantikan presiden 2024.",
          },
          iaf: {
            name: "KTT IAF Bali 2024",
            category: "Government",
            status: "Mass Fleet Protection",
            desc: "Proteksi untuk seluruh unit EV yang akan mengawal tamu VVIP dari luar negeri untuk KTT IAF, Bali.",
          },
          pope: {
            name: "Kunjungan Paus Fransiskus 2024",
            category: "Government",
            status: "Absolute Zero Incident",
            desc: "Proteksi unit mobil listrik (EV) yang akan mengawal Paus Fransiskus 2024.",
          },
          bluebird: {
            name: "Bluebird Group 2025",
            category: "Transportation",
            status: "Official Supplier",
            desc: "FAST ditunjuk sebagai pemasok resmi keselamatan kebakaran untuk Bluebird Group.",
          },
        },
      },
      blogsPage: {
        badge: "Artikel Kami",
        title: "Wawasan",
        titleHighlight: "Terbaru",
        desc: "Ikuti perkembangan teknologi, studi kasus, dan edukasi terbaru mengenai keselamatan kebakaran.",
        readMore: "Baca Artikel Lengkap",
        loading: "Memuat Artikel...",
        loadMore: "Muat Lebih Banyak",
        empty: "Belum ada artikel yang dipublikasikan saat ini.",
      },
      blogDetail: {
        notFound: "Artikel Tidak Ditemukan",
        notFoundDesc:
          "Artikel yang Anda cari tidak ditemukan atau telah dihapus.",
        share: "Bagikan",
        copied: "Tautan berhasil disalin!",
      },
      catalogPage: {
        badge: "Solusi Kami",
        title: "Katalog",
        titleHighlight: "Lengkap",
        allProducts: "Semua Produk",
        viewDetails: "Lihat Detail",
      },
      categoryDetail: {
        notFound: "Kategori Tidak Ditemukan",
        badge: "Kategori",
        viewDetails: "Lihat Detail",
        empty: "Tidak ada produk yang ditemukan dalam kategori ini.",
      },
      productDetail: {
        notFound: "Produk Tidak Ditemukan",
        notFoundDesc:
          "Solusi keselamatan yang Anda cari mungkin telah dipindahkan atau tidak ada.",
        badgeFallback: "Solusi Tingkat Lanjut",
        overview: "Tinjauan Produk", 
        systemOverview: "Tinjauan Sistem", 
        store: "Toko Resmi",
        secure: "Amankan Teknologi Ini",
        secureDesc:
          "Minta katalog teknis lengkap atau berkonsultasi langsung dengan tim insinyur keselamatan kami untuk mengamankan aset Anda.",
        download: "Unduh Brosur",
        buyTokopedia: "Beli di Tokopedia",
        contact: "Hubungi",
        variantsTitle: "Varian yang Tersedia",
        variantsDesc:
          "Jelajahi rangkaian konfigurasi khusus kami yang dirancang untuk memenuhi persyaratan industri dan komersial.",
        locationDetails: "Detail Lokasi",
        weight: "Berat:",
      },
      aboutUs: {
        badge: "Tentang PT. FAST",
        title: "The",
        titleHighlight: "FAST FOUR",
        desc: "Didirikan oleh FAST FOUR. Tim berdedikasi dengan komitmen tinggi terhadap keselamatan.",
        team: [
          {
            role: "Direktur Utama",
            bio: "Seorang pengusaha visioner dan pemilik Famindo Group, dengan pengalaman lebih dari 18 tahun di berbagai industri. Saat ini menjabat sebagai Direktur & Komisaris, beliau memiliki latar belakang kuat di industri otomotif dan membawa semangat membangun brand ke dalam lanskap bisnis keselamatan kebakaran yang menantang.",
          },
          {
            role: "Presiden Komisaris",
            bio: "Seorang pengusaha berdedikasi dan pemilik Famindo Group yang membawa keahlian lebih dari sembilan tahun di bidang sumber daya manusia dan pemasaran lintas industri, dengan fokus terbaru pada bisnis keselamatan kebakaran. Beliau berperan penting dalam mengarahkan pertumbuhan pesat perusahaan.",
          },
          {
            role: "Direktur Teknik",
            bio: "Memulai karir di sektor rekayasa kebakaran bersama PT HARTINDO Chemicatama Industri pada tahun 2009. Saat ini memegang posisi manajerial di berbagai perusahaan, beliau terus mengembangkan keahliannya di bidang keselamatan kebakaran dengan mengintegrasikan pengalaman ekstensif dari bidang pertanian dan plastik.",
          },
          {
            role: "Direktur Operasional",
            bio: "Dengan latar belakang beragam di berbagai industri dan wawasan dari keahlian operasional, fokusnya kini didedikasikan untuk industri keselamatan kebakaran. Saat ini menjabat sebagai Direktur Operasional, beliau berkomitmen untuk merevolusi standar sistem keamanan di berbagai sektor.",
          },
          {
            role: "Direktur Kreatif",
            bio: "Memulai karir kreatif di desain grafis, menumbuhkan insting tajam untuk penyampaian cerita visual dan identitas merek. Setelah menavigasi berbagai peran kreatif, ia kini memimpin sebagai Direktur Kreatif, memadukan akar desainnya dengan keahlian strategis digital untuk meningkatkan standar kampanye multidimensi yang inovatif.",
          },
        ],
      },
      adminBlogPage: {
        title: "Manajemen Blog",
        logout: "Keluar",
        list: "Daftar Blog",
        setLandingPos: "Atur Posisi Landing Page",
        addNew: "+ Tambah Blog Baru",
        loading: "Memuat data...",
        empty: "Belum ada artikel blog.",
        colPhoto: "Foto",
        colTitle: "Judul",
        colDisplay: "Tampil",
        colDate: "Tanggal",
        colAction: "Aksi",
        edit: "Edit",
        delete: "Hapus",
        confirmDelete: "Apakah Anda yakin ingin menghapus blog ini?",
        errorFetch: "Gagal mengambil data blog dari server.",
        errorDelete: "Gagal menghapus blog.",
        landingModalTitle: "Atur Posisi Blog Landing Page",
        landingModalDesc:
          "Pilih maksimal 3 blog. Posisi 1 akan berada di paling kiri, Posisi 2 di tengah, dan Posisi 3 di paling kanan.",
        pos: "Posisi",
        posLeft: "(Paling Kiri)",
        posCenter: "(Tengah)",
        posRight: "(Paling Kanan)",
        emptySlot: "-- Kosongkan Slot --",
        cancel: "Batal",
        saveOrder: "Simpan Urutan",
        saving: "Menyimpan...",
        errorSaveLanding: "Gagal menyimpan urutan landing page.",
      },
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
            name: "KTT IAF Bali 2024",
            desc: "Proteksi untuk seluruh unit EV yang akan mengawal tamu VVIP dari luar negeri untuk KTT IAF, Bali.",
          },
          bluebird: {
            name: "Bluebird Group 2025",
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
        trustedClients: {
          presidential: "Pelantikan Presiden 2024",
          kttVisit: "Kunjungan KTT",
          bluebird: "Bluebird Group",
          kttIaf: "KTT IAF Bali",
        },
      },
      floatingWa: {
        tooltip: "Chat WhatsApp",
        message:
          "Halo tim FAST, saya ingin konsultasi solusi Fire Safety untuk fasilitas saya.",
      },
      about: {
        title: "Solusi Kebakaran Modern",
        desc: "Kami hadirkan teknologi terpercaya untuk keamanan Anda.",
        missionTitle: "Misi",
        missionDesc:
          "Menyediakan Solusi Mutakhir Untuk Mitigasi Risiko Kebakaran Baterai Lithium.",
        visionTitle: "Visi",
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
          "power-tech-shield-fire-blanket": {
            name: "Power Tech Shield",
            desc: "Selimut keselamatan khusus yang dirancang untuk mengisolasi dan mencegah penyebaran api dengan memutus pasokan oksigen.",
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
      products: {
        "ballistic-app": {
          title: "BALLISTIC (Battery Life Alert Diagnostic)",
          tagline: "Sistem Diagnostik Umur Baterai",
          description:
            "BALLISTIC adalah aplikasi IoT (Internet of Things) dan Machine Learning yang dirancang untuk mendeteksi anomali suhu baterai lithium secara real-time. Dipercaya oleh PLN sebagai Battery Monitoring Center (BMC) untuk UPS portabel besar di seluruh pusat data.",
          features: {
            "0": "Pemantauan suhu baterai secara real-time",
            "1": "Notifikasi peringatan dini yang cerdas",
            "2": "Deteksi anomali dengan Machine Learning",
            "3": "Dipercaya oleh Perusahaan Listrik Negara (PLN)",
          },
          variants: {
            b1: {
              name: "BALLISTIC untuk EV",
              desc: "Pemantauan terintegrasi khusus untuk pengguna kendaraan listrik.",
            },
            b2: {
              name: "BALLISTIC Enterprise BMC",
              desc: "Sistem pemantauan terpusat untuk Pusat Data modern dan penyedia utilitas.",
            },
          },
        },
        "power-tech-shield-fire-blanket": {
          title: "Power Tech Shield - Selimut Api",
          tagline:
            "Pelindung Tugas Berat yang Dirancang untuk Bertahan di Kondisi Ekstrem",
          description:
            "Selimut keselamatan khusus yang dirancang untuk mengisolasi dan mencegah penyebaran api dengan memutus pasokan oksigen. Pelindung tugas berat terbaik untuk kendaraan listrik, garasi, dan area parkir.",
          features: {
            "0": "Tahan panas hingga 1600°C",
            "1": "Bertahan pada suhu 1100°C hingga 50 jam",
            "2": "Dapat digunakan kembali 6-7 kali (jika terpapar 300°C - 400°C)",
            "3": "Teruji & Bersertifikasi ASTM",
          },
          variants: {
            fb1: {
              name: "Pelindung Kendaraan Besar",
              desc: "Ideal untuk SUV dan kendaraan listrik berukuran besar.",
            },
            fb2: {
              name: "Pelindung Standar",
              desc: "Ukuran ringkas untuk kendaraan yang lebih kecil dan pemadaman spesifik.",
            },
            fb3: {
              name: "Pelindung Kompak",
              desc: "Untuk penggunaan yang sangat spesifik dan terlokalisasi.",
            },
          },
        },
        "altex-alpha-tech-shield": {
          title: "ALTEX ALPHA TECH SHIELD",
          tagline:
            "Pelapis Anti-Api Dalam Ruangan dengan Teknologi Thermafrost",
          description:
            "Pelapis anti-api dalam ruangan berkinerja tinggi yang dirancang untuk melindungi aset berharga Anda. Bekerja dengan memantulkan panas dan membentuk penghalang arang padat untuk mengisolasi struktur bangunan, memberi Anda waktu tambahan yang krusial selama keadaan darurat.",
          features: {
            "0": "Tahan terhadap panas ekstrem hingga 1300°C",
            "1": "Memberikan durasi ketahanan api selama 3 jam",
            "2": "Teknologi Char Barrier Thermafrost",
            "3": "100% Non-Toksik (Bebas Karsinogen & VOC)",
            "4": "Diaplikasikan menggunakan spray gun airless (kering dalam 3 jam)",
          },
          variants: {
            a1: {
              name: "Layanan End-to-End Altex",
              desc: "Termasuk konsultasi gratis, survei lokasi, dan aplikasi presisi oleh tim terlatih.",
            },
          },
        },
        "g-tech-defend": {
          title: "G-TECH",
          tagline: "Supresi Api Teknologi Gel Pasif",
          description:
            "Peredam api pasif berbasis teknologi Gel canggih untuk mengamankan baterai Lithium. Bekerja dengan menyerap panas, membentuk lapisan pendingin, dan mencegah penyalaan kembali. Produk DEFEND merupakan perlengkapan gaya hidup terintegrasi dengan G-Tech.",
          features: {
            "0": "Kemampuan penyerapan panas tingkat lanjut",
            "1": "Membentuk lapisan pendingin secara proaktif",
            "2": "Mencegah penyalaan kembali (thermal runaway)",
            "3": "Terintegrasi mulus ke dalam produk bawaan sehari-hari",
          },
          variants: {
            g1: {
              name: "DEFEND Pouch & Tas Baterai",
              desc: "Solusi bawaan sehari-hari dengan integrasi G-Tech untuk elektronik pribadi.",
            },
            g2: {
              name: "DEFEND Selimut Baterai",
              desc: "Perlindungan terarah untuk paket baterai lithium ukuran menengah.",
            },
          },
        },
        "lithium-fire-killer-hartindo-af31": {
          title: "Lithium Fire Killer HARTINDO AF31",
          tagline: "Pemadam Api Baterai Lithium Pertama Di Dunia",
          description:
            "Pemadam multi-fungsi ramah lingkungan yang menangani segalanya. Dari kebakaran kertas biasa hingga kebakaran baterai lithium yang berisiko tinggi. Lindungi rumah, armada, dan jiwa Anda dengan solusi keselamatan kebakaran khusus kami.",
          features: {
            "0": "Bersertifikat SNI (Standar Nasional Indonesia)",
            "1": "Kelas Api: A, B, D, F/K, & L (Lithium)",
            "2": "Satu alat tangguh untuk setiap keadaan darurat",
            "3": "Teruji di Lab Internasional & Bersertifikat TKDN",
            "4": "Ramah lingkungan & Tidak Beracun",
          },
          variants: {
            v1: {
              name: "LFK AF31 Portabel - 1 KG",
              desc: "Tabung pemadam ringan yang ideal untuk kendaraan listrik pribadi dan area yang sempit.",
            },
            v2: {
              name: "LFK AF31 Portabel - 3 KG",
              desc: "Tabung serbaguna untuk garasi EV, ruang server, dan komersial.",
            },
            v3: {
              name: "LFK AF31 Portabel - 6 KG",
              desc: "Unit berkapasitas tinggi untuk fasilitas industri dan perlindungan skala besar.",
            },
            v4: {
              name: "LFK AF31 Troli - 25 KG",
              desc: "Solusi mobilitas tugas berat untuk tambang, gudang besar, dan stasiun pengisian EV.",
            },
            v5: {
              name: "LFK AF31 Troli - 50 KG",
              desc: "Sistem supresi berkapasitas maksimal untuk lingkungan industri ekstrem.",
            },
          },
        },
        "flat-af11e": {
          title: "FLAT Flame Accurate Termination (AF11E)",
          tagline: "Pemadam Gas Cair Bersih Tingkat Lanjut (AF11E)",
          description:
            "Media pemadam gas cair bersih (campuran HCFC 123). Alternatif Halon yang sempurna tanpa efek samping merusak lingkungan. Tidak meninggalkan residu dan non-konduktif, membuatnya sangat cocok untuk Rumah Sakit, Ruang Panel, Pusat Data, dan markas Militer.",
          features: {
            "0": "Meninggalkan nol residu setelah digunakan",
            "1": "Aman untuk pernapasan manusia jika tanpa sengaja terhirup",
            "2": "Non-konduktif, sempurna untuk memadamkan kebakaran listrik",
            "3": "Bekerja secara sempurna untuk Kelas Api A, B, dan C",
          },
          variants: {
            f1: {
              name: "CA 1130-F",
              desc: "Warna tabung merah dengan tekanan kerja 14-16 Bar. Jangkauan pancaran 10m.",
            },
            f2: {
              name: "CA 1160-F",
              desc: "Warna tabung perak dengan tekanan kerja 14-16 Bar. Jangkauan pancaran 10m.",
            },
          },
        },
        "uss-undercarriage": {
          title: "Sistem Pemadaman Sasis Kendaraan (USS)",
          tagline: "Ekstensi Khusus untuk Titik Api di Bawah Kendaraan EV",
          description:
            "Perangkat ekstensi alat pemadam api portabel yang dirancang khusus untuk mengatasi kebakaran pada kendaraan listrik yang letak baterainya berada di bawah sasis. Dikembangkan bersama Pindad Indonesia untuk efisiensi darurat terbaik.",
          features: {
            "0": "Mode Jet Spray tekanan tinggi & Fine Mist",
            "1": "Ekstensi tombak khusus untuk penyisipan bawah mobil yang aman",
            "2": "Konektor selang kompatibel ke unit APAR besar 25KG-50KG",
            "3": "Direkayasa ketat bersama Pindad Indonesia",
          },
          variants: {
            u1: {
              name: "Kit Pengerahan USS",
              desc: "Kit ekstensi nosel dan tombak lengkap untuk tim tanggap darurat EV.",
            },
          },
        },
        "x-cap": {
          title: "X-CAP",
          tagline: "Solusi Cepat Tanggap Eksekusi Kebakaran",
          description:
            "Alat pemadam kebakaran portabel yang dirancang untuk penyebaran cepat dan efisiensi maksimal dalam skenario kritis yang tidak terduga. Memastikan jalur evakuasi segera diamankan dengan hitungan detik.",
          features: {
            "0": "Mekanisme respon dan penyebaran sangat cepat",
            "1": "Penanganan supresi berefisiensi tinggi",
            "2": "Ringkas, kokoh, dan selalu siap diandalkan",
          },
          variants: {
            xc1: {
              name: "Standar X-CAP",
              desc: "Unit respon standar untuk pemadaman instan.",
            },
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
            title: "Standar Komponen TKDN",
            desc: "Lulus uji Kementerian Perindustrian dengan nilai total 49.31%. Pilihan utama produk dalam negeri untuk mengamankan industri tambang dan manufaktur.",
            logo: "/certi/lfk-af31/TKDN.svg.avif",
          },
          {
            title: "Kementerian Lingkungan Hidup & Kehutanan",
            desc: "Solusi efektif penanggulangan kebakaran hutan (Karhutla). Aman bagi manusia, hewan, dan lingkungan, serta mencegah re-ignisi.",
            logo: "/certi/lfk-af31/KLKH [Kementerian Lingkungan Hidup dan Kehutanan] Logo.avif",
          },
          {
            title: "DAMKAR",
            desc: "Lulus kualifikasi memadamkan semua kelas api [A, B, C, D, F/K] berdasarkan parameter metode uji ketat dari DAMKAR.",
            logo: "/certi/lfk-af31/LOGO DAMKAR YUDHA BRAMA JAYA.avif",
          },
          {
            title: "Kementerian Perhubungan",
            desc: "Sertifikasi pemadam efektif untuk Kelas A, B, C, dan D. Sangat andal untuk proteksi armada transportasi dan logistik.",
            logo: "/certi/lfk-af31/Kementerian Perhubungan Indonesia (Kemenhub) Logo.avif",
          },
          {
            title: "POLRI",
            desc: "Memenuhi parameter pengujian teknis dan standar keamanan yang dievaluasi langsung oleh Kepolisian Republik Indonesia.",
            logo: "/certi/lfk-af31/Kepolisian Negara Republik Indonesia Logo.avif",
          },
          {
            title: "SNI",
            desc: "Memenuhi Standar Nasional Indonesia untuk kualitas material dan keamanan produk.",
            logo: "/products/sni.avif",
          },
        ],
        international: [
          {
            title: "Nucro Technics",
            desc: "Lulus pengujian sertifikasi untuk jaminan kualitas dan tolak ukur keselamatan standar internasional.",
            logo: "/certi/lfk-af31/Nucro-Technics.avif",
          },
          {
            title: "EUROFINS - Environment Test",
            desc: "Sertifikasi bebas PFAS (senyawa kimia abadi), menghilangkan risiko pembentukan kanker bagi penggunanya.",
            logo: "/certi/lfk-af31/EUROFINS.avif",
          },
          {
            title: "SGS (USA)",
            desc: "Solusi supresi api yang sangat efektif untuk material permukaan bangunan sesuai standar The American Society for Testing and Materials.",
            logo: "/certi/lfk-af31/SGS Logo.svg.avif",
          },
          {
            title: "ASTM International",
            desc: "Memenuhi standar pengujian dan material ASTM International, memastikan kinerja pemadaman api yang superior.",
            logo: "/certi/lfk-af31/ASTM International Logo.avif",
          },
          {
            title: "US Department of Transportation (DOT)",
            desc: "Disertifikasi oleh Departemen Transportasi Amerika Serikat untuk keamanan transportasi dan penanganan produk.",
            logo: "/certi/lfk-af31/Department of Transportation USA.avif",
          },
          {
            title: "Pollutech EnviroQuatics (Kanada)",
            desc: "Sertifikasi LC50: terbukti tidak menyebabkan toksisitas akut maupun kematian pada organisme hidup di air/alam.",
            logo: "/certi/lfk-af31/Pollutec Logo.avif",
          },
          {
            title: "KGK Synergize (Kanada) OECD",
            desc: "Status non-iritasi sesuai pedoman OECD. Tidak menyebabkan iritasi mata, kulit, maupun toksisitas oral.",
            logo: "/certi/lfk-af31/KGK Science Logo.avif",
          },
          {
            title: "QAI Laboratories",
            desc: "Dievaluasi dan disertifikasi oleh QAI Laboratories untuk kepatuhan ketat terhadap kriteria keselamatan dan kinerja internasional.",
            logo: "/certi/lfk-af31/QAI logo.avif",
          },
          {
            title: "TUV SUD",
            desc: "Diakui oleh TUV SUD karena memenuhi tolok ukur kualitas, keselamatan, dan keberlanjutan internasional premium.",
            logo: "/certi/lfk-af31/tuv_sud.avif",
          },
          {
            title: "UL Solutions - GREENGUARD Gold",
            desc: "Emisi VOC sangat rendah, menjamin keamanan untuk digunakan di lingkungan sensitif seperti sekolah & fasilitas kesehatan.",
            logo: "/certi/lfk-af31/Greenguard Logo 2.avif",
          },
        ],
      },
    },
  },
};

const savedLanguage = localStorage.getItem("appLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;
