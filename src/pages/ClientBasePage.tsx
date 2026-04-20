import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clientCategories, clientLogos } from '../constants/clientsData';
import SpotlightCard from '../components/SpotlightCard';

const ClientBasePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredLogos = activeCategory === 'all'
    ? clientLogos
    : clientLogos.filter(logo => logo.category === activeCategory);

  const featuredClients = [
    {
      logoImg: "/clients/government/Istana_Kepresidenan_RI_Logo.png",
      name: "2024 Presidential Inauguration",
      category: "Government",
      status: "Deployment Secured",
      desc: "FAST | PT. Famindo Alfa Spektrum Teknologi was called by the Ministry of State Secretariat to safeguard a momentous national event with precision and reliability. Lithium Fire Killer HARTINDO AF31 was distributed for the EV units escorting the international VVIP guests attending the presidential inauguration ceremony.",
      color: "from-blue-600/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      logoImg: "/clients/government/Kepolisian_Negara_Republik_Indonesia_Logo.png",
      name: "Securing KTT Visit",
      category: "VVIP Protection",
      status: "Absolute Zero Incident",
      desc: "Lithium Fire Killer HARTINDO AF31 was trusted to secure the vehicle that escorted the Pope during his historic visit to Indonesia, ensuring maximum safety against potential battery thermal runaway.",
      color: "from-amber-500/20 to-transparent",
      borderColor: "group-hover:border-amber-500/50"
    },
    {
      logoImg: "/clients/government/IAF_LOGO.png",
      name: "IKT Terminal & KTT IAF Bali",
      category: "International Summit",
      status: "Mass Fleet Protection",
      desc: "Lithium Fire Killer HARTINDO AF31 was trusted to secure hundreds of EV units at the IKT Terminal. These units were responsible for escorting international VVIP guests at the prestigious KTT IAF (Indonesia Africa Forum) event in Bali.",
      color: "from-accent/20 to-transparent",
      borderColor: "group-hover:border-accent/50"
    },
    {
      logoImg: "/clients/transportation/Bluebird_Logogram.png",
      name: "Bluebird Group",
      category: "Corporate Fleet",
      status: "Official Supplier & Training",
      desc: "FAST was appointed as the official fire safety supplier for Bluebird Group and successfully conducted comprehensive fire safety training at the company's Mampang headquarters.",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "group-hover:border-cyan-500/50"
    }
  ];

  return (
    <div className="py-24 pt-32 bg-background min-h-screen relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="mb-20 text-center flex flex-col items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-8 text-sm font-medium bg-surface/50 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md hover:border-white/30 hover:bg-surface">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 mb-4">
            <ShieldCheck className="text-accent" size={24} />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Proven Track Record</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Client Base</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl font-light leading-relaxed">
            Trusted by national institutions, international summits, and industry leaders. We engineer peace of mind for those who prioritize absolute safety without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {featuredClients.map((client, index) => (
            <div
              key={index}
              className={`group p-8 md:p-10 rounded-3xl bg-surface/40 border border-white/10 hover:bg-surface/80 transition-all duration-500 shadow-xl backdrop-blur-md relative overflow-hidden ${client.borderColor}`}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${client.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8 gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 z-10 overflow-hidden p-3">
                    <img src={client.logoImg} alt={client.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/50 border border-white/5 backdrop-blur-sm">
                    <span className="text-[10px] font-bold tracking-wider text-foreground-muted uppercase">{client.category}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {client.name}
                  </h3>
                  <p className="text-foreground-muted font-light leading-relaxed mb-8 text-base md:text-lg">
                    {client.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-auto">
                  <div className="inline-flex items-center gap-2 text-accent">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-semibold tracking-wide uppercase">{client.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted Across Industries</h2>
          <p className="text-foreground-muted">Explore the ecosystem of businesses protected by FAST technology.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {clientCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-accent text-white shadow-[0_0_15px_rgba(56,152,212,0.4)]'
                : 'bg-surface border border-white/10 text-foreground-muted hover:text-white hover:border-white/30 hover:bg-surface/80'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filteredLogos.length > 0 ? (
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-32">
            <AnimatePresence mode="popLayout">
              {filteredLogos.map((logo, index) => (
                <motion.div
                  layout
                  key={logo.id}
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3,
                    delay: index * 0.03 // Efek masuk satu per satu
                  }}
                >
                  <SpotlightCard className="group h-full bg-surface/20 border-white/5 hover:border-white/20 p-6 sm:p-8 flex items-center justify-center aspect-[4/3] cursor-default rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4 + (index % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (index % 5) * 0.3
                      }}
                      className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        loading="lazy"
                        title={logo.name}
                        className="max-w-full max-h-[60px] md:max-h-[80px] w-auto object-contain filter opacity-40  group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110 drop-shadow-none group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      />
                    </motion.div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 mb-32 border border-white/10 rounded-3xl bg-surface/30">
            <p className="text-foreground-muted">More logos will be added soon.</p>
          </div>
        )}

        <div className="p-12 md:p-16 rounded-[2.5rem] bg-surface border border-white/10 text-center relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-5 z-0 transition-transform duration-1000 group-hover:scale-105" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your Assets?</h2>
            <p className="text-lg text-foreground-muted mb-10 max-w-2xl mx-auto font-light">Join our growing list of prestigious clients who trust FAST | PT. Famindo Alfa Spektrum Teknologi for their critical fire safety needs.</p>
            <a href="/#kontak" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:shadow-[0_0_40px_rgba(56,152,212,0.6)] hover:-translate-y-1 uppercase text-sm">
              Consult With Our Experts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBasePage;