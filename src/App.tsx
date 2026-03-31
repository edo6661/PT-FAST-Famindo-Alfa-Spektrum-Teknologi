import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Lazy loading halaman agar bundle size lebih kecil & SEO (Core Web Vitals) meningkat
const Home = lazy(() => import('./pages/Home'));
const BrandDetail = lazy(() => import('./pages/BrandDetail'));
const ClientBasePage = lazy(() => import('./pages/ClientBasePage'));

// Animasi loading modern & ringan saat perpindahan halaman
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin"></div>
      <div className="absolute inset-2 rounded-full border-r-2 border-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
    </div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="brand/:slug" element={<BrandDetail />} />
              <Route path="clients" element={<ClientBasePage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;