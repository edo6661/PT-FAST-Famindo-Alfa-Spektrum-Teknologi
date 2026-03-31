import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandDetail from './pages/BrandDetail';
import ClientBasePage from './pages/ClientBasePage';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="brand/:slug" element={<BrandDetail />} />
            <Route path="clients" element={<ClientBasePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;