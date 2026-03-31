import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../constants/catalogs';

const Catalog = () => {
  return (
    <section id="katalog" className="py-24 bg-background relative overflow-hidden">

      {/* Ambient Background - Optimasi untuk tidak lag */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0 will-change-transform"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm mb-6 shadow-sm hover:border-accent/30 transition-colors cursor-default">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Embark On Your Safety Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">No Fire <span className="text-accent">No Fear</span></h2>
          <p className="text-foreground-muted text-lg font-light leading-relaxed">
            High-level fire safety technologies engineered to provide maximum reliability across critical industrial sectors and modern ecosystems.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const gridSpan = index < 2 ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-3xl bg-surface border border-white/5 hover:border-accent/50 transition-all duration-700 shadow-lg hover:shadow-[0_20px_50px_rgba(56,152,212,0.2)] h-[450px] md:col-span-1 ${gridSpan} will-change-transform`}
              >

                {/* Background Image & Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10" />

                <img
                  src={product.image}
                  alt={`Teknologi ${product.title} PT FAST`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0 will-change-transform"
                />

                {/* Content Details */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform transition-transform duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:-translate-y-3 group-hover:border-accent/50 group-hover:shadow-[0_0_25px_rgba(56,152,212,0.4)] transition-all duration-500 ease-[0.16,1,0.3,1]">
                    {product.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="text-foreground-muted mb-6 font-light leading-relaxed transform translate-y-4 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] line-clamp-3">
                    {product.description}
                  </p>

                  {/* Call to Action Button */}
                  <div className="overflow-hidden">
                    <a href={`/brand/${product.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-sm text-accent font-semibold tracking-wide hover:text-white transition-colors w-fit uppercase transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-[0.16,1,0.3,1]">
                      Explore Tech <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Catalog;