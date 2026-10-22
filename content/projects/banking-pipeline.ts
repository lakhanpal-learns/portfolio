import type { Project } from "@/types/project";

export const bankingPipeline: Project = {
  id: "8",
  slug: "banking-data-engineering",
  featured: false,
  title: "End-to-End Banking Data Engineering",
  category: "Streaming Data Engineering",
  description:
    "A production-style learning project exploring event ingestion, streaming transformation, data quality, and analytics-ready banking data layers.",
  businessProblem:
    "Banking analytics requires dependable movement of operational events through ingestion and transformation layers before they can be used for reporting.",
  overview:
    "The repository currently outlines a Kafka-to-Spark pipeline with Bronze, Silver, and Gold layers, and includes Docker configuration, data-generation code, consumer code, dbt assets, and a dashboard directory.",
  solution:
    "Build the pipeline in stages around Kafka, Apache Spark, layered data storage, and downstream analytics, with quality checks and orchestration as project goals.",
  keyFeatures: [
    "Kafka-based event ingestion",
    "Apache Spark processing",
    "Bronze, Silver, and Gold layer design",
    "Data-generation and consumer components",
    "dbt transformation project",
    "Docker-based local infrastructure",
  ],
  technologies: ["Kafka", "Apache Spark", "Python", "dbt", "Docker", "SQL"],
  image: "/images/projects/banking-pipeline.svg",
  github: "https://github.com/lakhanpal-learns/End-to-End-Banking-Data-Engineering",
  demo: "#",
  status: "In Progress",
  year: "2026",
};