import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Blog } from '../types/blog';

interface BlogCardProps {
  blog: Blog;
  variant?: 'page' | 'footer';
}

const BlogCard = ({ blog, variant = 'page' }: BlogCardProps) => {
  const { t, i18n } = useTranslation();


  const title = i18n.language === 'en' ? (blog.nama_en || blog.nama) : blog.nama;
  const rawDescription = i18n.language === 'en' ? (blog.deskripsi_en || blog.deskripsi) : blog.deskripsi;


  const plainDescription = rawDescription.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');

  const dateFormatted = new Date(blog.createdAt).toLocaleDateString(
    i18n.language === 'id' ? 'id-ID' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <Link
      to={`/blogs/${blog.id}`}
      className={`group flex flex-col h-full overflow-hidden transition-all duration-500 shadow-xl border cursor-pointer
        ${variant === 'page'
          ? 'rounded-3xl bg-surface/40 border-white/10 hover:border-accent/40 hover:bg-surface/60 backdrop-blur-md'
          : 'rounded-card bg-background border-border hover:border-accent/40 shadow-sm'
        }`}
    >
      <div className={`overflow-hidden relative w-full flex-shrink-0 ${variant === 'page' ? 'h-56' : 'aspect-video'}`}>
        <img
          src={blog.foto}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent 
          ${variant === 'page' ? 'from-surface' : 'from-background/90'}`}
        />
      </div>

      <div className={`p-6 flex flex-col flex-grow relative z-10 ${variant === 'page' ? '-mt-10 p-8' : ''}`}>
        <div className="mb-4">
          <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border
            ${variant === 'page' ? 'text-accent bg-accent/10 border-accent/20' : 'text-foreground-muted border-border'}`}>
            {dateFormatted}
          </span>
        </div>

        <h3 className={`font-bold text-white mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-300 
          ${variant === 'page' ? 'text-xl' : 'text-lg drop-shadow-md min-h-[3.5rem]'}`}>
          {title}
        </h3>

        <p className="text-sm text-foreground-muted line-clamp-3 mb-8 flex-grow leading-relaxed">
          {plainDescription}
        </p>

        <div className={`inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-white group-hover:text-accent transition-colors`}>
          {t('blogsPage.readMore')}
          <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;