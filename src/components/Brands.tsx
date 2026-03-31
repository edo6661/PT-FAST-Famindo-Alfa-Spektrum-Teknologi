import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, ShieldAlert, Cpu, Droplets } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: "Lithium Fire Killer Hartindo AF31",
      slug: "hartindo-af31",
      description: "The next level solution to face the rising risk of lithium-ion battery fire hazard. Eco-friendly, highly effective, and globally certified.",
      logo: "AF31",
      icon: <ShieldAlert size={32} className="text-accent" />,
      gridClass: "md:col-span-2 md:row-span-2",
      bgImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "BALLISTIC App",
      slug: "ballistic-app",
      description: "Mobile application that monitors and provides warnings of lithium battery conditions using advanced IoT technology.",
      logo: "APP",
      icon: <Cpu size={24} className="text-white" />,
      gridClass: "md:col-span-1 md:row-span-1",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "USS For EV",
      slug: "uss-ev",
      description: "Undercarriage Suppressions System jet-spraying its content directly under EV cars.",
      logo: "USS",
      icon: <Zap size={24} className="text-white" />,
      gridClass: "md:col-span-1 md:row-span-1",
      bgImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "FLAT Hartindo AF11E",
      slug: "flat-af11e",
      description: "A sophisticated liquid gas that can put off several classes of fire without leaving any destructive residue behind.",
      logo: "FLAT",
      icon: <Droplets size={28} className="text-white" />,
      gridClass: "md:col-span-3 md:row-span-1",
      bgImage: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
  return (
    <section id="brands" className="py-24 bg-surface relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none will-change-transform"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Innovation & <span className="text-accent">Technology</span></h2>
            <p className="text-foreground-muted text-lg font-light leading-relaxed">
              Explore our specialized technological innovations designed to handle various levels of fire risks with absolute precision.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: customEase }}
            href="#katalog"
            className="text-white hover:text-accent font-medium flex items-center gap-2 transition-all duration-300 whitespace-nowrap bg-background/50 px-7 py-3.5 rounded-full border border-white/10 hover:border-accent/50 hover:bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(56,152,212,0.2)] group backdrop-blur-md"
          >
            View Complete Catalog <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: customEase }}
              className={`h-full ${brand.gridClass} will-change-transform`}
            >
              <Link
                to={`/brand/${brand.slug}`}
                className="group relative w-full h-full rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-700 shadow-lg hover:shadow-[0_20px_50px_rgba(56,152,212,0.15)] bg-background flex flex-col justify-end p-8 block"
              >
                <div className="absolute inset-0 bg-background z-0">
                  <img
                    src={brand.bgImage}
                    alt={`Produk unggulan ${brand.name} PT FAST`}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/30 transition-colors duration-700 pointer-events-none z-0"></div>

                <div className="relative z-10 w-full transform transition-transform duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(56,152,212,0.3)] transition-all duration-500 ease-[0.16,1,0.3,1] ${index === 0 ? 'w-16 h-16' : ''}`}>
                      {brand.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:border-accent transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1] shadow-lg">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <h3 className={`font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 tracking-tight ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {brand.name}
                  </h3>

                  <p className={`text-foreground-muted font-light leading-relaxed transform translate-y-3 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] ${index === 0 ? 'text-base max-w-md' : 'text-sm line-clamp-2 group-hover:line-clamp-none'}`}>
                    {brand.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;