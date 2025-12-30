import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm font-body">
      <button
        onClick={() => setLanguage('fr')}
        className={`transition-all duration-300 ${
          language === 'fr' 
            ? 'text-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FR
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-all duration-300 ${
          language === 'en' 
            ? 'text-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
