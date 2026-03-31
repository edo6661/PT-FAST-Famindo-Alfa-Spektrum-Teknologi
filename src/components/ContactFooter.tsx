import { MapPin, Phone, Mail, Send, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { igFeeds } from '../constants/contacts';

const ContactFooter = () => {

  return (
    <footer id="kontak" className="bg-background pt-24 border-t border-border relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Mulai Konsultasi <br /><span className="text-accent">Keamanan Anda.</span></h2>
            <p className="text-foreground-muted mb-10 text-lg">
              Hubungi tim ahli kami untuk audit keamanan atau diskusi mengenai solusi proteksi kebakaran yang tepat untuk fasilitas Anda.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Kantor Pusat</h4>
                  <p className="text-foreground-muted">Jl. Teknologi No. 88, Kawasan Bisnis<br />Tangerang, Banten, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telepon & WhatsApp</h4>
                  <p className="text-foreground-muted">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-foreground-muted">info@famindofast.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-card overflow-hidden border border-border shadow-card h-64 relative bg-surface">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24089456254!2d106.7593649!3d-6.2297419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-card border border-border shadow-card relative h-fit">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 blur-2xl rounded-full"></div>
            <h3 className="text-2xl font-semibold mb-6 relative z-10">Kirim Pesan</h3>
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">Nama Lengkap</label>
                <input type="text" required className="w-full bg-background border border-border rounded-btn px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">Email Perusahaan</label>
                <input type="email" required className="w-full bg-background border border-border rounded-btn px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="email@perusahaan.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">Pesan / Kebutuhan</label>
                <textarea rows={4} required className="w-full bg-background border border-border rounded-btn px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="Ceritakan kebutuhan fire safety Anda..."></textarea>
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-4 rounded-btn transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,152,212,0.3)]">
                <Send size={18} /> Kirim Permintaan
              </button>
            </form>
          </div>

        </div>

        <div className="mb-12 border-t border-border pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2 mb-1">
                <Instagram className="text-accent" size={24} /> Instagram Highlights
              </h3>
              <p className="text-foreground-muted text-sm">Ikuti aktivitas dan pembaruan terbaru kami di sosial media.</p>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors">
              @famindofast <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {igFeeds.map((feed, idx) => (
              <a key={idx} href="#" target="_blank" rel="noopener noreferrer" className="group relative aspect-square rounded-card overflow-hidden bg-surface border border-border block">
                <img src={feed} alt={`Instagram Feed ${idx + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/src/assets/FAST_Logo_PNG/logo.png" alt="PT FAST Logo" className="h-6 w-auto grayscale opacity-70" />
              <span className="text-foreground-muted text-sm font-medium">PT. Famindo Alfa Spektrum Teknologi</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors duration-300" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-foreground-muted text-sm text-center md:text-right">
            © {new Date().getFullYear()} PT. FAST. All rights reserved. <br className="md:hidden" /> "Every Second Matters"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;