import type { ProjectDetailSection } from "@/types/project-detail";

export const customerChurnDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "digital-payments-fraud",
  sections: [
    { id: "overview", type: "overview", title: "Digital Payments & Fraud Risk Analytics System", content: "An end-to-end FinTech analytics project built around synthetic payment transactions, PostgreSQL, SQL analytics, DAX measures, and four Power BI dashboards." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["Python", "Pandas", "NumPy", "PostgreSQL", "SQL", "Power BI", "DAX"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Payment platforms need to monitor transaction success and failures, latency, fraud exposure, and merchant performance to understand operational health and risk." },
    { id: "solution", type: "solution", title: "Solution", content: "The project generates more than 100,000 synthetic transactions, loads them into PostgreSQL, analyzes payment and fraud patterns with SQL, and presents stakeholder-focused KPIs in Power BI." },
    { id: "features", type: "features", title: "Key Features", items: ["Synthetic transaction generation and validation", "PostgreSQL schema and loading scripts", "SQL analytics and advanced KPI queries", "Rule-based fraud-risk scoring", "Executive, fraud-risk, payment-operations, and merchant/customer dashboards", "DAX measures for success, failure, latency, fraud, and transaction value"] },
    { id: "architecture", type: "architecture", title: "Analytics Workflow", content: "Python synthetic data generator → CSV transaction data → PostgreSQL → SQL analytics layer → DAX measures and Power BI dashboards → business insights and recommendations." },
  ],
};