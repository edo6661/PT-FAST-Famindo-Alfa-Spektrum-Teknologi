import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Download, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import { products, type ProductVariant } from '../constants/catalogs';

const VariantCard = ({ variant }: { variant: ProductVariant }) => {
  const [activeView, setActiveView] = useState<'front' | 'back' | 'left' | 'right'>('front');

  return (
    <div className="flex flex-col h-full bg-surface/40 border border-white/10 hover:border-accent/30 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 shadow-xl group">

      {/* Cek keberadaan images dengan aman berkat typing */}
      {variant.images && (
        <div className="mb-8 flex flex-col items-center">
          <div className="w-full aspect-square max-h-[300px] relative flex items-center justify-center bg-background/50 rounded-2xl overflow-hidden border border-white/5 mb-4 group/image">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-50"></div>
            <img
              src={variant.images[activeView]}
              alt={`${variant.name || variant.weight} - ${activeView} view`}
              className="w-full h-full object-contain p-4 transform transition-all duration-500 group-hover/image:scale-110 drop-shadow-2xl"
            />
            <span className="absolute top-3 left-3 bg-surface/80 backdrop-blur-md border border-white/10 text-[9px] font-bold px-2 py-1 rounded text-foreground-muted uppercase tracking-wider">
              {activeView}
            </span>
          </div>

          <div className="flex justify-center gap-2 w-full">
            {(['front', 'back', 'left', 'right'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex-1 ${activeView === view
                  ? 'bg-accent text-white shadow-[0_0_10px_rgba(56,152,212,0.4)] border border-accent'
                  : 'bg-background border border-white/10 text-foreground-muted hover:text-white hover:border-white/30'
                  }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Detail Teks di bawah */}
      <div className="mt-auto">
        <h4 className="text-xl font-bold text-white/90 mb-3 group-hover:text-accent transition-colors">
          {variant.name || variant.weight}
        </h4>
        {variant.desc && (
          <p className="text-sm text-foreground-muted font-light leading-relaxed">
            {variant.desc}
          </p>
        )}
      </div>
    </div>
  );
};

const BrandDetail = () => {
  const { slug } = useParams();
  const brandData = products.find(p => p.slug === slug);

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

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": brandData.title,
    "image": brandData.image,
    "description": brandData.description,
    "brand": {
      "@type": "Brand",
      "name": "FAST | PT. Famindo Alfa Spektrum Teknologi"
    },
    "slogan": brandData.tagline
  };

  return (
    <div className="py-24 bg-background min-h-screen ">
      <SEO
        title={brandData.title}
        description={brandData.description}
        image={brandData.image}
        url={`/${slug}`}
        type="product"
        schemaMarkup={productSchema}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-background z-0" />
        <img
          src={brandData.image}
          alt={brandData.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 py-16">

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Zap size={16} className="text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Advanced Solution</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight max-w-4xl leading-tight">
            {brandData.title}
          </h1>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300 font-medium max-w-3xl leading-relaxed">
            {brandData.tagline}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">

            {/* Kiri: Overview & Features */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  System Overview
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed font-light">
                  {brandData.description}
                </p>
              </div>

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
                        <span className="text-foreground-muted group-hover:text-white/90 transition-colors font-light leading-relaxed text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Kanan: CTA Secure This Technology */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl bg-surface border border-accent/30 shadow-[0_10px_40px_rgba(56,152,212,0.15)] group sticky top-28">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/30 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-accent mb-6">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Secure This Technology</h3>
                  <p className="text-foreground-muted text-sm mb-8 font-light leading-relaxed">
                    Request a full technical catalog or consult directly with our enterprise safety engineers to secure your assets.
                  </p>

                  <div className="space-y-4">
                    {/* @ts-expect-error property might optionally exist in the schema */}
                    {brandData.brochureUrl && (
                      <a
                        // @ts-expect-error property might optionally exist in the schema
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
                      href={`https://wa.me/6281290003278?text=Halo%20tim%20PT.%20FAST,%20saya%20tertarik%20dengan%20solusi%20teknologi%20${encodeURIComponent(brandData.title)}.`}
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

          {/* BAGIAN BAWAH: Product Variants */}
          {brandData.variants && brandData.variants.length > 0 && (
            <div className="pt-12 border-t border-white/10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Available Variants</h3>
                <p className="text-foreground-muted font-light max-w-2xl mx-auto">
                  Explore our range of purpose-built configurations designed to meet specific industrial and commercial requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {/* Melewati tipe ProductVariant murni tanpa any */}
                {brandData.variants.map((variant: ProductVariant, index: number) => (
                  <VariantCard key={index} variant={variant} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default BrandDetail;