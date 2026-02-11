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
    offset: ["start start", "end end"]
  });

  // Transform for floating images - staggered appearance based on scroll
  const image1Opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const image2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const image3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  const photos = [
    { src: photoCamera, opacity: image1Opacity },
    { src: photoIsland, opacity: image2Opacity },
    { src: photoMicro, opacity: image3Opacity },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-[250vh] pb-32 px-6 md:px-12 lg:px-24"
    >
      {/* Title - at the top of the section */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="font-display text-3xl md:text-4xl text-foreground/40 tracking-widest pt-24"
      >
        {t.about.title}
      </motion.h2>

      {/* Content wrapper with sticky photos */}
      <div className="relative mt-[40vh] flex flex-col md:flex-row">
        {/* Magazine-style text layout - narrow left column */}
        <div className="w-full md:w-1/4 space-y-6">
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

        {/* Empty space 1/4 */}
        <div className="hidden md:block md:w-1/4"></div>

        {/* Sticky photos container - right half (1/2) */}
        <div className="hidden md:block md:w-1/2">
          <div className="sticky top-1/2 -translate-y-1/2 flex justify-center">
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
      </div>

      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-foreground/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-foreground/30 font-body">
            © {new Date().getFullYear()} BACKLIT
          </p>
          
          <a 
            href="mailto:valentin@backlit.fr"
            className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <Mail className="w-4 h-4" />
            <span className="text-xs font-body tracking-wide">contact</span>
          </a>

          <a 
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <span className="text-xs font-body tracking-wide">see valentin's resume</span>
          </a>

          <a 
            href="/game"
            className="flex items-center gap-3 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <Gamepad2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-body tracking-wide">
              {language === 'fr' ? 'en savoir plus sur Valentin' : "learn more about Valentin"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
