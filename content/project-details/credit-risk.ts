import type { ProjectDetailSection } from "@/types/project-detail";

export const creditRiskDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "credit-risk",
  sections: [
    { id: "overview", type: "overview", title: "Credit Risk Analytics Platform", content: "A modular credit-risk data project that generates linked synthetic customer, loan, risk, and repayment records using explicit banking business rules." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["Python", "Pandas", "CSV", "PostgreSQL (planned)", "Power BI (planned)"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Credit-risk analysis depends on consistent relationships between customer profiles, loan applications, lending decisions, repayment behavior, and default outcomes. Randomly generated fields would not preserve those relationships." },
    { id: "solution", type: "solution", title: "Solution", content: "The Python generator applies business rules across customer, credit profile, application, loan, risk, and payment modules. The project log documents data generation and validation as complete; database engineering and downstream analytics remain planned work." },
    { id: "features", type: "features", title: "Key Features", items: ["Rule-based customer and credit-profile generation", "Loan eligibility and approval logic", "Credit-score-based interest pricing and EMI calculations", "Linked loan and payment-history datasets", "Delinquency, recovery, and write-off fields", "Validation of date sequences and record relationships"] },
    { id: "architecture", type: "architecture", title: "Data Workflow", content: "Python data-generation modules → linked CSV datasets for loans and payments → planned PostgreSQL staging and normalized tables → SQL analysis → planned Power BI reporting." },
  ],
};