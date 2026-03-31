import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import FloatingWA from './FloatingWA';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactFooter />
      <FloatingWA />
    </div>
  );
};

export default Layout;