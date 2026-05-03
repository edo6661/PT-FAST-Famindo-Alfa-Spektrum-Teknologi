import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const START_FRAME = 33;
  const END_FRAME = 240;
  const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;

  useEffect(() => {
    const loadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const paddedNum = index.toString().padStart(3, '0');
        img.src = new URL(`../assets/sequence/frame-by-frame/ezgif-frame-${paddedNum}.jpg`, import.meta.url).href;

        img.onload = () => {

          imagesRef.current[index - START_FRAME] = img;
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    const loadAllFrames = async () => {

      await loadImage(START_FRAME);
      setIsLoaded(true);


      for (let i = START_FRAME + 1; i <= END_FRAME; i++) {
        await loadImage(i);
      }
    };

    loadAllFrames();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      const frameIndex = Math.round(currentFrameIndex.get());

      const img = imagesRef.current[frameIndex];

      if (img && img.complete && img.naturalHeight !== 0) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        canvas.width = windowWidth;
        canvas.height = windowHeight;

        const imgRatio = img.width / img.height;
        const windowRatio = windowWidth / windowHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (windowRatio > imgRatio) {
          drawWidth = windowWidth;
          drawHeight = windowWidth / imgRatio;
          offsetX = 0;
          offsetY = (windowHeight - drawHeight) / 2;
        } else {
          drawHeight = windowHeight;
          drawWidth = windowHeight * imgRatio;
          offsetX = (windowWidth - drawWidth) / 2;
          offsetY = 0;
        }
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
      requestAnimationFrame(render);
    };

    render();

    const unsubscribe = currentFrameIndex.on('change', () => { });
    return () => {
      unsubscribe();
    };
  }, [isLoaded, currentFrameIndex]);
  return (
    <section
      id="beranda"
      ref={containerRef}
      className="w-full bg-primary"
      style={{ height: '400vh', position: 'relative' }}
    >
      {!isLoaded && (
        <div className="w-full flex flex-col items-center justify-center bg-background text-white z-50 fixed inset-0" style={{ height: '100vh' }}>
          <div className="w-16 h-16 relative mb-6">
            <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-r-2 border-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
        </div>
      )}
      <div
        className="w-full overflow-hidden flex items-center justify-center transition-opacity duration-1000"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          opacity: isLoaded ? 1 : 0
        }}
      >
        <div className="absolute inset-0 bg-background/50 z-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-0" />
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover mix-blend-normal z-[-1]"
        />
        <HeroTextOverlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
function HeroTextOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { t } = useTranslation();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const ctaOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.7, 0.85], [100, 0]);
  return (
    <div className="absolute inset-0 pointer-events-none text-white container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center z-20">
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(56,152,212,0.15)]">
          <ShieldCheck size={18} className="text-accent shrink-0" />
          <span className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase flex items-center gap-2">
            {t('hero.badge')} <span className="hidden sm:inline">{t('hero.badgeSuffix')}</span>
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl tracking-tight text-white text-balance drop-shadow-2xl">
          {t('hero.title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-300">
            {t('hero.titleHighlight')}
          </span>
        </h1>
      </motion.div>
      {/* <motion.div
        style={{ opacity: descOpacity, y: descY }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center px-4"
      >
        <p className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 max-w-4xl leading-tight text-balance drop-shadow-xl">
          {t('hero.subtitle')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-3xl font-light leading-relaxed text-pretty">
          {t('hero.desc')}
        </p>
      </motion.div> */}
      <motion.div
        style={{ opacity: ctaOpacity, y: ctaY }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
      >
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16">
          <a href="#brands" className="bg-accent text-white px-10 py-4 sm:py-5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent/80 transition-all duration-300 shadow-[0_0_30px_rgba(56,152,212,0.4)] hover:shadow-[0_0_50px_rgba(56,152,212,0.6)] hover:-translate-y-1">
            {t('hero.cta1')}
            <ArrowRight size={20} className="ml-2" />
          </a>
          <a href="#kontak" className="bg-surface/60 backdrop-blur-md border border-white/20 text-white px-10 py-4 sm:py-5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
            {t('hero.cta2')}
          </a>
        </div>
        <div className="pt-8 border-t border-white/20 w-full max-w-4xl relative">
          <p className="text-xs md:text-sm text-foreground-muted font-medium uppercase tracking-widest mb-6">{t('hero.trusted')}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-4 opacity-80">
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white">2024 Presidential Inauguration</span>
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white">KTT Visit</span>
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white">Bluebird Group</span>
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white">KTT IAF Bali</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}