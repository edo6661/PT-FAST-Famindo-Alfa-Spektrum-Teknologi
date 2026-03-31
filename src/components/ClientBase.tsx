import { Landmark, Shield, Car, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const ClientBase = () => {
  const clients = [
    {
      icon: <Landmark size={32} className="text-white" />,
      name: "2024 Presidential Inauguration",
      desc: "Safeguarded the momentous national event. LFK Hartindo AF31 distributed for EV units escorting international VVIP guests.",
      gradient: "from-blue-600/20"
    },
    {
      icon: <Shield size={32} className="text-white" />,
      name: "Securing Pope Francis's Visit",
      desc: "Trusted to secure the vehicle that escorted the Pope during his historic visit in Indonesia, guaranteeing absolute safety.",
      gradient: "from-amber-500/20"
    },
    {
      icon: <Zap size={32} className="text-white" />,
      name: "IKT Terminal & KTT IAF Bali",
      desc: "Secured hundreds of EV units at IKT Terminal escorting international VVIP guests at the prestigious KTT IAF event.",
      gradient: "from-accent/20"
    },
    {
      icon: <Car size={32} className="text-white" />,
      name: "Bluebird Group",
      desc: "Appointed as the official fire safety supplier and successfully conducted training at the company's Mampang headquarters.",
      gradient: "from-cyan-500/20"
    },
  ];

  return (
    <section id="klien" className="py-24 bg-surface relative border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wide">Engineered for Excellence, <span className="text-accent">Proven in Practice</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"></div>
          <p className="text-foreground-muted mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            Our expertise extends beyond conventional fire safety. We specialize in designing, implementing, and maintaining cutting-edge solutions tailored to the most demanding environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="group relative p-8 h-full bg-background/40 border-white/5 hover:border-white/10 flex flex-col">
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${client.gradient} to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center transform-gpu group-hover:-translate-y-1 transition-transform duration-300">
                  {client.icon}
                </div>

                <h3 className="relative z-10 text-lg font-bold text-white/90 mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                  {client.name}
                </h3>

                <p className="relative z-10 text-sm text-foreground-muted font-light leading-relaxed flex-grow">
                  {client.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <Link
            to="/clients"
            aria-label="Lihat portofolio lengkap klien korporat dan institusi PT FAST"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-surface hover:border-accent/40 transition-all duration-300 group"
          >
            View Complete Portfolios
            <ArrowRight size={18} className="transform-gpu transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientBase;