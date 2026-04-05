import { motion } from 'framer-motion';
import { Heart, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const About = () => {


  return (
    <section id="profil" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-64 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Protecting What Matters Most with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Advanced Fire Solutions</span>
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              FAST combines advanced technology and trust to protect what matters most. We don't just install systems; we engineer peace of mind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* p-8 md:p-10 dipindahkan ke pembungkus konten */}
            <SpotlightCard className="group h-full bg-surface/50 border-white/5 hover:border-accent/30">
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors shadow-inner relative z-10">
                  <ShieldCheck size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Our Mission</h3>
                <p className="text-foreground-muted leading-relaxed font-light text-lg relative z-10">
                  We're on a mission to change people's lifestyle about safety and providing the best fire safety solution to mitigate lithium-ion battery risk.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="group h-full bg-surface/50 border-white/5 hover:border-accent/30">
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors shadow-inner relative z-10">
                  <Heart size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Our Vision</h3>
                <p className="text-foreground-muted leading-relaxed font-light text-lg relative z-10">
                  We want to live in a world where people can feel safe and focus on pursuing the things that matter.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;