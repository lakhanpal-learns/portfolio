import type { ProjectDetailSection } from "@/types/project-detail";

export const bankingPipelineDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "banking-data-engineering",
  sections: [
    { id: "overview", type: "overview", title: "End-to-End Banking Data Engineering", content: "A developing streaming-data project whose repository lays out Kafka ingestion, Apache Spark processing, layered data storage, dbt transformations, and downstream dashboard components." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["Kafka", "Apache Spark", "Python", "dbt", "SQL", "Docker"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Banking data pipelines need to ingest events reliably, process and validate them, and organize them into analytics-ready layers for reporting." },
    { id: "solution", type: "solution", title: "Current Approach", content: "The repository includes Docker configuration, a data-generator directory, a consumer component, a database directory, dbt assets, and a dashboard directory. The README describes the intended architecture; this project is marked in progress." },
    { id: "features", type: "features", title: "Project Components", items: ["Kafka event-ingestion layer", "Spark processing", "Bronze, Silver, and Gold layer design", "Data generator and consumer directories", "dbt transformation assets", "Docker-based local infrastructure", "Dashboard component"] },
    { id: "architecture", type: "architecture", title: "Target Data Flow", content: "Source systems/data generator → Kafka → Apache Spark → Bronze layer → Silver layer → Gold layer → database or warehouse → analytics and reporting." },
  ],
};