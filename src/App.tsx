import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

const Home = lazy(() => import('./pages/Home'));
const BrandDetail = lazy(() => import('./pages/BrandDetail'));
const ClientBasePage = lazy(() => import('./pages/ClientBasePage'));
const Login = lazy(() => import('./pages/Login'));
const AdminBlog = lazy(() => import('./pages/AdminBlog'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-16 h-16 border-t-2 border-accent border-solid rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="brand/:slug" element={<BrandDetail />} />
                <Route path="clients" element={<ClientBasePage />} />
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