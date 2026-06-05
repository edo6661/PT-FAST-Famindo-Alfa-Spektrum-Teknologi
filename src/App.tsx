import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { domAnimation, LazyMotion } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';


const Home = lazy(() => import('./pages/Home'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ClientBasePage = lazy(() => import('./pages/ClientBasePage'));
const LoginRoute = lazy(() => import('./pages/LoginRoute'));
const AdminRoute = lazy(() => import('./pages/AdminRoute'));
const AdminBlog = lazy(() => import('./pages/AdminBlog'));

const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const CategoryDetailPage = lazy(() => import('./pages/CategoryDetailPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));

const PageLoader = () => (

  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-16 h-16 border-t-2 border-accent border-solid rounded-full animate-spin"></div>
  </div>
);
// test
const App = () => {
  return (
    <HelmetProvider>
      <Analytics />
      <SpeedInsights />
      <LazyMotion features={domAnimation}>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path=":slug" element={<ProductDetailPage />} />

                <Route path="clients" element={<ClientBasePage />} />

                <Route path="catalog" element={<CatalogPage />} />
                <Route path="catalog/:slug" element={<ProductDetailPage />} />
                <Route path="category/:slug" element={<CategoryDetailPage />} />

                <Route path="blogs" element={<BlogsPage />} />
                <Route path="blogs/:id" element={<BlogDetailPage />} />
                <Route path="about" element={<AboutUsPage />} />
              </Route>

              <Route path="/login" element={<LoginRoute />} />

              <Route element={<AdminRoute />}>
                <Route path="/admin/blog" element={<AdminBlog />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LazyMotion>
    </HelmetProvider>
  );
};

export default App;