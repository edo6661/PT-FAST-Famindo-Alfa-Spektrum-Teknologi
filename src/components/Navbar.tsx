import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants/navs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-surface/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        <a href="/#beranda" className="flex items-center gap-3 relative z-10 group">
          <img src="/src/assets/FAST_Logo_PNG/logo.png" alt="PT FAST Logo" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <a href="#kontak" className="bg-accent text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/80 transition-all duration-300 shadow-[0_0_15px_rgba(56,152,212,0.3)] hover:shadow-[0_0_25px_rgba(56,152,212,0.6)] hover:-translate-y-0.5">
            Hubungi Kami
          </a>
        </div>

        <button className="md:hidden text-foreground relative z-10 hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <div className={`absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-border transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-accent/80 transition-all shadow-[0_0_15px_rgba(56,152,212,0.3)] mt-4">
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;