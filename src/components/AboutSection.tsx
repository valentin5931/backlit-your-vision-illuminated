import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Gamepad2, Mail } from 'lucide-react';
import photoCamera from '@/assets/photo-camera.jpg';
import photoIsland from '@/assets/photo-island.jpg';
import photoMicro from '@/assets/photo-micro.jpg';

const AboutSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform for floating images
  const image1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 0.7]);
  const image2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 0.7]);
  const image3Opacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 0.7]);

  const photos = [
    { src: photoCamera, opacity: image1Opacity },
    { src: photoIsland, opacity: image2Opacity },
    { src: photoMicro, opacity: image3Opacity },
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

        {/* Mosaic photos - positioned within the section, above footer */}
        <div className="absolute right-6 md:right-12 lg:right-24 bottom-48 pointer-events-none">
          <div className="grid grid-cols-2 gap-2 w-48 md:w-64">
            <motion.div
              className="col-span-1"
              style={{ opacity: photos[0].opacity }}
            >
              <img src={photos[0].src} alt="" className="w-full h-auto grayscale" />
            </motion.div>
            <motion.div
              className="col-span-1 mt-8"
              style={{ opacity: photos[1].opacity }}
            >
              <img src={photos[1].src} alt="" className="w-full h-auto grayscale" />
            </motion.div>
            <motion.div
              className="col-span-2 -mt-4"
              style={{ opacity: photos[2].opacity }}
            >
              <img src={photos[2].src} alt="" className="w-full h-auto grayscale" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-foreground/30 font-body">
            © {new Date().getFullYear()} BACKLIT
          </p>
          
          <a 
            href="mailto:valentin@backlit-prod.com"
            className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <Mail className="w-4 h-4" />
            <span className="text-xs font-body tracking-wide">contact</span>
          </a>
          
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
