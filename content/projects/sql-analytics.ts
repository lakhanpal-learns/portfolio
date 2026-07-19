import type { Project } from "@/types/project";

export const sqlAnalytics: Project = {
  id: "3",

  slug: "sql-analytics",

  featured: false,

  title: "SQL Analytics Repository",

  category: "SQL",

  description:
    "Collection of advanced SQL case studies and business queries.",

  businessProblem:
    "Practice solving real-world business questions using SQL.",

  keyFeatures: [
    "CTEs",
    "Window Functions",
    "Joins",
    "Optimization",
  ],

  technologies: [
    "SQL",
    "PostgreSQL",
  ],

  image: "/images/projects/sql-cover.png",

  github: "#",

  demo: "#",

  status: "Completed",

  year: "2026",
};