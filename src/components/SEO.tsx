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

  const defaultTitle = "PT. FAST | Advanced Fire Safety Solutions";
  const defaultDescription = "Setiap detik berharga. PT. FAST menghadirkan solusi teknologi keselamatan kebakaran tingkat tinggi untuk memitigasi risiko baterai Lithium-ion dan fasilitas industri.";
  const defaultImage = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop";

  const seoTitle = title ? `${title} | PT. FAST` : defaultTitle;
  const seoDesc = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = `${siteUrl}${url || ''}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <link rel="canonical" href={seoUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="PT. FAST" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />

      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;