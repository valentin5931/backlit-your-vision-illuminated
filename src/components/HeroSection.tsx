import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import backlitLogo from '@/assets/backlit-logo.png';

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to opacity for glow effect
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated glow effect on scroll */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          opacity: glowOpacity,
          scale: glowScale,
          background: 'radial-gradient(ellipse at center, hsl(40 80% 50% / 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content - Logo image */}
      <div className="relative z-10 w-full max-w-3xl px-4 flex flex-col items-center">
        <div 
          className="relative w-full"
          style={{
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        >
          <motion.img 
            src={backlitLogo}
            alt="BACKLIT"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.75, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-auto brightness-[0.55] saturate-[0.8]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-x-4 mt-4"
        >
          <span className="font-display text-xl md:text-3xl lg:text-4xl text-foreground/40 tracking-[0.2em]">
            {t.hero.production}
          </span>
          <div className="flex flex-col text-[10px] md:text-xs text-foreground/25 tracking-[0.25em] uppercase font-body leading-tight">
            <span>{t.hero.creative}</span>
            <span>{t.hero.executive}</span>
          </div>
        </motion.div>
      </div>

      {/* Tagline at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 md:bottom-16 left-1/2 -translate-x-1/2 text-sm md:text-base text-foreground/40 font-body font-light italic tracking-wide text-center px-4"
      >
        {t.hero.tagline}
      </motion.p>
    </section>
  );
};

export default HeroSection;
