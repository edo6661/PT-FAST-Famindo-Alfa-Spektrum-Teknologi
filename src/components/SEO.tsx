import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaMarkup?: Record<string, unknown>;
}

const SEO = ({ title, description, image, url, type = 'website', schemaMarkup }: SEOProps) => {
  const siteUrl = "https://www.famindofast.com";

  const defaultTitle = "FAST | PT. Famindo Alfa Spektrum Teknologi";
  const defaultDescription = "Every second matters. PT. Famindo Alfa Spektrum Teknologi provides high-level advanced fire safety technology solutions to mitigate Lithium-ion battery risks and secure industrial facilities.";
  const defaultImage = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop";

  const seoTitle = title ? `${title} | PT. Famindo Alfa Spektrum Teknologi` : defaultTitle;
  const seoDesc = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = `${siteUrl}${url || ''}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT. Famindo Alfa Spektrum Teknologi (FAST)",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon/android-chrome-512x512.png`,
    "description": defaultDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-9000-3278",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["English", "Indonesian"]
    },
    "sameAs": [
      "https://instagram.com/famindofast",
      "https://facebook.com",
      "https://linkedin.com"
    ]
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="theme-color" content="#0a192f" />
      <link rel="canonical" href={seoUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="FAST | PT. Famindo Alfa Spektrum Teknologi" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;