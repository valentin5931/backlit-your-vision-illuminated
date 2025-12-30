import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Style variations for different block types
  const getBlockStyle = (index: number) => {
    if (index === 0) return "text-foreground/90 font-body text-lg leading-relaxed";
    if (index === 1) return "text-foreground font-body text-lg leading-relaxed font-medium";
    if (index === 6) return "text-primary font-body text-lg font-medium italic";
    if (index === 10 || index === 12) return "text-foreground font-body text-base leading-relaxed font-medium";
    return "text-foreground/80 font-body text-base leading-relaxed";
  };

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
          <div className="space-y-6">
            {t.about.blocks.map((block, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                className={getBlockStyle(index)}
              >
                {block}
              </motion.p>
            ))}
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
