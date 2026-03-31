import { motion } from 'framer-motion';
import { Flame, Droplets, Wind, ShieldAlert, Heart, ShieldCheck } from 'lucide-react';

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
      title: "Extremely Difficult",
      description: "The effort and vast water volume that is needed to combat lithium fire can cause drainage overload."
    },
    {
      icon: <Droplets size={28} className="text-accent" />,
      title: "Toxic Residual",
      description: "Residual from lithium-ion battery that is mixed with water can be toxic and terrible for the environment."
    }
  ];

  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];


  return (
    <section id="profil" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none will-change-transform"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-900/10 rounded-full blur-[150px] pointer-events-none will-change-transform"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Protecting What Matters Most with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Advanced Fire Solutions</span>
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed font-light mb-6">
              At FAST, we believe true safety is built on sophisticated technology, unwavering trust, and a profound commitment to protecting lives and assets. As a leading provider of advanced fire safety solutions, we don't just install systems; we engineer peace of mind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="group p-10 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-md hover:bg-surface/70 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_10px_40px_rgba(56,152,212,0.1)] will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500 shadow-inner">
              <ShieldCheck size={28} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">Our Mission</h3>
            <p className="text-foreground-muted leading-relaxed font-light text-lg">
              We're on a mission to change people's lifestyle about safety and providing the best fire safety solution to mitigate lithium-ion battery risk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="group p-10 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-md hover:bg-surface/70 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_10px_40px_rgba(56,152,212,0.1)] will-change-transform"
          >
            <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500 shadow-inner">
              <Heart size={28} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">Our Vision</h3>
            <p className="text-foreground-muted leading-relaxed font-light text-lg">
              We want to live in a world where people can feel safe and focus on pursuing the things that matter.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm cursor-default">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">The Hidden Threat</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
              What Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground-muted to-gray-500">Lithium-Ion Battery?</span>
            </h2>

            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              Lithium batteries are rechargeable power sources that utilize lithium ions to store and release energy. They are widely used in portable electronics, electric vehicles, and renewable energy systems.
            </p>
            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              While they offer high energy density and support a sustainable future, their aberrant characteristic makes them exceptionally volatile when compromised.
            </p>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Why Is Lithium-Ion Battery Fire Different?</h3>
              <p className="text-accent italic font-light">
                Its aberrant characteristic makes this fire more dangerous and difficult to extinguish!
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dangers.map((danger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: customEase }}
                className="group p-6 rounded-2xl bg-surface/30 backdrop-blur-md border border-white/5 hover:bg-surface/80 hover:border-accent/40 hover:shadow-[0_15px_35px_rgba(56,152,212,0.15)] hover:-translate-y-1 transition-all duration-500 will-change-transform"
              >
                <div className="flex-shrink-0 mb-5 w-14 h-14 rounded-xl bg-surface border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500 shadow-inner">
                  {danger.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white/90 group-hover:text-accent transition-colors duration-300">{danger.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed font-light">{danger.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mt-16 p-10 md:p-16 rounded-[2.5rem] bg-surface border border-white/10 text-center relative overflow-hidden shadow-2xl group hover:border-accent/30 transition-colors duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-700"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight">Your Safety, <span className="text-accent">Our Passion</span></h2>
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            For us, fire safety is more than a service – it's a deep-seated passion. We are dedicated to pioneering innovations that offer superior protection, ensuring the well-being of individuals and the longevity of valuable investments. Our team of highly skilled professionals is committed to upholding the highest standards of integrity, quality, and service.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;