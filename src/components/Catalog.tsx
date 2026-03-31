import { ArrowRight } from 'lucide-react';
import { products } from '../constants/catalogs';

const Catalog = () => {

  return (
    <section id="katalog" className="py-24 bg-background relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Katalog Produk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Solusi Proteksi Premium</h2>
          <p className="text-foreground-muted text-lg font-light leading-relaxed">
            Rangkaian teknologi fire safety tingkat tinggi yang direkayasa untuk memberikan keandalan maksimal di berbagai sektor industri kritis dan ekosistem modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-700 shadow-lg hover:shadow-[0_15px_40px_rgba(56,152,212,0.15)] h-[400px]">

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-90" />
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000 ease-out"
              />

              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-surface/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:-translate-y-2 transition-transform duration-500 shadow-inner">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">{product.title}</h3>
                <p className="text-foreground-muted mb-8 font-light leading-relaxed transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {product.description}
                </p>
                <a href="#kontak" className="inline-flex items-center gap-2 text-sm text-accent font-semibold tracking-wide hover:text-white transition-colors w-fit uppercase">
                  Pelajari Lebih Lanjut <ArrowRight size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Catalog;