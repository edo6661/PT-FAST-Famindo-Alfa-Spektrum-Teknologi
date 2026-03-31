import { motion } from 'framer-motion';
import { Flame, Droplets, Wind, ShieldAlert } from 'lucide-react';

const About = () => {
  const dangers = [
    {
      icon: <Flame size={28} className="text-accent" />,
      title: "Extremely High Temperature",
      description: "Starting point of 1000 C and can go up to 2000 C, lithium fire has a higher destructibility and too hot to be handled by regular fire extinguishers."
    },
    {
      icon: <Wind size={28} className="text-accent" />,
      title: "Toxic Gas",
      description: "A burning lithium-ion battery emits toxic gas that contains hydrofluoric acid and other gases that have corrosive characteristics."
    },
    {
      icon: <ShieldAlert size={28} className="text-accent" />,
      title: "Extremely Difficult To Extinguish",
      description: "The effort and vast water volume that is needed to combat lithium fire can cause drainage overload."
    },
    {
      icon: <Droplets size={28} className="text-accent" />,
      title: "Toxic Residual",
      description: "Residual from lithium-ion battery that is mixed with water can be toxic and terrible for the environment."
    }
  ];

  return (
    <section id="profil" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-surface/30 border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-foreground-muted leading-relaxed font-light">
              We're on a mission to change people's lifestyle about safety and providing the best fire safety solution to mitigate lithium-ion battery risk.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-surface/30 border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-foreground-muted leading-relaxed font-light">
              We want to live in a world where people can feel safe and focus on pursuing the things that matter.
            </p>
          </motion.div>
        </div>

        {/* Lithium Battery Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">What Is It?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              What Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground-muted to-gray-600">Lithium-Ion Battery?</span>
            </h2>

            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              Lithium batteries are rechargeable power sources that utilize lithium ions to store and release energy. They are widely used in portable electronics, electric vehicles, and renewable energy systems.
            </p>
            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              The advantages of lithium batteries include their high energy density, which allows them to store more energy in a smaller and lighter package compared to other battery types and supports the transition to a more sustainable energy future.
            </p>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Why Is Lithium-Ion Battery Fire Different?</h3>
              <p className="text-accent italic">
                Its aberrant characteristic makes this fire more dangerous and difficult to extinguish!
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dangers.map((danger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 rounded-2xl bg-surface/40 backdrop-blur-md border border-white/5 hover:bg-surface/60 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(56,152,212,0.1)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex-shrink-0 mb-4 w-12 h-12 rounded-full bg-background/50 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {danger.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-accent transition-colors duration-300">{danger.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">{danger.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;