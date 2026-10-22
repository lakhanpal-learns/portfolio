import type { Project } from "@/types/project";

export const salesDashboard: Project = {
  id: "4",
  slug: "vrinda-store-sales",
  featured: false,
  title: "Vrinda Store Sales Analysis",
  category: "Business Intelligence",
  description:
    "An interactive Excel dashboard exploring retail sales, customer demographics, sales channels, order status, and regional performance.",
  businessProblem:
    "Retail teams need a clear view of sales and order patterns across customer segments, locations, and sales channels to identify where performance is strongest.",
  overview:
    "The repository describes an Excel dashboard built with PivotTables, PivotCharts, slicers, formulas, and conditional formatting, with views for monthly sales, gender, age groups, states, channels, and order status.",
  solution:
    "Transform historical order data into an interactive Excel dashboard so users can filter the results and compare sales and fulfillment patterns.",
  keyFeatures: [
    "Sales and order KPI cards",
    "Monthly sales trends",
    "Sales by gender and age group",
    "Top states by sales",
    "Sales-channel comparison",
    "Order-status distribution and interactive slicers",
  ],
  technologies: ["Microsoft Excel", "PivotTables", "PivotCharts", "Excel Formulas", "Slicers"],
  image: "/images/projects/vrinda-store-sales.svg",
  github: "https://github.com/lakhanpal-learns/Vrinda-Store-Sales-Analysis",
  demo: "#",
  status: "Completed",
  year: "2026",
};