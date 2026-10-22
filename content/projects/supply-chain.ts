import type { Project } from "@/types/project";

export const supplyChain: Project = {
  id: "2",
  slug: "supply-chain",
  featured: true,
  title: "Supply Chain Intelligence Platform",
  category: "Data Engineering",
  description:
    "A supply-chain analytics platform planned around ERPNext operational data, Python extraction, PostgreSQL storage, and analytics-ready models.",
  businessProblem:
    "Supply-chain teams need consistent visibility into procurement, inventory, warehouse movements, suppliers, orders, and fulfillment to monitor operational performance.",
  overview:
    "The project documents business requirements, stakeholder needs, supply-chain processes, KPIs, ERPNext source modules, and API extraction strategy. The repository includes an ETL project structure and Docker configuration.",
  solution:
    "Use ERPNext REST APIs as an operational source and build a Python ETL workflow that can land source data in a database for subsequent transformation and reporting.",
  keyFeatures: [
    "ERPNext source-system and module mapping",
    "REST API extraction planning",
    "Supply-chain KPI definitions",
    "Python ETL project structure",
    "Docker-based development setup",
    "Planned analytics-ready data modeling",
  ],
  technologies: ["ERPNext", "Python", "REST API", "PostgreSQL (planned)", "Docker", "SQL"],
  image: "/images/projects/supply-chain.svg",
  github: "https://github.com/lakhanpal-learns/supply-chain-intelligence-platform",
  demo: "#",
  status: "In Progress",
  year: "2026",
};