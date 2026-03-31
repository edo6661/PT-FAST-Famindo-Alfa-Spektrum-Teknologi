import { ShieldCheck, Award, Globe, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const nationalCerts = [
    {
      title: "TKDN (49.31%)",
      desc: "Passed the test from the Indonesia's Ministry of Industry. Top-of-mind choice to secure the mining industry."
    },
    {
      title: "Ministry of Environment & Forestry",
      desc: "Effective solution for combating forest fires. Safe for humans, animals, and the environment. Prevents fire re-ignition."
    },
    {
      title: "DAMKAR",
      desc: "Qualified to extinguish every classes of fire [A, B, C, D, F/K] according to DAMKAR test method parameters."
    },
    {
      title: "Ministry of Transportation",
      desc: "A fire extinguisher for classes A, B, C, D. Effective solution for forest fires and prevents re-ignition."
    },
    {
      title: "POLRI",
      desc: "Certified and trusted to meet the highest safety and operational standards for law enforcement environments."
    }
  ];

  const internationalCerts = [
    {
      title: "UL Solutions (USA)",
      desc: "GREENGUARD Certification Gold Standard. Verified to have low total VOC emissions, highly committed to human health."
    },
    {
      title: "EUROFINS - Environment Test",
      desc: "Certified as a non-PFAS fire extinguisher. Removing the fear and risk of cancer development for its users."
    },
    {
      title: "SGS (USA)",
      desc: "ASTM E84-07, UL723. Certified as an effective fire suppression solution for building material surfaces."
    },
    {
      title: "KGK Synergize (Canada) OECD",
      desc: "Certified 'non-irritation' status. Doesn't cause acute eye/skin irritation or toxicity based on strict OECD guidelines."
    },
    {
      title: "Pollutech EnviroQuatics (Canada)",
      desc: "LC50 Certified to not cause acute toxicity and death to living organisms in their natural environment."
    },
    {
      title: "EN1568-3",
      desc: "Certified in line with stringent European Standard for Fire Extinguishing Equipment."
    },
    {
      title: "Nucro Technics",
      desc: "Passed strict international laboratory testing for chemical safety and efficacy."
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-sm mb-6 shadow-sm">
            <Globe size={16} className="text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">World-Class Standard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Certifications <br />& Lab Test</h2>
          <p className="text-foreground-muted text-lg font-light leading-relaxed">
            From European standards to American quality assurances, and local regulations, Lithium Fire Killer AF31 proudly bears the badges of the world's most prestigious certifications as a testament to excellence and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* National Certifications */}
          <div className="p-8 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="p-3 rounded-xl bg-background border border-border">
                <Award size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">National Certifications</h3>
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
              <h3 className="text-2xl font-bold text-white">International Certifications</h3>
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