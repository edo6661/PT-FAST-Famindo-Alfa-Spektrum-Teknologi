import { Outlet } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import FloatingWA from './FloatingWA';

const Layout = () => {
  const { scrollYProgress } = useScroll();

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