import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants/navs';
import logo from '../assets/FAST_Logo_PNG/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen ? 'bg-surface/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-gradient-to-b from-background/80 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        <a href="/#beranda" className="flex items-center gap-3 relative z-10 group">
          <img src={logo} alt="PT FAST Logo" className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105 will-change-transform" />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative text-sm font-medium text-foreground/80 hover:text-white transition-colors duration-300 group py-2">
              {link.name}
              {/* Efek garis bawah modern saat di-hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <a href="#kontak" className="ml-4 bg-white/5 border border-accent/30 text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-accent hover:border-accent transition-all duration-500 shadow-[0_0_15px_rgba(56,152,212,0.1)] hover:shadow-[0_0_25px_rgba(56,152,212,0.5)] hover:-translate-y-0.5 transform will-change-transform">
            Contact Us
          </a>
        </div>

        <button
          className="md:hidden text-foreground relative z-10 hover:text-accent transition-colors focus:outline-none rounded-md p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} className="transform rotate-90 transition-transform duration-300" aria-hidden="true" /> : <Menu size={28} className="transition-transform duration-300" aria-hidden="true" />}
        </button>

      </div>

      {/* Mobile Menu dengan animasi Dropdown yang mulus */}
      <div className={`absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 ease-[0.16,1,0.3,1] md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-6 shadow-2xl' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground/90 hover:text-accent transition-colors tracking-wide">
              {link.name}
            </a>
          ))}
          <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-accent/80 transition-all shadow-[0_0_15px_rgba(56,152,212,0.3)] mt-4 w-3/4 text-center">
            Contact Us
          </a>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;