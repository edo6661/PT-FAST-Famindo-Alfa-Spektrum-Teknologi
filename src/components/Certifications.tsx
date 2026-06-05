import { useState } from 'react';
import { ShieldCheck, Award, Globe, CheckCircle2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CertItem {
  title: string;
  desc: string;
  logo?: string;
}

const Certifications = () => {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const nationalCerts = t('certifications.national', { returnObjects: true }) as CertItem[];
  const internationalCerts = t('certifications.international', { returnObjects: true }) as CertItem[];


  const renderCertCard = (cert: CertItem, index: number) => (
    <div
      key={index}
      className={`flex flex-col group p-4 rounded-2xl bg-surface/30 border border-white/5 transition-all duration-300 ${cert.logo ? 'cursor-pointer hover:border-accent/30' : ''}`}
      onClick={() => cert.logo && setSelectedCert(cert.logo)}
    >
      {cert.logo ? (
        <div className="h-14 mb-4 flex items-center justify-start">
          <img
            src={cert.logo}
            alt={cert.title}
            className={`max-h-full max-w-30 object-contain filter opacity-70 group-hover:opacity-100 transition-all duration-300 ${cert.title === "SNI" ? "scale-200" : ""}`}
          />
        </div>
      ) : (
        <div className="h-14 mb-4 flex items-center">
          <CheckCircle2 size={28} className="text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div>
        <p className="text-base font-bold text-white/90 mb-2">{cert.title}</p>
        <p className="text-xs text-foreground-muted leading-relaxed">{cert.desc}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-sm mb-6 shadow-sm">
            <Globe size={16} className="text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">{t('certifications.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('certifications.title')}</h2>
          <p className="text-foreground-muted text-lg font-light leading-relaxed">
            {t('certifications.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          <div className="p-8 rounded-3xl bg-background border border-white/5 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="p-3 rounded-xl bg-background border border-border">
                <Award size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('certifications.nationalTitle')}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {nationalCerts.map(renderCertCard)}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-background border border-white/5 backdrop-blur-sm shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Globe size={180} />
            </div>
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
              <div className="p-3 rounded-xl bg-background border border-border">
                <ShieldCheck size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('certifications.internationalTitle')}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {internationalCerts.map(renderCertCard)}
            </div>
          </div>
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            <div
              className="relative rounded-xl overflow-hidden bg-white/5 p-4 border border-white/10"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={selectedCert}
                alt="Certificate Scan"
                className="max-w-full max-h-[80vh] object-contain select-none"
                draggable="false"
              />
              <div className="absolute inset-0 z-10 bg-transparent"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;