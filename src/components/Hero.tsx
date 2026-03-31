import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-black z-0 opacity-90" />
      <div className="absolute inset-0 bg-[url('[https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2070&auto=format&fit=crop)')] bg-cover bg-center mix-blend-overlay z-0 opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">

        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-surface/60 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(56,152,212,0.15)]">
          <ShieldCheck size={18} className="text-accent" />
          <span className="text-xs md:text-sm font-semibold tracking-widest text-foreground-muted uppercase">
            Standar Baru Keselamatan Kebakaran
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
          Melindungi Aset Vital & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Ekosistem EV Anda.</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-3xl font-light leading-relaxed">
          "Every Second Matters." Kami menghadirkan teknologi fire safety mutakhir yang dirancang khusus untuk melindungi fasilitas industri bernilai tinggi dan infrastruktur kendaraan listrik dengan presisi tanpa kompromi.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a href="#katalog" className="bg-accent text-white px-8 py-4 rounded-btn font-semibold flex items-center justify-center gap-2 hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:shadow-[0_0_30px_rgba(56,152,212,0.6)] hover:-translate-y-1">
            Jelajahi Solusi
            <ArrowRight size={20} />
          </a>
          <a href="#kontak" className="bg-surface/50 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-btn font-semibold flex items-center justify-center hover:bg-surface hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
            Jadwalkan Audit
          </a>
        </div>

      </div>

    </section>
  );
};
export default Hero
