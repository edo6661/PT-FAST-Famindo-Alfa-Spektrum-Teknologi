import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Download, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { brands, type BrandProduct } from '../constants/brands';
import SEO from '../components/SEO';

const BrandDetail = () => {
  const { slug } = useParams();
  const brandData = slug && brands[slug] ? brands[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!brandData) {
    return (
      <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center">
        <SEO title="Product Not Found" description="The safety solution you are looking for might have been moved." />
        <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4">
          <ShieldCheck size={40} className="text-foreground-muted" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">Product Not Found</h1>
        <p className="text-foreground-muted max-w-md">The safety solution you are looking for might have been moved or doesn't exist.</p>
        <Link to="/" className="mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Headquarters
        </Link>
      </div>
    );
  }

  // Generate Schema Markup khusus untuk produk ini
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": brandData.name,
    "image": brandData.heroImage,
    "description": brandData.description,
    "brand": {
      "@type": "Brand",
      "name": "FAST | PT. Famindo Alfa Spektrum Teknologi"
    },
    "slogan": brandData.tagline
  };

  return (
    <div className="pb-24 bg-background min-h-screen">
      <SEO
        title={brandData.name}
        description={brandData.description}
        image={brandData.heroImage}
        url={`/${slug}`}
        type="product"
        schemaMarkup={productSchema}
      />
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-background z-0" />
        <img
          src={brandData.heroImage}
          alt={brandData.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-10 text-sm font-medium bg-surface/50 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md hover:bg-surface">
            <ArrowLeft size={16} /> Back to Innovation & Technology
          </Link>

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Zap size={16} className="text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Advanced Solution</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight max-w-4xl leading-tight">
            {brandData.name}
          </h1>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300 font-medium max-w-3xl leading-relaxed">
            {brandData.tagline}
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-7 space-y-16">

              <div>
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  System Overview
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed font-light">
                  {brandData.description}
                </p>
              </div>

              {/* Pastikan features di-render dengan aman */}
              {brandData.features && brandData.features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                    Core Capabilities
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {brandData.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-surface/40 border border-white/5 hover:border-accent/30 hover:bg-surface/60 transition-all duration-300 backdrop-blur-sm group">
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle2 size={18} className="text-accent" />
                        </div>
                        <span className="text-foreground-muted group-hover:text-white/90 transition-colors font-light leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div className="lg:col-span-5 space-y-8">

              <div className="bg-surface/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
                <h3 className="text-xl font-bold mb-8 text-white">Product Variants</h3>
                <div className="space-y-6">
                  {brandData.products.map((product: BrandProduct, index: number) => (
                    <div key={index} className="group border-b border-white/10 last:border-0 pb-6 last:pb-0 relative">

                      <h4 className="text-lg font-semibold text-white/90 mb-2 group-hover:text-accent transition-colors">{product.name}</h4>
                      <p className="text-sm text-foreground-muted font-light leading-relaxed">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden p-8 rounded-3xl bg-surface border border-accent/30 shadow-[0_10px_40px_rgba(56,152,212,0.15)] group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/30 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">Secure This Technology</h3>
                  <p className="text-foreground-muted text-sm mb-8 font-light leading-relaxed">Request a full technical catalog or consult directly with our enterprise safety engineers.</p>

                  <div className="space-y-4">
                    {/* Render tombol download HANYA jika brochureUrl tersedia */}
                    {brandData.brochureUrl && (
                      <a
                        href={brandData.brochureUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group/btn text-sm uppercase tracking-wide"
                      >
                        <Download size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                        Download Brochure
                      </a>
                    )}
                    <a
                      href="https://wa.me/6281290003278?text=Halo%20tim%20PT.%20FAST,%20saya%20tertarik%20dengan%20solusi%20teknologi%20ini."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:shadow-[0_0_30px_rgba(56,152,212,0.6)] hover:-translate-y-1 text-sm uppercase tracking-wide"
                    >
                      <MessageSquare size={18} />
                      Contact Enterprise Sales
                    </a>
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

export default BrandDetail;