import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: "AeroFire Systems",
      slug: "aerofire-systems",
      description: "Pionir dalam sistem pemadam api berbasis aerosol ramah lingkungan untuk ruang server dan kelistrikan.",
      logo: "AF"
    },
    {
      name: "AquaShield Tech",
      slug: "aquashield-tech",
      description: "Teknologi water mist bertekanan tinggi yang mengisolasi panas dengan konsumsi air minimal.",
      logo: "AQ"
    },
    {
      name: "PyroDetect Pro",
      slug: "pyrodetect-pro",
      description: "Sensor deteksi asap dan panas pintar dengan integrasi IoT untuk respons hitungan milidetik.",
      logo: "PD"
    },
    {
      name: "EvacFlow",
      slug: "evacflow",
      description: "Sistem ventilasi cerdas dan tata udara darurat untuk memastikan jalur evakuasi aman dari asap beracun.",
      logo: "EF"
    }
  ];

  return (
    <section id="brands" className="py-24 bg-surface relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Partner & Brand Global</h2>
            <p className="text-foreground-muted text-lg font-light">
              Kami berkolaborasi dengan manufaktur teknologi fire safety terkemuka di dunia untuk menghadirkan solusi perlindungan tanpa kompromi.
            </p>
          </div>
          <Link to="/brands" className="text-accent hover:text-white font-medium flex items-center gap-2 transition-colors whitespace-nowrap bg-background/50 px-6 py-3 rounded-full border border-border/50 hover:border-accent/50">
            Lihat Semua Brand <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={`/brand/${brand.slug}`}
              className="group block bg-background/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-surface hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_15px_40px_rgba(56,152,212,0.15)] relative overflow-hidden"
            >

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500"></div>

              <div className="w-16 h-16 rounded-xl bg-surface/80 border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-8 group-hover:border-accent/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,152,212,0.3)] transition-all duration-500">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 group-hover:from-white group-hover:to-accent">{brand.logo}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-accent transition-colors duration-300">
                {brand.name}
              </h3>

              <p className="text-foreground-muted text-sm leading-relaxed mb-8 font-light">
                {brand.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                Detail Produk <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;