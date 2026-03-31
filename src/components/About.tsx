import { Shield, Target, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield size={28} className="text-accent" />,
      title: "Keamanan Tingkat Tinggi",
      description: "Sistem proteksi kebakaran kami dirancang dengan standar internasional tertinggi untuk memastikan keamanan maksimal."
    },
    {
      icon: <Target size={28} className="text-accent" />,
      title: "Akurasi & Kecepatan",
      description: "Deteksi dini yang presisi meminimalisir risiko kerusakan aset berharga Anda dalam hitungan detik."
    },
    {
      icon: <Award size={28} className="text-accent" />,
      title: "Teknologi Terdepan",
      description: "Kami menggunakan inovasi terbaru dalam industri fire safety yang ramah lingkungan dan sangat efisien."
    }
  ];

  return (
    <section id="profil" className="py-24 bg-background relative overflow-hidden">

      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Tentang PT. FAST</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Inovasi Keselamatan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground-muted to-gray-600">Tanpa Kompromi.</span>
            </h2>

            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              PT. Famindo Alfa Spektrum Teknologi (FAST) hadir sebagai pionir dalam menyediakan solusi keselamatan kebakaran yang komprehensif. Kami memahami bahwa dalam situasi krisis, setiap detik sangatlah berarti <strong className="text-white font-medium">("Every Second Matters")</strong>.
            </p>
            <p className="text-foreground-muted text-lg leading-relaxed font-light">
              Dedikasi kami adalah menghadirkan teknologi masa depan untuk melindungi aset, bisnis, dan nyawa dengan keandalan yang tidak tertandingi di kelasnya.
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group flex gap-5 p-8 rounded-2xl bg-surface/40 backdrop-blur-md border border-white/5 hover:bg-surface/60 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(56,152,212,0.1)] hover:-translate-y-1 transition-all duration-500">
                <div className="flex-shrink-0 mt-1 w-14 h-14 rounded-full bg-background/50 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;