import { motion, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  // Tambahkan tipe Variants pada variabel animasi
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-20 z-0 scale-105 transform transition-transform duration-[20s] hover:scale-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0" />

      {/* Glowing Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/20 rounded-full blur-[120px] md:blur-[150px] pointer-events-none z-10"></div>

      <motion.div
        className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(56,152,212,0.2)] hover:scale-105 transition-transform cursor-default">
          <ShieldCheck size={18} className="text-accent" />
          <span className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase">
            Every Second Matters
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight max-w-5xl tracking-tight text-white">
          Securing Businesses <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-300 drop-shadow-lg">
            One At A Time.
          </span>
        </motion.h1>

        {/* Sub-headline / Copywriting Refinement */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground-muted mb-10 max-w-3xl font-light leading-relaxed">
          Starting our journey in 2022, we have become the trusted fire safety partner for enterprises that prioritize absolute protection. The rise of lithium-ion technology comes with unprecedented risks, <span className="text-white font-medium">but we are here to secure your future.</span>
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-20">
          <a href="#katalog" className="bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:shadow-[0_0_30px_rgba(56,152,212,0.6)] hover:-translate-y-1 group">
            Get Our Catalog
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#kontak" className="bg-surface/50 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
            Consult Now
          </a>
        </motion.div>

        {/* Social Proof / Trusted By (Mini Banner) */}
        <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 w-full max-w-5xl">
          <p className="text-xs md:text-sm text-foreground-muted font-medium uppercase tracking-widest mb-6">Trusted to Secure High-Profile Events & Assets</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <span className="text-base md:text-xl font-bold font-heading tracking-wide">2024 Presidential Inauguration</span>
            <span className="text-base md:text-xl font-bold font-heading tracking-wide">Pope Francis's Visit</span>
            <span className="text-base md:text-xl font-bold font-heading tracking-wide">Bluebird Group</span>
            <span className="text-base md:text-xl font-bold font-heading tracking-wide">KTT IAF Bali</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;