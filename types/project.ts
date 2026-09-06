export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  // ===== Basic Information =====

  id: string;
  slug: string;
  featured: boolean;
  title: string;
  category: string;
  description: string;
  businessProblem: string;

  // ===== Project Detail (Optional while building portfolio) =====

  overview?: string;
  solution?: string;

  // ===== Features =====

  keyFeatures: string[];
  technologies: string[];

  // ===== Additional Sections (Optional) =====

  challenges?: string[];
  futureImprovements?: string[];

  // ===== Links =====

  image: string;
  github: string;
  demo: string;

  // ===== Metadata =====

  status: ProjectStatus;
  year: string;
}