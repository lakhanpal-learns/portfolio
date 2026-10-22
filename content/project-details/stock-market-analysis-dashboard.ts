import type { ProjectDetailSection } from "@/types/project-detail";

export const dataAnalysisDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "stock-market-analysis-dashboard",
  sections: [
    { id: "overview", type: "overview", title: "Stock Market Analysis Dashboard", content: "A Streamlit exploratory-analysis app that loads CSV datasets and provides data previews, missing-value checks, descriptive statistics, and interactive charts." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["Python", "Streamlit", "Pandas", "Plotly"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Analysts often need a quick way to inspect a dataset's shape, missing values, summary statistics, trends, and relationships before deeper analysis." },
    { id: "solution", type: "solution", title: "Solution", content: "The app allows a user to select a CSV file, inspect records and descriptive statistics, review missing data, and create visualizations through sidebar controls." },
    { id: "features", type: "features", title: "Key Features", items: ["CSV file selection", "Dataset preview", "Missing-value summary", "Descriptive statistics", "Closing-price and volume charts when expected columns exist", "Numeric correlation heatmap", "Custom column charting"] },
    { id: "architecture", type: "architecture", title: "Application Workflow", content: "CSV dataset → Pandas loading and validation → preview and descriptive statistics → missing-value and correlation checks → Plotly charts rendered in Streamlit." },
  ],
};