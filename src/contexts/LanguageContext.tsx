import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    intro: string;
    philosophy: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    approach: string;
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
      tagline: 'nous construisons des histoires dans le monde réel',
      production: 'PRODUCTION',
      creative: 'CRÉATIVE',
      executive: 'EXÉCUTIVE',
    },
    about: {
      title: 'À PROPOS',
      intro: "Backlit est une société de production exécutive et créative née d'un constat simple :",
      philosophy: "la production n'est pas un support à la création, elle en fait partie.",
      description1: "Nous développons, fabriquons et accompagnons des formats où la mise en scène, le rythme, l'expérience vécue par les participants et la réalité du terrain sont indissociables.",
      description2: "Des projets d'aventure, de jeu, de récit, souvent ambitieux, parfois risqués, toujours exigeants.",
      description3: "Notre travail commence bien avant le tournage. Dans l'écriture d'un dispositif. Dans la manière dont une règle raconte déjà quelque chose. Dans la façon dont un lieu, une contrainte logistique ou une décision budgétaire deviennent des éléments narratifs.",
      description4: "Forts de plus de dix ans d'expérience sur des productions de grande ampleur, nous avons développé une approche singulière :",
      approach: "penser comme des créateurs, agir comme des producteurs.",
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
      intro: "Backlit is an executive and creative production company born from a simple observation:",
      philosophy: "production is not a support for creation, it is part of it.",
      description1: "We develop, create and support formats where staging, rhythm, the experience lived by participants and the reality of the field are inseparable.",
      description2: "Adventure projects, games, narratives—often ambitious, sometimes risky, always demanding.",
      description3: "Our work begins long before shooting. In the writing of a framework. In the way a rule already tells a story. In how a location, a logistical constraint or a budget decision become narrative elements.",
      description4: "With more than ten years of experience in large-scale productions, we have developed a unique approach:",
      approach: "think like creators, act like producers.",
    },
    contact: {
      title: 'CONTACT',
      email: 'contact@backlit.fr',
      message: "Let's discuss your next project",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

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
