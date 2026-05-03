import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import FloatingWA from './FloatingWA';
const Layout = () => {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      let attempts = 0;
      const scrollInterval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(scrollInterval);
        }
        attempts++;
        if (attempts >= 20) clearInterval(scrollInterval);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
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