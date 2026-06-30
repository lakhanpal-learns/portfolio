export type Project = {
  id: string;
  title: string;
  description: string;

  technologies: string[];

  github: string;

  live?: string;

  image: string;

  featured: boolean;
};