import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Catalog from '../components/Catalog';
import Brands from '../components/Brands';
import ClientBase from '../components/ClientBase';
import Certifications from '../components/Certifications';

const Home = () => {
  return (
    <>
      <SEO
        title="Advanced Fire Safety Solutions"
        description="Setiap detik berharga. PT. FAST menghadirkan solusi teknologi keselamatan kebakaran tingkat tinggi untuk memitigasi risiko baterai Lithium-ion."
        url="/"
      />
      <Hero />
      <About />
      <Brands />
      <Catalog />
      <Certifications />
      <ClientBase />
    </>
  );
};

export default Home;