import type { Project } from "@/types/project";

export const customerChurn: Project = {
  id: "3",
  slug: "digital-payments-fraud",
  featured: true,
  title: "Digital Payments & Fraud Risk Analytics System",
  category: "FinTech Analytics",
  description:
    "An end-to-end payment analytics project using synthetic transaction data, PostgreSQL, SQL, Python, and Power BI to examine fraud risk and payment operations.",
  businessProblem:
    "Payment teams need to monitor transaction success, failures, latency, merchant performance, and potential fraud exposure across a digital payments ecosystem.",
  overview:
    "The repository documents a workflow that generates more than 100,000 synthetic payment transactions, loads them into PostgreSQL, applies SQL analytics and DAX measures, and presents four stakeholder-focused Power BI dashboards.",
  solution:
    "A synthetic-data pipeline and relational database support operational and fraud analytics, with dashboards for executive monitoring, fraud risk, payment operations, and merchant/customer insights.",
  keyFeatures: [
    "100,000+ synthetic payment transactions",
    "PostgreSQL schema and data loading scripts",
    "SQL queries for payment and fraud analytics",
    "Rule-based fraud-risk scoring",
    "DAX KPIs and four Power BI dashboards",
    "Merchant, customer, latency, and payment-failure analysis",
  ],
  technologies: ["Python", "Pandas", "NumPy", "PostgreSQL", "SQL", "Power BI", "DAX"],
  image: "/images/projects/customer-churn-cover.png",
  github: "https://github.com/lakhanpal-learns/digital-payments-fraud-risk-analytics-system",
  demo: "#",
  status: "Completed",
  year: "2026",
};