import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Weight } from 'lucide-react';
import { products, categories } from '../constants/catalogs';
import SEO from '../components/SEO';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const category = categories.find(c => c.id === product?.categoryId);

  // State untuk melacak view aktif dari setiap varian (front, back, left, right)
  const [activeView, setActiveView] = useState<Record<string, 'front' | 'back' | 'left' | 'right'>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
        <Link to="/catalog" className="bg-accent text-white px-6 py-2 rounded-full font-medium">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="pb-24 bg-background min-h-screen">
      <SEO title={`${product.title} - FAST`} description={product.description} url={`/catalog/${slug}`} image={product.image} />

      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end border-b border-white/5 overflow-hidden">
        <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 pb-12">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-8 text-sm font-medium bg-surface/50 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md hover:bg-surface">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>

          {category && (
            <Link to={`/category/${category.slug}`} className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm hover:bg-accent/20 transition-colors">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">{category.name}</span>
            </Link>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl leading-tight">
            {product.title}
          </h1>
          {product.tagline && (
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300 font-medium max-w-3xl leading-relaxed mt-4">
              {product.tagline}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Kolom Kiri: Deskripsi, Fitur, Varian, Partnership */}
            <div className="lg:col-span-2 space-y-12">

              {/* Product Description & Features */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  System Overview
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed font-light mb-8">
                  {product.description}
                </p>

                {/* Menampilkan Daftar Fitur / Sertifikasi SNI */}
                {product.features && product.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-surface/40 border border-white/5 hover:border-accent/30 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <CheckCircle2 size={18} className="text-accent" />
                        </div>
                        <span className="text-foreground-muted font-light text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Available Variants (Interactive) */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                    Available Variants
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.variants.map((variant) => (
                      <div key={variant.id} className="flex flex-col h-full bg-surface/40 border border-white/10 hover:border-accent/30 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 shadow-xl group">

                        {/* PERBAIKAN TS ERROR: Pengecekan aman menggunakan operator 'in' */}
                        {'images' in variant && variant.images ? (
                          <div className="mb-8 flex flex-col items-center">
                            <div className="w-full aspect-square max-h-[250px] relative flex items-center justify-center bg-background/50 rounded-2xl overflow-hidden border border-white/5 mb-4 group/image">
                              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-50"></div>
                              <img
                                src={variant.images[activeView[variant.id] || 'front']}
                                alt={`${'name' in variant ? variant.name : variant.weight} - ${activeView[variant.id] || 'front'} view`}
                                className="w-full h-full object-contain p-4 transform transition-all duration-500 group-hover/image:scale-110 drop-shadow-2xl"
                              />
                              <span className="absolute top-3 left-3 bg-surface/80 backdrop-blur-md border border-white/10 text-[9px] font-bold px-2 py-1 rounded text-foreground-muted uppercase tracking-wider">
                                {activeView[variant.id] || 'front'}
                              </span>
                            </div>

                            <div className="flex justify-center gap-2 w-full">
                              {(['front', 'back', 'left', 'right'] as const).map((view) => (
                                <button
                                  key={view}
                                  onClick={() => setActiveView(prev => ({ ...prev, [variant.id]: view }))}
                                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex-1 ${(activeView[variant.id] || 'front') === view
                                      ? 'bg-accent text-white shadow-[0_0_10px_rgba(56,152,212,0.4)] border border-accent'
                                      : 'bg-background border border-white/10 text-foreground-muted hover:text-white hover:border-white/30'
                                    }`}
                                >
                                  {view}
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : (
                          /* Jika varian tidak punya gambar (seperti Fire Blanket) */
                          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 border border-white/5">
                            <Weight size={24} />
                          </div>
                        )}

                        {/* Detail Teks Varian */}
                        <div className="mt-auto">
                          {'weight' in variant && variant.weight && (
                            <span className="block text-xs text-foreground-muted uppercase tracking-wider mb-2">Weight: {variant.weight}</span>
                          )}
                          <h4 className="text-xl font-bold text-white/90 mb-3 group-hover:text-accent transition-colors">
                            {'name' in variant ? variant.name : variant.weight}
                          </h4>
                          {'desc' in variant && variant.desc && (
                            <p className="text-sm text-foreground-muted font-light leading-relaxed">
                              {variant.desc}
                            </p>
                          )}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Partnership */}
              {/* @ts-expect-error partners might be optionally missing but that is okay */}
              {product.partners && product.partners.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                    Official Partnership
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    {/* @ts-expect-error mapping over partners safely */}
                    {product.partners.map((partner, index) => (
                      <div key={index} className="bg-surface/50 border border-white/10 px-6 py-4 rounded-2xl hover:border-accent/30 hover:bg-surface/80 transition-all duration-300 group">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          title={partner.name}
                          className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Kolom Kanan: Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="bg-surface/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl sticky top-28">
                <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-6 text-accent">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Interested in this product?</h3>
                <p className="text-foreground-muted text-sm mb-8 font-light leading-relaxed">
                  Contact our enterprise sales team to discuss technical specifications and bulk orders for your facility.
                </p>
                <a
                  href={`https://wa.me/6281290003278?text=Halo%20tim%20FAST,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:-translate-y-1 text-sm uppercase tracking-wide"
                >
                  Contact Sales
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-foreground-muted">
                    <CheckCircle2 size={16} className="text-accent" /> Premium Quality Assured
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground-muted">
                    <CheckCircle2 size={16} className="text-accent" /> Certified Technology
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;