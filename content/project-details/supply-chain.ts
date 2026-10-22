import type { ProjectDetailSection } from "@/types/project-detail";

export const supplyChainDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "supply-chain",
  sections: [
    { id: "overview", type: "overview", title: "Supply Chain Intelligence Platform", content: "A data-engineering project that documents ERPNext as an operational source for procurement, inventory, warehouse, supplier, sales-order, delivery, and invoicing analytics." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["ERPNext", "Python", "REST API", "Docker", "PostgreSQL (planned)", "SQL"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Supply-chain reporting depends on connected operational records across purchasing, inventory movements, suppliers, orders, and fulfillment. These records need a consistent extraction and transformation strategy before they can support analytics." },
    { id: "solution", type: "solution", title: "Solution", content: "The repository contains business requirements, KPI definitions, ERPNext module mapping, API mapping, extraction strategy, and a structured Python ETL project. The data warehouse and reporting stages are still being developed." },
    { id: "features", type: "features", title: "Key Features", items: ["Business requirements and stakeholder documentation", "Supply-chain process and KPI definitions", "ERPNext source-module mapping", "REST API extraction planning", "Docker-based ERPNext development environment", "Structured ETL folders for extraction, loading, validation, and transformation"] },
    { id: "architecture", type: "architecture", title: "Planned Data Flow", content: "ERPNext operational modules → authenticated REST API → Python ETL and validation → PostgreSQL raw/staging layer → SQL transformations and dimensional models → analytics and Power BI reporting. The downstream stages are planned rather than claimed as complete." },
  ],
};