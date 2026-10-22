import type { Project } from "@/types/project";

export const dataAnalysis: Project = {
  id: "9",
  slug: "stock-market-analysis-dashboard",
  featured: false,
  title: "Stock Market Analysis Dashboard",
  category: "Data Analysis",
  description:
    "A Streamlit dashboard for exploring stock-market CSV data through data-quality checks, descriptive statistics, and interactive visualizations.",
  businessProblem:
    "Financial datasets can be difficult to explore consistently without quick checks for missing values, summary statistics, trends, and relationships between numeric fields.",
  overview:
    "The repository contains a Streamlit application that loads CSV files, displays sample records and descriptive statistics, checks missing values, and creates charts for closing prices, volume, correlations, and selected columns.",
  solution:
    "Provide an interactive exploratory-analysis interface using Pandas and Plotly so users can inspect datasets and build charts without editing the application code for every view.",
  keyFeatures: [
    "CSV dataset selection",
    "Dataset preview and descriptive statistics",
    "Missing-value inspection",
    "Closing-price and volume charts when matching columns exist",
    "Numeric correlation heatmap",
    "Custom x-axis and y-axis chart selection",
  ],
  technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
  image: "/images/projects/stock-market-analysis.svg",
  github: "https://github.com/lakhanpal-learns/data-analysis-project",
  demo: "#",
  status: "In Progress",
  year: "2026",
};