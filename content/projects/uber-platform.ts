import type { Project } from "@/types/project";

export const uberPlatform: Project = {
  id: "7",
  slug: "uber-platform",
  featured: true,
  title: "Uber Real-Time Data Engineering Platform",
  category: "Cloud Data Engineering",
  description:
    "A ride-data platform combining historical batch ingestion and real-time ride events with Azure, Databricks, PySpark, and a deployed analytics dashboard.",
  businessProblem:
    "Historical and streaming ride data need to be brought together, transformed, modeled, and exposed in a form that supports downstream analytics.",
  overview:
    "The implementation uses Azure Data Factory for historical ingestion, Event Hubs for streaming, ADLS Gen2 for storage, Databricks and Delta Lake for processing, and a star-schema model for analytics.",
  solution:
    "Combine batch and streaming data in a medallion-style workflow, apply CDC and dimensional modeling, then expose analytics through Databricks SQL Warehouse, Power BI, and a Flask web dashboard.",
  keyFeatures: [
    "Historical batch ingestion and real-time event streaming",
    "Azure Data Factory, Event Hubs, and ADLS Gen2",
    "Bronze and Silver data processing with Delta Lake",
    "Spark Structured Streaming, checkpoints, and watermarks",
    "Auto CDC and fact/dimension star-schema modeling",
    "Flask API and deployed dashboard integration",
  ],
  technologies: ["Microsoft Azure", "Azure Data Factory", "Event Hubs", "ADLS Gen2", "Databricks", "PySpark", "Delta Lake", "Power BI", "Flask", "Render"],
  image: "/images/projects/uber-platform.svg",
  github: "https://github.com/lakhanpal-learns/uber-data-engineering-platform",
  demo: "https://uber-data-engineering-platform.onrender.com/",
  status: "Completed",
  year: "2026",
};