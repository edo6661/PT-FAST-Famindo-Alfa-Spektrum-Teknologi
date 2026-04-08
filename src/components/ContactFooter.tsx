import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, BookOpen, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import logo from '../assets/FAST_Logo_PNG/logo.png';
import { getLandingPageBlogs } from '../services/blogService';
import type { Blog } from '../types/blog';

const ContactFooter = () => {
  const { t, i18n } = useTranslation(); // Inisialisasi hook i18n

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
    const fetchBlogs = async () => {
      try {
        const data = await getLandingPageBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Gagal mengambil blog:', error);
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Gabungkan data form dengan access_key dari Web3Forms
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
    <footer id="kontak" className="bg-surface pt-24 border-t border-border relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Bagian Kiri: Info Kontak & Map */}
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
                  <h4 className="font-semibold text-lg mb-1">{t('footer.headquarters')}</h4>
                  <p className="text-foreground-muted">TCC Tower One Menara Batavia<br />Jl. K.H. Mas Mansyur No. Kav. 126, RT.9/RW.3<br />Karet Tengsin, Tanah Abang, Jakarta Pusat 10220</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{t('footer.phone')}</h4>
                  <p className="text-foreground-muted">+62 812 9000 3278</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{t('footer.emailTitle')}</h4>
                  <p className="text-foreground-muted">support@famindofast.co</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-card overflow-hidden border border-border shadow-card h-64 relative bg-surface">
              <iframe
                title="Peta Lokasi Kantor Pusat PT Famindo Alfa Spektrum Teknologi (FAST)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.398361941328!2d106.8138512746038!3d-6.2110753608376985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6a9eb4646b1%3A0xd1fdd0d354acf37!2sFP%20One%20TCC%20Batavia%20Tower%20One!5e0!3m2!1sid!2sid!4v1775395133848!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Bagian Kanan: Form Konsultasi */}
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
                className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-4 rounded-btn transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(56,152,212,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('footer.form.submitting') : (
                  <>
                    <Send size={18} /> {t('footer.form.submit')}
                  </>
                )}
              </button>

              {submitStatus.message && (
                <div className={`p-4 mt-4 rounded-btn text-sm font-medium text-center transition-all duration-300 ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bagian Bawah: Artikel/Blog */}
        <div className="mb-12 border-t border-border pt-12 bg-surface">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2 mb-2">
                <BookOpen className="text-accent" size={24} /> {t('footer.insights.title')}
              </h3>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="group flex flex-col rounded-card overflow-hidden bg-background border border-border hover:border-accent/40 transition-all duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={blog.foto}
                      alt={blog.nama}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
                    <h4 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300 drop-shadow-md">
                      {blog.nama}
                    </h4>
                    <p className="text-sm text-foreground-muted line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {blog.deskripsi}
                    </p>
                    <div className="pt-4 border-t border-border flex justify-between items-center">
                      <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                        {/* Format tanggal menyesuaikan bahasa aktif */}
                        {new Date(blog.createdAt).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-border rounded-card bg-background/50">
              <p className="text-foreground-muted">{t('footer.insights.empty')}</p>
            </div>
          )}
        </div>

        {/* Bagian Paling Bawah: Copyright & Socials */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo Resmi PT Famindo Alfa Spektrum Teknologi (FAST)" className="h-6 w-auto opacity-100" />
              <span className="text-foreground-muted text-sm font-medium">PT. Famindo Alfa Spektrum Teknologi</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors duration-300" aria-label="Kunjungi halaman Facebook resmi PT FAST">
              <Facebook size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors duration-300" aria-label="Kunjungi profil LinkedIn profesional PT FAST">
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-foreground-muted text-sm text-center md:text-right">
            © {new Date().getFullYear()} FAST | PT. Famindo Alfa Spektrum Teknologi. {t('footer.copyright')} <br className="md:hidden" /> "Every Second Matters"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;