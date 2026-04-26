import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { products, categories } from '../constants/catalogs';
import SEO from '../components/SEO';

const CategoryDetailPage = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.categoryId === category?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Category Not Found</h1>
        <Link to="/catalog" className="bg-accent text-white px-6 py-2 rounded-full font-medium">Back to Catalog</Link>
      </div>
    );
  }

  const Icon = category.icon || Layers;

  return (
    <div className="py-24 pt-32 bg-background min-h-screen relative overflow-hidden">
      <SEO title={`${category.name} Category - FAST`} description={category.description} url={`/category/${slug}`} />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="mb-16">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-accent">
              <Icon size={32} />
            </div>
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs">Category</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{category.name}</h1>
            </div>
          </div>
          <p className="text-xl text-foreground-muted max-w-3xl font-light leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <Link
              to={`/catalog/${product.slug}`}
              key={product.id}
              className="group relative rounded-3xl bg-surface/40 border border-white/10 hover:bg-surface/80 transition-all duration-500 shadow-xl overflow-hidden flex flex-col block"
            >
              <div className="h-56 overflow-hidden relative">
                {/* Mengubah object-cover menjadi object-contain jika menggunakan foto produk utuh tanpa background */}
                <img src={product.image} alt={product.title} className="w-full h-full object-contain p-4 bg-white/5 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-0 -mt-10 pointer-events-none">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{product.title}</h3>
                <p className="text-foreground-muted font-light leading-relaxed mb-6 line-clamp-3 flex-grow text-sm">{product.description}</p>

                <div className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  View Details <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
          {categoryProducts.length === 0 && (
            <div className="col-span-full text-center py-12 border border-white/10 rounded-3xl bg-surface/30">
              <p className="text-foreground-muted">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default CategoryDetailPage;