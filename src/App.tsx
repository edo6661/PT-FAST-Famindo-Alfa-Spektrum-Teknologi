import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrandDetail from './pages/BrandDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brand/:slug" element={<BrandDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;