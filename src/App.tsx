import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { Analytics } from '@vercel/analytics/react';

const Home = lazy(() => import('./pages/Home'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ClientBasePage = lazy(() => import('./pages/ClientBasePage'));
const Login = lazy(() => import('./pages/Login'));
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
const App = () => {
  return (
    <HelmetProvider>
      <Analytics />

      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="clients" element={<ClientBasePage />} />

                <Route path="catalog" element={<CatalogPage />} />
                <Route path="catalog/:slug" element={<ProductDetailPage />} />
                <Route path="category/:slug" element={<CategoryDetailPage />} />

                <Route path="blogs" element={<BlogsPage />} />
                <Route path="blogs/:id" element={<BlogDetailPage />} />
                <Route path="about" element={<AboutUsPage />} />

                <Route path=":slug" element={<ProductDetailPage />} />
              </Route>

              <Route path="/login" element={<Login />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/admin/blog" element={<AdminBlog />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;