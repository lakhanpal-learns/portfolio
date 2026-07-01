export type About = {
  name: string;
  role: string;
  location: string;
  bio: string;

  focus: string[];
  interests: string[];

  skills: {
    languages: string[];
    analytics: string[];
    engineering: string[];
    frontend: string[];
  };
};