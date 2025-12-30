import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import backlitLogo from '@/assets/backlit-logo.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Main content - Logo image */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        <motion.img 
          src={backlitLogo}
          alt="BACKLIT"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full h-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2 mt-8"
        >
          <span className="font-display text-2xl md:text-4xl text-foreground/50 tracking-widest">
            {t.hero.production}
          </span>
          <div className="flex flex-col items-start text-xs md:text-sm text-foreground/30 tracking-[0.3em] uppercase font-body">
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
        className="absolute bottom-24 md:bottom-16 left-1/2 -translate-x-1/2 text-sm md:text-base text-foreground/50 font-body font-light italic tracking-wide text-center px-4"
      >
        {t.hero.tagline}
      </motion.p>
    </section>
  );
};

export default HeroSection;
