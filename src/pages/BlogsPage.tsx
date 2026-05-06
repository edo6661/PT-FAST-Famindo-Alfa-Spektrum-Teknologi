import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Loader2 } from 'lucide-react';
import { getPaginatedBlogs } from '../services/blogService';
import type { Blog } from '../types/blog';
import type { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const PAGE_SIZE = 6;

const BlogsPage = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchInitialBlogs = async () => {
      try {
        setLoading(true);
        const { blogs: initialData, lastVisible } = await getPaginatedBlogs(PAGE_SIZE);
        setBlogs(initialData);
        setLastDoc(lastVisible);
        setHasMore(initialData.length === PAGE_SIZE);
      } catch (error) {
        console.error('Gagal mengambil data blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialBlogs();
  }, []);

  const loadMore = async () => {
    if (!lastDoc || loadingMore || !hasMore) return;
    try {
      setLoadingMore(true);
      const { blogs: nextData, lastVisible } = await getPaginatedBlogs(PAGE_SIZE, lastDoc);
      setBlogs((prev) => [...prev, ...nextData]);
      setLastDoc(lastVisible);
      if (nextData.length < PAGE_SIZE) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Gagal mengambil data blog selanjutnya:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="py-24 pt-32 bg-background min-h-screen relative overflow-hidden">
      <SEO
        title="All Insights & Updates - FAST"
        description="Follow our latest technology updates and fire safety education."
        url="/blogs"
      />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface via-background to-background z-0" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="text-accent" size={24} />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">{t('blogsPage.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            {t('blogsPage.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">{t('blogsPage.titleHighlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl font-light leading-relaxed">
            {t('blogsPage.desc')}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-t-2 border-accent border-solid rounded-full animate-spin"></div>
          </div>
        ) : blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => {
                // Menentukan title dan deskripsi sesuai dengan bahasa
                const title = i18n.language === 'en' ? (blog.nama_en || blog.nama) : blog.nama;
                const rawDescription = i18n.language === 'en' ? (blog.deskripsi_en || blog.deskripsi) : blog.deskripsi;

                // Hapus tag HTML & ubah &nbsp; menjadi spasi untuk keperluan preview card
                const plainDescription = rawDescription.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');

                return (
                  <Link
                    key={blog.id}
                    to={`/blogs/${blog.id}`}
                    className="group flex flex-col rounded-3xl overflow-hidden bg-surface/40 border border-white/10 hover:border-accent/40 hover:bg-surface/60 backdrop-blur-md transition-all duration-500 shadow-xl cursor-pointer"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={blog.foto}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow relative z-10 -mt-10">
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                          {new Date(blog.createdAt).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="text-sm text-foreground-muted line-clamp-3 mb-8 flex-grow leading-relaxed">
                        {plainDescription}
                      </p>
                      <div className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-accent transition-colors">
                        {t('blogsPage.readMore')} <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="bg-surface/50 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-surface hover:border-accent/50 transition-all duration-300 flex items-center gap-3 disabled:opacity-50 shadow-lg"
                >
                  {loadingMore && <Loader2 size={18} className="animate-spin text-accent" />}
                  {loadingMore ? t('blogsPage.loading') : t('blogsPage.loadMore')}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 border border-white/10 rounded-3xl bg-surface/30">
            <p className="text-foreground-muted text-lg">{t('blogsPage.empty')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;