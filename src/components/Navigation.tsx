import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import { motion } from 'framer-motion';

const Navigation = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => scrollTo('about')}
          className="nav-link text-sm font-body tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          {t.nav.about}
        </button>

        <LanguageSwitch />

        <button
          onClick={() => scrollTo('contact')}
          className="nav-link text-sm font-body tracking-wide text-foreground/60 hover:text-foreground transition-colors"
        >
          {t.nav.contact}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
