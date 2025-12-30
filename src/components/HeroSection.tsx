import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Backlit glow effect */}
      <div className="absolute inset-0 backlit-gradient animate-glow-pulse" />
      
      {/* Additional radial glow behind logo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[500px] opacity-50"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 80%, hsl(40 90% 60% / 0.5) 0%, hsl(35 80% 45% / 0.3) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Light rays */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[300px] opacity-25"
        style={{
          background: 'conic-gradient(from 180deg at 50% 100%, transparent 40%, hsl(40 90% 70% / 0.3) 45%, transparent 50%, transparent 90%, hsl(40 90% 70% / 0.3) 95%, transparent 100%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] tracking-wider text-foreground mb-4"
          style={{
            textShadow: '0 0 80px hsl(40 90% 55% / 0.3), 0 0 120px hsl(40 90% 55% / 0.2)',
          }}
        >
          BACKLIT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2 mb-8"
        >
          <span className="font-display text-2xl md:text-4xl text-muted-foreground tracking-widest">
            {t.hero.production}
          </span>
          <div className="flex flex-col items-start text-xs md:text-sm text-muted-foreground/60 tracking-[0.3em] uppercase font-body">
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
        className="absolute bottom-24 md:bottom-16 left-1/2 -translate-x-1/2 text-sm md:text-base text-muted-foreground font-body font-light italic tracking-wide"
      >
        {t.hero.tagline}
      </motion.p>
    </section>
  );
};

export default HeroSection;
