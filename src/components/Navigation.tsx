import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navigation = () => {
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll();
  
  // Fade out navigation when scrolling past the hero section
  const navOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      style={{ opacity: navOpacity }}
      className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 py-6 pointer-events-auto"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => scrollTo('about')}
          className="nav-link text-sm font-body tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          {t.nav.about}
        </button>

        <a
          href="/cv.html"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-sm font-body tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          see valentin's resume
        </a>

        <LanguageSwitch />

        <a
          href="mailto:valentin@backlit.fr"
          className="nav-link text-sm font-body tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          {t.nav.contact}
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
