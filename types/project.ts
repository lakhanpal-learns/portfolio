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
  customSections?: CustomSection[];

  // ===== Links =====
  image: string;
  github: string;
  demo: string;

  // ===== Metadata =====
  status: ProjectStatus;
  year: string;
}