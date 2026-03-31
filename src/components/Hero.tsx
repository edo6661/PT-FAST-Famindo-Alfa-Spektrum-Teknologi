import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0" />

      <div className="absolute inset-0 bg-[url('[https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2070&auto=format&fit=crop)')] bg-cover bg-center mix-blend-luminosity opacity-10 z-0 scale-105 transform transition-transform duration-[20s] hover:scale-100 will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-0" />

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/20 rounded-full blur-[120px] md:blur-[150px] pointer-events-none z-10 will-change-transform"
      />

      <motion.div
        className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(56,152,212,0.2)] hover:shadow-[0_0_30px_rgba(56,152,212,0.4)] transition-shadow duration-500 cursor-default">
          <ShieldCheck size={18} className="text-accent" />
          <span className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase flex items-center gap-3">
            Every Second Matters <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span> Securing Your Safety
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight max-w-5xl tracking-tight text-white text-balance">
          Securing Businesses <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-300 drop-shadow-lg">
            One At A Time.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground-muted mb-4 max-w-3xl font-light leading-relaxed text-pretty">
          Starting our journey as a fire safety company from 2022, we have expanded our client base and trusted by big businesses that care and prioritize their safety.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground-muted mb-10 max-w-3xl font-light leading-relaxed text-pretty">
          We Provide Complete Advanced Solutions To Mitigate The Risk From Lithium-ion Battery Fire. The Rise Of Lithium-Ion Battery Technology Comes With A Risk. <span className="text-white font-medium">But We're Here To Protect Your Safety.</span>
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-20">
          <a href="#katalog" className="bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:shadow-[0_0_40px_rgba(56,152,212,0.6)] hover:-translate-y-1 group">
            Get Our Catalog
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#kontak" className="bg-surface/50 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
            Consult Now
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 w-full max-w-5xl relative">
          <p className="text-xs md:text-sm text-foreground-muted font-medium uppercase tracking-widest mb-8">Trusted to Secure High-Profile Events & Assets</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <span className="text-base md:text-xl font-bold font-heading tracking-wide hover:text-accent transition-colors cursor-default">2024 Presidential Inauguration</span>
            <span className="text-base md:text-xl font-bold font-heading tracking-wide hover:text-accent transition-colors cursor-default">Pope Francis's Visit</span>
            <span className="text-base md:text-xl font-bold font-heading tracking-wide hover:text-accent transition-colors cursor-default">Bluebird Group</span>
            <span className="text-base md:text-xl font-bold font-heading tracking-wide hover:text-accent transition-colors cursor-default">KTT IAF Bali</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;