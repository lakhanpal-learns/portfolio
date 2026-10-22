import type { Project } from "@/types/project";

export const creditRisk: Project = {
  id: "1",
  slug: "credit-risk",
  featured: true,
  title: "Credit Risk Analytics Platform",
  category: "Banking Analytics",
  description:
    "A modular credit-risk data project that generates realistic synthetic customer, loan, risk, and repayment records using explicit banking business rules.",
  businessProblem:
    "Credit-risk analysis depends on consistent relationships between customer profiles, loan applications, lending decisions, repayments, and default outcomes.",
  overview:
    "The project generates linked synthetic banking datasets with rule-driven customer profiles, loan eligibility, interest pricing, EMI calculations, risk events, and payment history. The repository documents data generation as complete and PostgreSQL modeling as the next phase.",
  solution:
    "A modular Python data-generation workflow creates related loan and payment datasets and validates key business rules before the data moves into planned database and analytics layers.",
  keyFeatures: [
    "Rule-based customer and credit-profile generation",
    "Loan eligibility and approval logic",
    "Credit-score-based interest pricing and EMI calculations",
    "Linked loan and payment-history datasets",
    "Risk, delinquency, recovery, and write-off fields",
    "Validation of date sequences and record relationships",
  ],
  technologies: ["Python", "Pandas", "CSV", "PostgreSQL (planned)", "Power BI (planned)"],
  image: "/images/projects/credit-risk.svg",
  github: "https://github.com/lakhanpal-learns/Credit-Risk-Analytics",
  demo: "#",
  status: "In Progress",
  year: "2026",
};