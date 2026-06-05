import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import FloatingWA from './FloatingWA';

function scrollToElementId(id: string, maxAttempts = 40) {
  let attempts = 0;
  const tryScroll = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    attempts += 1;
    if (attempts < maxAttempts) {
      setTimeout(tryScroll, 100);
    }
  };
  tryScroll();
}

const Layout = () => {
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const bar = scrollProgressRef.current;
    if (!bar) return;

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scale = docHeight > 0 ? window.scrollY / docHeight : 0;
      bar.style.transform = `scaleX(${scale})`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      scrollToElementId(location.hash.replace('#', ''));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <div
        ref={scrollProgressRef}
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60] will-change-transform"
        style={{ transform: 'scaleX(0)' }}
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