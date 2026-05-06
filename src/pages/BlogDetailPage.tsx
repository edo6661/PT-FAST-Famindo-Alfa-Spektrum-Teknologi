import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Share2 } from 'lucide-react';
import { getBlogById } from '../services/blogService';
import type { Blog } from '../types/blog';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const BlogDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error('Gagal mengambil data blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-16 h-16 border-t-2 border-accent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-white mb-4">{t('blogDetail.notFound')}</h1>
        <p className="text-foreground-muted mb-8">{t('blogDetail.notFoundDesc')}</p>
      </div>
    );
  }

  // Tentukan teks berdasarkan bahasa aktif
  const title = i18n.language === 'en' ? (blog.nama_en || blog.nama) : blog.nama;
  const description = i18n.language === 'en' ? (blog.deskripsi_en || blog.deskripsi) : blog.deskripsi;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('blogDetail.copied'));
    }
  };

  return (
    <div className="py-24 bg-background min-h-screen">
      <SEO
        title={`${title} - FAST Insights`}
        description={description.substring(0, 150)}
        url={`/blogs/${blog.id}`}
        image={blog.foto}
        type="article"
      />

      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end border-b border-white/5 overflow-hidden">
        <img src={blog.foto} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 pb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm text-accent">
              <Calendar size={16} />
              <span className="text-sm font-semibold tracking-wide">
                {new Date(blog.createdAt).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <button onClick={handleShare} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-white/10 hover:border-white/30 hover:bg-surface text-foreground-muted hover:text-white transition-colors backdrop-blur-sm text-sm font-semibold">
              <Share2 size={16} /> {t('blogDetail.share')}
            </button>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl leading-tight drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:text-foreground-muted/90 prose-headings:text-white prose-a:text-accent hover:prose-a:text-accent/80">
            {description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;