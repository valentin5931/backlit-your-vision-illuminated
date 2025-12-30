import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <LanguageProvider>
      <main className="bg-background min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
      </main>
    </LanguageProvider>
  );
};

export default Index;
