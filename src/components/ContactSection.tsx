import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="min-h-[60vh] py-24 md:py-32 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl mb-8 text-foreground"
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground font-body text-lg mb-12"
        >
          {t.contact.message}
        </motion.p>

        <motion.a
          href={`mailto:${t.contact.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-3 text-foreground font-body text-xl md:text-2xl hover:text-primary transition-colors duration-300 group"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <span className="relative">
            {t.contact.email}
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
