import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, ShieldAlert, Cpu, Droplets } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: "Lithium Fire Killer Hartindo AF31",
      slug: "hartindo-af31",
      description: "The next level solution to face the rising risk of lithium-ion battery fire hazard. Eco-friendly, highly effective, and globally certified.",
      logo: "AF31",
      icon: <ShieldAlert size={32} className="text-accent" />,
      gridClass: "md:col-span-2 md:row-span-2", // Mendapat porsi paling besar
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
      gridClass: "md:col-span-3 md:row-span-1", // Memanjang di bagian bawah
      bgImage: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="brands" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Innovation & Technology</h2>
            <p className="text-foreground-muted text-lg font-light">
              Explore our specialized technological innovations designed to handle various levels of fire risks with absolute precision.
            </p>
          </div>
          <a href="#katalog" className="text-white hover:text-accent font-medium flex items-center gap-2 transition-colors whitespace-nowrap bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-accent/50 backdrop-blur-md">
            View Complete Catalog <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-6">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={`/brand/${brand.slug}`}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-700 shadow-lg hover:shadow-[0_0_40px_rgba(56,152,212,0.2)] bg-background flex flex-col justify-end p-8 ${brand.gridClass}`}
            >
              <div className="absolute inset-0 bg-background z-0">
                <img
                  src={brand.bgImage}
                  alt={`Produk unggulan ${brand.name} PT FAST`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              </div>

              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/40 transition-all duration-700 pointer-events-none z-0"></div>

              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:-translate-y-2 transition-all duration-500 shadow-inner ${index === 0 ? 'w-16 h-16' : ''}`}>
                    {brand.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:border-accent transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className={`font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {brand.name}
                </h3>

                <p className={`text-foreground-muted font-light leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${index === 0 ? 'text-base max-w-md' : 'text-sm line-clamp-2 group-hover:line-clamp-none'}`}>
                  {brand.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;