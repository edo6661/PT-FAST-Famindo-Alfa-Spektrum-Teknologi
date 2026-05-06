import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const Brands = lazy(() => import('../components/Brands'));
const Catalog = lazy(() => import('../components/Catalog'));
const Certifications = lazy(() => import('../components/Certifications'));
const ClientBase = lazy(() => import('../components/ClientBase'));

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.defaultTitle', { defaultValue: "FAST | PT. Famindo Alfa Spektrum Teknologi" })}
        description={t('seo.defaultDesc', { defaultValue: "Every second matters. PT. Famindo Alfa Spektrum Teknologi provides high-level advanced fire safety technology solutions to mitigate Lithium-ion battery risks and secure industrial facilities." })}
        url="/"
      />
      <Hero />
      <Suspense fallback={<div className="h-32"></div>}>
        <About />
        <Brands />
        <Catalog />
        <Certifications />
        <ClientBase />
      </Suspense>
    </>
  );
};

export default Home;