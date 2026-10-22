import type { Project } from "@/types/project";

export const sqlAnalytics: Project = {
  id: "6",
  slug: "global-data-science-job-tracker",
  featured: false,
  title: "Global Data Science Job Tracker",
  category: "Data Analytics",
  description:
    "An interactive Excel dashboard for exploring global data-science job postings, salary patterns, work settings, employment types, and country-level distribution.",
  businessProblem:
    "Job seekers and analysts need a structured way to compare roles, compensation, work arrangements, and geographic hiring patterns across job postings.",
  overview:
    "The repository contains an Excel dashboard built with PivotTables, PivotCharts, slicers, formulas, and conditional formatting to explore job-market data.",
  solution:
    "Organize job-posting data into interactive summaries and visualizations so users can filter and compare role and location patterns.",
  keyFeatures: [
    "KPI summary cards",
    "Salary comparisons across job roles",
    "Employment-type analysis",
    "Remote, hybrid, and on-site work-setting comparison",
    "Country-wise job distribution",
    "Interactive slicers and PivotCharts",
  ],
  technologies: ["Microsoft Excel", "PivotTables", "PivotCharts", "Excel Formulas", "Conditional Formatting"],
  image: "/images/projects/global-job-tracker.svg",
  github: "https://github.com/lakhanpal-learns/Global-Data-Science-Job-Tracker",
  demo: "#",
  status: "Completed",
  year: "2026",
};