export type ProjectStatus = "Completed" | "In Progress";

export type CustomSectionType =
  | "architecture"
  | "gallery"
  | "dashboard"
  | "database"
  | "etl"
  | "business-rules"
  | "markdown";

export interface CustomSection {
  id: string;

  title: string;

  type: CustomSectionType;

  description?: string;

  images?: string[];

  content?: string;
}

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

  keyFeatures: string[];

  technologies: string[];

  challenges: string[];

  futureImprovements: string[];

  customSections: CustomSection[];

  image: string;

  github: string;

  demo: string;

  status: ProjectStatus;

  year: string;
}