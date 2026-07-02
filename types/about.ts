export interface ContentCard {
  title: string;
  description: string;
}

export interface HeroContent {
  badge: string;
  greeting: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface EducationContent {
  degree: string;
  field: string;
  university: string;
  duration: string;
  graduation: string;
  cgpa: string;
}

export type About = {
  hero: HeroContent;

  education: EducationContent;

  focus: ContentCard[];

  interests: ContentCard[];

  skills: {
    languages: string[];
    analytics: string[];
    engineering: string[];
    frontend: string[];
  };
};