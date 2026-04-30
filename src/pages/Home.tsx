import { Suspense, lazy } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

// Lazy load komponen yang berada di bawah layar utama (below the fold)
const About = lazy(() => import('../components/About'));
const Brands = lazy(() => import('../components/Brands'));
const Catalog = lazy(() => import('../components/Catalog'));
const Certifications = lazy(() => import('../components/Certifications'));
const ClientBase = lazy(() => import('../components/ClientBase'));

const Home = () => {
  return (
    <>
      <SEO
        title="FAST | PT. Famindo Alfa Spektrum Teknologi"
        description="Setiap detik berharga. FAST menghadirkan solusi teknologi keselamatan kebakaran tingkat tinggi untuk memitigasi risiko baterai Lithium-ion."
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