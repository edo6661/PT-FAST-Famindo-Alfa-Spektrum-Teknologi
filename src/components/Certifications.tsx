import { ShieldCheck, Award, Globe, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';


interface CertItem {
  title: string;
  desc: string;
}

const Certifications = () => {
  const { t } = useTranslation();


  const nationalCerts = t('certifications.national', { returnObjects: true }) as CertItem[];
  const internationalCerts = t('certifications.international', { returnObjects: true }) as CertItem[];

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
          {/* National Certifications */}
          <div className="p-8 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="p-3 rounded-xl bg-background border border-border">
                <Award size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('certifications.nationalTitle')}</h3>
            </div>
            <div className="space-y-6">
              {nationalCerts.map((cert, index) => (
                <div key={index} className="flex gap-4 group">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 mb-1">{cert.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Certifications */}
          <div className="p-8 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-sm shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Globe size={120} />
            </div>
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
              <div className="p-3 rounded-xl bg-background border border-border">
                <ShieldCheck size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('certifications.internationalTitle')}</h3>
            </div>
            <div className="space-y-6 relative z-10">
              {internationalCerts.map((cert, index) => (
                <div key={index} className="flex gap-4 group">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 mb-1">{cert.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;