import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Gamepad2 } from 'lucide-react';
import production1 from '@/assets/production-1.jpg';
import production2 from '@/assets/production-2.jpg';
import production3 from '@/assets/production-3.jpg';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform for floating images
  const image1Y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const image1Opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  
  const image2Y = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  
  const image3Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const image3Opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

  const images = [
    { src: production1, y: image1Y, opacity: image1Opacity, offset: 'top-[20%]' },
    { src: production2, y: image2Y, opacity: image2Opacity, offset: 'top-[45%]' },
    { src: production3, y: image3Y, opacity: image3Opacity, offset: 'top-[70%]' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-[200vh] pt-[50vh] pb-32 px-6 md:px-12 lg:px-24"
    >
      <div className="relative">
        {/* Title - aligned left */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="font-display text-3xl md:text-4xl mb-16 text-foreground/40 tracking-widest"
        >
          {t.about.title}
        </motion.h2>

        {/* Magazine-style text layout - narrow left column (1/3) */}
        <div className="w-full md:w-1/3 space-y-6">
          {t.about.blocks.map((block, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`font-body text-xs leading-relaxed ${
                index === 1 || index === 6 || index === 12
                  ? 'text-foreground/70 font-medium'
                  : 'text-foreground/55'
              }`}
            >
              {block}
            </motion.p>
          ))}
        </div>

        {/* Floating images on the right */}
        <div className="hidden lg:block fixed right-12 bottom-12 w-56 pointer-events-none">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute right-0 bottom-0 w-48"
              style={{ 
                y: img.y, 
                opacity: img.opacity,
                transform: `translateY(${index * -120}px)`
              }}
            >
              <img 
                src={img.src} 
                alt="" 
                className="w-full h-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 pointer-events-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / Game Link */}
      <div className="mt-32 pt-12 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-foreground/30 font-body">
            © {new Date().getFullYear()} BACKLIT
          </p>
          
          <a 
            href="https://valentinwattelet.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <Gamepad2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-body tracking-wide">
              {language === 'fr' ? 'jouer aux aventures de Valentin' : "play Valentin's adventures"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
