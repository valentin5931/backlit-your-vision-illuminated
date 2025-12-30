import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  nav: {
    about: string;
    contact: string;
  };
  hero: {
    tagline: string;
    production: string;
    creative: string;
    executive: string;
  };
  about: {
    title: string;
    blocks: string[];
  };
  contact: {
    title: string;
    email: string;
    message: string;
  };
}

const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      about: 'à propos',
      contact: 'contact',
    },
    hero: {
      tagline: 'we build stories in the real world',
      production: 'PRODUCTION',
      creative: 'CRÉATIVE',
      executive: 'EXÉCUTIVE',
    },
    about: {
      title: 'À PROPOS',
      blocks: [
        "Backlit est une société de production exécutive et créative née d'un constat simple :",
        "la production n'est pas un support à la création, elle en fait partie.",
        "Nous développons, fabriquons et accompagnons des formats où la mise en scène, le rythme, l'expérience vécue par les participants et la réalité du terrain sont indissociables.",
        "Des projets d'aventure, de jeu, de récit, souvent ambitieux, parfois risqués, toujours exigeants.",
        "Notre travail commence bien avant le tournage.",
        "Dans l'écriture d'un dispositif. Dans la manière dont une règle raconte déjà quelque chose. Dans la façon dont un lieu, une contrainte logistique ou une décision budgétaire deviennent des éléments narratifs.",
        "Forts de plus de dix ans d'expérience sur des productions de grande ampleur, nous avons développé une approche singulière : penser comme des créateurs, agir comme des producteurs.",
        "Backlit opère là où les lignes se croisent : entre logistique lourde et finesse artistique, entre réalité du terrain et intention de mise en scène, entre efficacité industrielle et regard d'auteur.",
        "Nous accompagnons aussi bien des formats installés que des créations originales, en lien étroit avec producteurs, diffuseurs, auteurs et réalisateurs.",
        "L'intelligence artificielle fait partie de nos outils, pour explorer, visualiser, tester, préparer, mais la décision reste humaine, sensible, contextuelle.",
        "Ce que nous cherchons : des projets qui racontent quelque chose autrement.",
        "Des dispositifs qui font sens autant qu'ils font spectacle. Des productions où l'on sent une vision, sans jamais voir la mécanique.",
        "Backlit, c'est une production qui assume son rôle créatif. Discrète à l'écran. Décisive en amont.",
      ],
    },
    contact: {
      title: 'CONTACT',
      email: 'contact@backlit.fr',
      message: "Discutons de votre prochain projet",
    },
  },
  en: {
    nav: {
      about: 'about',
      contact: 'contact',
    },
    hero: {
      tagline: 'we build stories in the real world',
      production: 'PRODUCTION',
      creative: 'CREATIVE',
      executive: 'EXECUTIVE',
    },
    about: {
      title: 'ABOUT',
      blocks: [
        "Backlit is an executive and creative production company born from a simple observation:",
        "production is not a support for creation, it is part of it.",
        "We develop, create and support formats where staging, rhythm, the experience lived by participants and the reality on the ground are inseparable.",
        "Adventure projects, games, narratives—often ambitious, sometimes risky, always demanding.",
        "Our work begins long before shooting.",
        "In the writing of a framework. In the way a rule already tells a story. In how a location, a logistical constraint or a budget decision become narrative elements.",
        "With more than ten years of experience in large-scale productions, we have developed a unique approach: think like creators, act like producers.",
        "Backlit operates where the lines cross: between heavy logistics and artistic finesse, between reality on the ground and staging intentions, between industrial efficiency and an auteur's perspective.",
        "We support both established formats and original creations, working closely with producers, broadcasters, writers and directors.",
        "Artificial intelligence is part of our tools, to explore, visualize, test, prepare, but the decision remains human, sensitive, contextual.",
        "What we're looking for: projects that tell something differently.",
        "Formats that make sense as much as they make spectacle. Productions where you feel a vision, without ever seeing the mechanics.",
        "Backlit is a production that embraces its creative role. Discreet on screen. Decisive upstream.",
      ],
    },
    contact: {
      title: 'CONTACT',
      email: 'contact@backlit.fr',
      message: "Let's discuss your next project",
    },
  },
};

// Detect browser language
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  return 'en';
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => getBrowserLanguage());

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
