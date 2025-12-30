import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl mb-16 text-foreground"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-foreground/90 font-body text-lg leading-relaxed"
            >
              {t.about.intro}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-foreground font-body text-lg leading-relaxed font-medium"
            >
              {t.about.philosophy}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-foreground/80 font-body text-base leading-relaxed"
            >
              {t.about.description1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-foreground/80 font-body text-base leading-relaxed"
            >
              {t.about.description2}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-foreground/80 font-body text-base leading-relaxed"
            >
              {t.about.description3}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <p className="text-foreground/80 font-body text-base leading-relaxed mb-2">
                {t.about.description4}
              </p>
              <p className="text-primary font-body text-lg font-medium italic">
                {t.about.approach}
              </p>
            </motion.div>
          </div>

          {/* Visual element - abstract backlit effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="sticky top-32 aspect-square">
              <div 
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle at center, hsl(40 90% 55% / 0.6) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />
              <div 
                className="absolute inset-12 rounded-full border border-foreground/10"
              />
              <div 
                className="absolute inset-24 rounded-full border border-foreground/5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
