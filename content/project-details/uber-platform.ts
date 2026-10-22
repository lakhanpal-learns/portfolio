import type { ProjectDetailSection } from "@/types/project-detail";

export const uberPlatformDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "uber-platform",
  sections: [
    { id: "overview", type: "overview", title: "Uber Real-Time Data Engineering Platform", content: "A ride-data platform combining historical batch ingestion and real-time ride events, then preparing modeled data for analytics and a web dashboard. This is an independent educational project, not an official Uber product." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["Azure Data Factory", "Azure Event Hubs", "ADLS Gen2", "Databricks", "PySpark", "Spark Structured Streaming", "Delta Lake", "SQL", "Power BI", "Flask", "Render"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Historical ride datasets and incoming ride events have different ingestion patterns. They need to be combined, transformed, modeled, and made available for reliable downstream analytics." },
    { id: "solution", type: "solution", title: "Solution", content: "The project combines Azure Data Factory batch ingestion with Event Hubs streaming, uses Databricks and Delta Lake for Bronze/Silver processing, applies CDC and dimensional modeling, and exposes analytics through Databricks SQL Warehouse and a Flask dashboard." },
    { id: "features", type: "features", title: "Key Features", items: ["Historical batch and real-time event ingestion", "Spark Structured Streaming with checkpoints and watermarks", "Bronze and Silver processing layers", "Metadata-driven SQL transformations", "Auto CDC and SCD Type 1/Type 2 patterns", "Fact/dimension star schema", "Flask API and deployed web dashboard"] },
    { id: "architecture", type: "architecture", title: "Data Architecture", content: "Historical source → Azure Data Factory → ADLS Gen2; ride events → Azure Event Hubs; both paths feed Databricks → Bronze → Silver → CDC and fact/dimension tables → star schema → Databricks SQL Warehouse → Power BI and Flask web dashboard." },
  ],
};