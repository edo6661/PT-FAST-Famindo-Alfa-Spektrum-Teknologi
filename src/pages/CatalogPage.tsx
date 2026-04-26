import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { products, categories } from '../constants/catalogs';
import SEO from '../components/SEO';

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categoryId === activeCategory);

  return (
    <div className="pb-24 pt-32 bg-background min-h-screen relative overflow-hidden">
      <SEO
        title="Complete Catalog - FAST"
        description="Explore our complete range of advanced fire safety technology solutions."
        url="/catalog"
      />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface via-background to-background z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="mb-16 text-center flex flex-col items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-8 text-sm font-medium bg-surface/50 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md hover:bg-surface">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 mb-4">
            <Grid className="text-accent" size={24} />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Catalog</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === 'all' ? 'bg-accent text-white shadow-[0_0_15px_rgba(56,152,212,0.4)]' : 'bg-surface border border-white/10 text-foreground-muted hover:text-white hover:border-white/30'}`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id ? 'bg-accent text-white shadow-[0_0_15px_rgba(56,152,212,0.4)]' : 'bg-surface border border-white/10 text-foreground-muted hover:text-white hover:border-white/30'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const category = categories.find(c => c.id === product.categoryId);
            return (
              // UBAH: div diganti langsung menjadi Link agar iOS langsung merespons tap
              <Link
                to={`/catalog/${product.slug}`}
                key={product.id}
                className="group relative rounded-3xl bg-surface/40 border border-white/10 hover:bg-surface/80 transition-all duration-500 shadow-xl backdrop-blur-md overflow-hidden flex flex-col block"
              >
                {/* HAPUS Link absolute yang sebelumnya ada di sini */}

                <div className="h-64 overflow-hidden relative">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain p-4 bg-white/5 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent pointer-events-none"></div>

                  {category && (
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full text-accent z-20">
                      {category.name}
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-0 -mt-10 pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 pt-8">
                    {product.title}
                  </h3>
                  <p className="text-foreground-muted font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {product.description}
                  </p>

                  <div className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-accent transition-colors">
                    View Details
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;