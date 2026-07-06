export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  id: string;
  slug: string;

  featured: boolean;

  title: string;
  category: string;

  description: string;
  overview: string;

  businessProblem: string;
  solution: string;
  architecture: string;

  keyFeatures: string[];
  technologies: string[];

  challenges: string[];
  futureImprovements: string[];

  screenshots: string[];

  image: string;

  github: string;
  demo: string;

  status: ProjectStatus;
  year: string;
}