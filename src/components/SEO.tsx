import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, image, url }: SEOProps) => {
  const siteUrl = "https://www.famindofast.com";
  const defaultImage = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop";

  return (
    <Helmet>
      <title>{title} | PT. FAST</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${url || ''}`} />
      <meta property="og:title" content={`${title} | PT. FAST`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${url || ''}`} />
      <meta property="twitter:title" content={`${title} | PT. FAST`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;