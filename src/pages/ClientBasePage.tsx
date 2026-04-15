import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Landmark, Shield, Zap, Car, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const ClientBasePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allClients = [
    {
      icon: <Landmark size={32} className="text-white" />,
      name: "2024 Presidential Inauguration",
      category: "Government & National Event",
      status: "Deployment Secured",
      desc: "FAST | PT. Famindo Alfa Spektrum Teknologi was called by the Ministry of State Secretariat to safeguard a momentous national event with precision and reliability. Lithium Fire Killer HARTINDO AF31 was distributed for the EV units escorting the international VVIP guests attending the presidential inauguration ceremony.",
      color: "from-blue-600/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      icon: <Shield size={32} className="text-white" />,
      name: "Securing Pope Francis's Visit",
      category: "VVIP Protection",
      status: "Absolute Zero Incident",
      desc: "Lithium Fire Killer HARTINDO AF31 was trusted to secure the vehicle that escorted the Pope during his historic visit to Indonesia, ensuring maximum safety against potential battery thermal runaway.",
      color: "from-amber-500/20 to-transparent",
      borderColor: "group-hover:border-amber-500/50"
    },
    {
      icon: <Zap size={32} className="text-white" />,
      name: "IKT Terminal & KTT IAF Bali",
      category: "International Summit",
      status: "Mass Fleet Protection",
      desc: "Lithium Fire Killer HARTINDO AF31 was trusted to secure hundreds of EV units at the IKT Terminal. These units were responsible for escorting international VVIP guests at the prestigious KTT IAF (Indonesia Africa Forum) event in Bali.",
      color: "from-accent/20 to-transparent",
      borderColor: "group-hover:border-accent/50"
    },
    {
      icon: <Car size={32} className="text-white" />,
      name: "Bluebird Group",
      category: "Corporate Fleet",
      status: "Official Supplier & Training",
      desc: "FAST was appointed as the official fire safety supplier for Bluebird Group and successfully conducted comprehensive fire safety training at the company's Mampang headquarters.",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "group-hover:border-cyan-500/50"
    }
  ];

  return (
    <div className="pb-24 pt-32 bg-background min-h-screen relative overflow-hidden">
      <SEO
        title="Our Client Base & Portfolios"
        description="Trusted by national institutions, international summits, and industry leaders. We engineer peace of mind for those who prioritize absolute safety."
        url="/clients"
      />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface via-background to-background z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {allClients.map((client, index) => (
            <div
              key={index}
              className={`group p-8 md:p-10 rounded-3xl bg-surface/40 border border-white/10 hover:bg-surface/80 transition-all duration-500 shadow-xl backdrop-blur-md relative overflow-hidden ${client.borderColor}`}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${client.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col h-full">

                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 z-10">
                    {client.icon}
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

        <div className="mt-32 p-12 md:p-16 rounded-[2.5rem] bg-surface border border-white/10 text-center relative overflow-hidden shadow-2xl group">
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