import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { categories } from '../constants/catalogs';
import SpotlightCard from './SpotlightCard';

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <section id="katalog" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-sm mb-6 shadow-sm cursor-default">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">{t('catalog.tagline')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            {t('catalog.title')} <span className="text-accent">{t('catalog.titleHighlight')}</span>
          </h2>
          <p className="text-foreground-muted text-lg font-light leading-relaxed">
            {t('catalog.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`h-[450px] md:col-span-1 transform-gpu`}
              >
                <SpotlightCard className="group h-full w-full hover:border-accent/40 hover:shadow-[0_15px_40px_rgba(56,152,212,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-2xl bg-surface/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent mb-6 transform-gpu transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(56,152,212,0.3)]">
                      <IconComponent size={32} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                      {t(`catalog.categories.${category.id}.name`, { defaultValue: category.name })}
                    </h3>

                    <p className="text-foreground-muted mb-6 font-light leading-relaxed transform-gpu translate-y-4 opacity-70 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 line-clamp-3">
                      {t(`catalog.categories.${category.id}.desc`, { defaultValue: category.description })}
                    </p>

                    <div className="overflow-hidden h-8">
                      <a
                        href={`/category/${category.slug}`}
                        aria-label={`Pelajari lebih lanjut tentang teknologi ${category.name}`}
                        className="inline-flex items-center gap-2 text-sm text-accent font-semibold tracking-wide hover:text-white transition-colors uppercase transform-gpu translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500"
                      >
                        {t('catalog.explore')} <ArrowRight size={18} className="transform-gpu transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;