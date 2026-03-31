import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, MessageSquare } from 'lucide-react';
import { brands } from '../constants/brands';


const BrandDetail = () => {
  const { slug } = useParams();
  const [brandData, setBrandData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (slug && brands[slug]) {
      setBrandData(brands[slug]);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center">Memuat data...</div>;
  }

  if (!brandData) {
    return (
      <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Brand Tidak Ditemukan</h1>
        <Link to="/" className="text-accent flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <img
          src={brandData.heroImage}
          alt={brandData.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-20 pt-16">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-8 text-sm font-medium bg-surface/50 px-4 py-2 rounded-full border border-border backdrop-blur-sm w-fit">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{brandData.name}</h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-6">{brandData.tagline}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-4">Tentang {brandData.name}</h2>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  {brandData.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Keunggulan Utama</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brandData.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-card bg-surface border border-border">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-surface p-8 rounded-card border border-border shadow-card">
                <h3 className="text-xl font-bold mb-6">Lini Produk</h3>
                <div className="space-y-6">
                  {brandData.products.map((product: any, index: number) => (
                    <div key={index} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-1">{product.name}</h4>
                      <p className="text-sm text-foreground-muted">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary to-primary p-8 rounded-card border border-accent/20 shadow-[0_10px_30px_rgba(56,152,212,0.2)]">
                <h3 className="text-xl font-bold text-white mb-4">Tertarik dengan Brand ini?</h3>
                <p className="text-white/80 text-sm mb-6">Dapatkan katalog lengkap atau konsultasikan kebutuhan Anda dengan tim ahli kami.</p>

                <div className="space-y-3">
                  <button className="w-full bg-white text-primary font-semibold py-3 rounded-btn flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                    <Download size={18} /> Unduh Brosur
                  </button>
                  <a href="[https://wa.me/6281234567890](https://wa.me/6281234567890)" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border border-white text-white font-semibold py-3 rounded-btn flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <MessageSquare size={18} /> Hubungi Sales
                  </a>
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