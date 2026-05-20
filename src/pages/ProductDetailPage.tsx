import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CheckCircle2, Download, MessageSquare, ShieldCheck, Weight, Zap, MapPin, X, ShoppingCart } from 'lucide-react';
import { products, categories, type ProductVariant, type ProductPartner } from '../constants/catalogs';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const VariantCard = ({ variant, productId }: { variant: ProductVariant, productId: string }) => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState<'front' | 'back' | 'left' | 'right'>('front');

  return (
    <div className="flex flex-col h-full bg-surface/40 border border-white/10 hover:border-accent/30 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 shadow-xl group">
      {variant.images ? (
        <div className="mb-8 flex flex-col items-center">
          <div className="w-full aspect-square max-h-[250px] md:max-h-[300px] relative flex items-center justify-center bg-background/50 rounded-2xl overflow-hidden border border-white/5 mb-4 group/image">
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
      ) : (
        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 border border-white/5">
          <Weight size={24} />
        </div>
      )}

      <div className="mt-auto">
        {variant.weight && (
          <span className="block text-xs text-foreground-muted uppercase tracking-wider mb-2">{t('productDetail.weight')} {variant.weight}</span>
        )}
        <h4 className="text-xl font-bold text-white/90 mb-3 group-hover:text-accent transition-colors">
          {t(`products.${productId}.variants.${variant.id}.name`, { defaultValue: variant.name || variant.weight })}
        </h4>
        {variant.desc && (
          <p className="text-sm text-foreground-muted font-light leading-relaxed">
            {t(`products.${productId}.variants.${variant.id}.desc`, { defaultValue: variant.desc })}
          </p>
        )}
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  const product = products.find(p => p.slug === slug);
  const category = categories.find(c => c.id === product?.categoryId);
  const [selectedPartner, setSelectedPartner] = useState<ProductPartner | null>(null);

  const isFromCatalog = location.pathname.includes('/catalog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center">
        <SEO
          title={t('productDetail.notFoundTitle', { defaultValue: "Product Not Found" })}
          description={t('productDetail.notFoundDescSeo', { defaultValue: "The safety solution you are looking for might have been moved." })}
        />
        <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4">
          <ShieldCheck size={40} className="text-foreground-muted" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{t('productDetail.notFound')}</h1>
        <p className="text-foreground-muted max-w-md">{t('productDetail.notFoundDesc')}</p>
      </div>
    );
  }

  const productTitle = t(`products.${product.id}.title`, { defaultValue: product.title });
  const productDescription = t(`products.${product.id}.description`, { defaultValue: product.description });
  const productTagline = t(`products.${product.id}.tagline`, { defaultValue: product.tagline });
  const canonicalPath = `/catalog/${product.slug}`;
  const absoluteImage = product.image.startsWith('http')
    ? product.image
    : `https://www.famindofast.com${product.image}`;

  const isLithiumFireKiller = product.id === 'lithium-fire-killer-hartindo-af31';
  const seoTitle = isLithiumFireKiller
    ? 'Lithium Fire Killer HARTINDO AF31 | World\'s First Lithium Fire Extinguisher'
    : `${productTitle} | FAST Fire Safety`;
  const seoDescription = isLithiumFireKiller
    ? 'Lithium Fire Killer (LFK) HARTINDO AF31 — the world\'s first lithium fire extinguisher. SNI certified, eco-friendly, TKDN certified. Extinguishes Class A, B, D, F/K & Lithium battery fires. Buy from PT. Famindo Alfa Spektrum Teknologi (FAST).'
    : productDescription;
  const seoKeywords = isLithiumFireKiller
    ? 'lithium fire killer, Lithium Fire Killer, HARTINDO AF31, LFK AF31, lithium fire extinguisher, pemadam api baterai lithium, pemadam api lithium, lithium battery fire extinguisher, FAST Indonesia'
    : undefined;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productTitle,
    "image": absoluteImage,
    "description": seoDescription,
    "url": `https://www.famindofast.com${canonicalPath}`,
    "category": "Fire Extinguisher",
    "brand": {
      "@type": "Brand",
      "name": "HARTINDO"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "PT. Famindo Alfa Spektrum Teknologi (FAST)",
      "url": "https://www.famindofast.com"
    },
    "slogan": productTagline,
    ...(isLithiumFireKiller && {
      "alternateName": ["LFK", "Lithium Fire Killer AF31", "HARTINDO AF31"],
      "keywords": "lithium fire killer, lithium fire extinguisher, HARTINDO AF31"
    })
  };

  return (
    <div className="pb-24 bg-background min-h-screen relative">
      <SEO
        title={seoTitle}
        useTitleAsIs
        description={seoDescription}
        keywords={seoKeywords}
        url={canonicalPath}
        image={absoluteImage}
        type="product"
        schemaMarkup={productSchema}
      />

      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-background z-0" />
        <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-b-3xl" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 pb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Zap size={16} className="text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              {isFromCatalog && category ? t(`catalog.categories.${category.id}.name`, { defaultValue: category.name }) : t('productDetail.badgeFallback')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl leading-tight">
            {t(`products.${product.id}.title`, { defaultValue: product.title })}
          </h1>

          {product.tagline && (
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300 font-medium max-w-3xl leading-relaxed mt-4">
              {t(`products.${product.id}.tagline`, { defaultValue: product.tagline })}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  {product.id === 'ballistic-app' ? t('productDetail.systemOverview') : t('productDetail.overview')}
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed font-light mb-8">
                  {t(`products.${product.id}.description`, { defaultValue: product.description })}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-surface/40 border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle2 size={18} className="text-accent" />
                        </div>
                        <span className="text-foreground-muted font-light text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                          {t(`products.${product.id}.features.${index}`, { defaultValue: feature })}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {product.partners && product.partners.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                    {t('productDetail.store')}
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <div className="flex flex-wrap gap-6 items-center justify-center">
                    {product.partners.map((partner, index) => (
                      <button
                        key={index}
                        onClick={() => partner.locations ? setSelectedPartner(partner) : undefined}
                        className="bg-gradient-to-br from-accent/20 via-surface to-background border border-white/10 px-6 py-4 rounded-2xl hover:border-accent/30 hover:bg-surface/80 transition-all duration-300 group cursor-pointer focus:outline-none"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          title={partner.name}
                          className={partner.logo === "/partners/jaecoo.png" ? "h-10 md:h-12 w-auto object-contain filter transition-all duration-300" : "h-10 md:h-12 w-auto object-contain filter transition-all duration-300"}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl bg-surface border border-accent/30 shadow-[0_10px_40px_rgba(56,152,212,0.15)] group sticky top-28">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/30 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-accent mb-6">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t('productDetail.secure')}</h3>
                  <p className="text-foreground-muted text-sm mb-8 font-light leading-relaxed">
                    {t('productDetail.secureDesc')}
                  </p>

                  <div className="space-y-4">
                    {product.brochureUrl && (
                      <a
                        href={product.brochureUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group/btn text-sm uppercase tracking-wide"
                      >
                        <Download size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                        {t('productDetail.download')}
                      </a>
                    )}

                    {product.tokopediaUrl && (
                      <a
                        href={product.tokopediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#03AC0E]/10 hover:bg-[#03AC0E]/20 border border-[#03AC0E]/30 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(3,172,14,0.1)] hover:shadow-[0_0_25px_rgba(3,172,14,0.25)] hover:-translate-y-1 text-sm uppercase tracking-wide group/tokped"
                      >
                        <ShoppingCart size={18} className="text-[#03AC0E] group-hover/tokped:scale-110 transition-transform" />
                        {t('productDetail.buyTokopedia')}
                      </a>
                    )}

                    <a
                      href={`https://wa.me/6281290003278?text=Halo%20tim%20FAST,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(56,152,212,0.4)] hover:shadow-[0_0_30px_rgba(56,152,212,0.6)] hover:-translate-y-1 text-sm uppercase tracking-wide"
                    >
                      <MessageSquare size={18} />
                      {t('productDetail.contact')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {product.variants && product.variants.length > 0 && (
            <div className="pt-20 mt-12 border-t border-white/10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{t('productDetail.variantsTitle')}</h3>
                <p className="text-foreground-muted font-light max-w-2xl mx-auto">
                  {t('productDetail.variantsDesc')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {product.variants.map((variant, index) => (
                  <VariantCard key={index} variant={variant} productId={product.id} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Modal / Card Partner Locations */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="bg-surface border border-accent/30 rounded-3xl p-8 max-w-md w-full shadow-[0_10px_40px_rgba(56,152,212,0.15)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors focus:outline-none"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-6 bg-white/5 p-6 rounded-2xl border border-white/5">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="h-12 object-contain filter opacity-90 scale-200"
              />
            </div>

            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <MapPin className="text-accent" size={24} />
              {t('productDetail.locationDetails')}
            </h4>

            <ul className="space-y-3 mt-4">
              {selectedPartner.locations?.map((loc, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground-muted font-light p-3 rounded-xl bg-background/50 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(56,152,212,0.6)] flex-shrink-0"></div>
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;