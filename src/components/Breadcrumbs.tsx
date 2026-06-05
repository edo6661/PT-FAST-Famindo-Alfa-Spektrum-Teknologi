import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  path: string;
}

const SITE_URL = 'https://www.famindofast.com';

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}` || SITE_URL,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-foreground-muted">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={crumb.path + i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-white/30 shrink-0" />}
              {isLast ? (
                <span className="text-white/80 font-medium truncate max-w-[60vw] md:max-w-none" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-accent transition-colors"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
};

export default Breadcrumbs;
