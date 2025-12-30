import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <main className="bg-background min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 px-6 md:px-12 border-t border-border/20">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <p className="text-xs text-muted-foreground font-body">
              © {new Date().getFullYear()} BACKLIT
            </p>
          </div>
        </footer>
      </main>
    </LanguageProvider>
  );
};

export default Index;
