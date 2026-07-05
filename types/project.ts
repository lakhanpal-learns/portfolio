export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  id: string;
  slug: string;

  featured: boolean;

  title: string;
  category: string;

  description: string;
  businessProblem: string;

  keyFeatures: string[];
  technologies: string[];

  image: string;

  github: string;
  demo: string;

  status: ProjectStatus;
  year: string;
}