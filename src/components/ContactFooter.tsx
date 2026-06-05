import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Send, Facebook,
  Linkedin, BookOpen, ArrowRight, Instagram, Youtube
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Blog } from '../types/blog';
import BlogCard from './BlogCard';

const ContactFooter = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchBlogs = async () => {
      try {
        const { getLandingPageBlogs } = await import('../services/blogService');
        const data = await getLandingPageBlogs();
        if (!cancelled) setBlogs(data);
      } catch (error) {
        console.error('Gagal mengambil blog:', error);
      } finally {
        if (!cancelled) setLoadingBlogs(false);
      }
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => fetchBlogs(), { timeout: 3000 });
    } else {
      timeoutId = setTimeout(fetchBlogs, 1500);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const payload = {
      ...formData,
      access_key: "21fdab41-15c9-4f2e-8ebb-6101613f102c"
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: t('footer.form.success') });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 5000);
      } else {
        setSubmitStatus({ type: 'error', message: result.message || t('footer.form.error') });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: t('footer.form.error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-surface pt-24 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Insights/Blog */}
        <div className="mt-12 border-b border-border pb-12 bg-surface">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
                <BookOpen className="text-accent" size={24} aria-hidden="true" /> {t('footer.insights.title')}
              </h2>
              <p className="text-foreground-muted text-sm">{t('footer.insights.desc')}</p>
            </div>
            <Link to="/blogs" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-semibold">
              {t('footer.insights.viewAll')} <ArrowRight size={16} />
            </Link>
          </div>

          {loadingBlogs ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-8 h-8 border-t-2 border-accent border-solid rounded-full animate-spin"></div>
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} variant="footer" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-border rounded-card bg-background/50">
              <p className="text-foreground-muted">{t('footer.insights.empty')}</p>
            </div>
          )}
        </div>

        {/* Section Kontak & Form */}
        <div id="kontak" className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('footer.title')} <br /><span className="text-accent">{t('footer.titleHighlight')}</span>
            </h2>
            <p className="text-foreground-muted mb-10 text-lg">
              {t('footer.desc')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('footer.headquarters')}</h3>
                  <p className="text-foreground-muted">TCC Tower One Menara Batavia<br />Jl. K.H. Mas Mansyur No. Kav. 126, RT.9/RW.3<br />Karet Tengsin, Tanah Abang, Jakarta Pusat 10220</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('footer.phone')}</h3>
                  <p className="text-foreground-muted">+62 812 9000 3278</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t('footer.emailTitle')}</h3>
                  <p className="text-foreground-muted">support@famindofast.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Iframe */}
            <div className="mt-10 rounded-card overflow-hidden border border-border shadow-card h-64 relative bg-surface">
              <iframe
                title="Peta Lokasi FAST"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4526274351364!2d106.8173493!3d-6.203868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f419c968f94f%3A0xc68297a7e3d6477e!2sTCC%20Batavia!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-surface p-8 rounded-card border border-border shadow-card relative h-fit">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 blur-2xl rounded-full"></div>
            <h3 className="text-2xl font-semibold mb-6 relative z-10">{t('footer.form.title')}</h3>
            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground-muted mb-2">{t('footer.form.name')}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-btn px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder={t('footer.form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground-muted mb-2">{t('footer.form.email')}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-btn px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder={t('footer.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground-muted mb-2">{t('footer.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-btn px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder={t('footer.form.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-4 rounded-btn transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,152,212,0.3)] disabled:opacity-70"
              >
                {isSubmitting ? t('footer.form.submitting') : (
                  <>
                    <Send size={18} /> {t('footer.form.submit')}
                  </>
                )}
              </button>
              {submitStatus.message && (
                <div className={`p-4 mt-4 rounded-btn text-sm font-medium text-center transition-all duration-300 ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo-nav-200w.webp" alt="Logo FAST" width={120} height={22} loading="lazy" decoding="async" className="h-6 w-auto opacity-100" />
              <span className="text-foreground-muted text-sm font-medium">PT. Famindo Alfa Spektrum Teknologi</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/pages/PT.%20Famindo%20Inovasi%20Teknologi/526158344445002/" target="_blank" rel="noopener noreferrer" aria-label="Facebook PT FAST" className="text-foreground-muted hover:text-accent transition-colors">
              <Facebook size={20} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/company/pt-famindo-fast" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn PT FAST" className="text-foreground-muted hover:text-accent transition-colors">
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@lithiumfirekiller" target="_blank" rel="noopener noreferrer" aria-label="YouTube Lithium Fire Killer" className="text-foreground-muted hover:text-accent transition-colors">
              <Youtube size={20} aria-hidden="true" />
            </a>
            <a href="https://instagram.com/famindofast" target="_blank" rel="noopener noreferrer" aria-label="Instagram PT FAST" className="text-foreground-muted hover:text-accent transition-colors">
              <Instagram size={20} aria-hidden="true" />
            </a>
          </div>

          <p className="text-foreground-muted text-sm text-center md:text-right">
            © {new Date().getFullYear()} FAST | PT. Famindo Alfa Spektrum Teknologi. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;