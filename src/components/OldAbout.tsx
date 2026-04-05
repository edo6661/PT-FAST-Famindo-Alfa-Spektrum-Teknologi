import { motion } from 'framer-motion';
import { Flame, Droplets, Wind, ShieldAlert, Heart, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const About = () => {
  const dangers = [
    {
      icon: <Flame size={24} className="text-accent" />,
      title: "Extremely High Temp",
      description: "Starting point of 1000°C up to 2000°C. Higher destructibility, too hot for regular fire extinguishers."
    },
    {
      icon: <Wind size={24} className="text-accent" />,
      title: "Toxic Gas",
      description: "Emits toxic gas containing hydrofluoric acid and other severely corrosive characteristics."
    },
    {
      icon: <ShieldAlert size={24} className="text-accent" />,
      title: "Extremely Difficult",
      description: "The vast water volume needed to combat lithium fire can cause massive drainage overload."
    },
    {
      icon: <Droplets size={24} className="text-accent" />,
      title: "Toxic Residual",
      description: "Residual from lithium-ion battery mixed with water becomes highly toxic for the environment."
    }
  ];

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
              At FAST, we believe true safety is built on sophisticated technology, unwavering trust, and a profound commitment to protecting lives and assets. We don't just install systems; we engineer peace of mind.
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

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">The Hidden Threat</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
              What Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground-muted to-gray-500">Lithium-Ion Battery?</span>
            </h2>

            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              Lithium batteries are rechargeable power sources widely used in portable electronics, electric vehicles, and renewable energy systems due to their high energy density.
            </p>

            <div className="pt-6 border-t border-white/10 mt-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Why Is Its Fire Different?</h3>
              <p className="text-accent italic font-light">
                Its aberrant characteristic makes this fire exceptionally volatile, more dangerous, and incredibly difficult to extinguish!
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dangers.map((danger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="group h-full bg-surface/40 border-white/5 hover:bg-surface/80 hover:border-accent/30">
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <div className="flex-shrink-0 mb-4 w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                      {danger.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white/90 group-hover:text-accent transition-colors">{danger.title}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed font-light">{danger.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 md:p-16 rounded-[2.5rem] bg-surface border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight">Your Safety, <span className="text-accent">Our Passion</span></h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            For us, fire safety is more than a service – it's a deep-seated passion. We are dedicated to pioneering innovations that offer superior protection, ensuring the well-being of individuals and the longevity of valuable investments.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;