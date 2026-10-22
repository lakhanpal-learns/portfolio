import type { Project } from "@/types/project";

export const powerBiDashboard: Project = {
  id: "5",
  slug: "stock-market-pipeline",
  featured: true,
  title: "Stock Market Data Engineering Pipeline",
  category: "Data Engineering",
  description:
    "A modular Python pipeline that collects historical market data, validates and cleans it, engineers analytical features, and serves the results in a Streamlit dashboard.",
  businessProblem:
    "Raw market data needs validation, consistent cleaning, and reusable analytical features before it can support exploration of price movements and trading activity.",
  overview:
    "The project uses Yahoo Finance data and a modular processing workflow to prepare historical stock data, calculate technical indicators, visualize trends, and export processed datasets.",
  solution:
    "A Python pipeline connects data ingestion and preparation steps with an interactive Streamlit dashboard using Plotly visualizations.",
  keyFeatures: [
    "Historical market-data ingestion with yfinance",
    "Data validation and cleaning",
    "MA20 and MA50 moving averages",
    "RSI, daily returns, and volatility analysis",
    "Interactive Plotly charts and KPI dashboard",
    "Processed dataset export to CSV",
  ],
  technologies: ["Python", "Pandas", "NumPy", "yfinance", "Streamlit", "Plotly"],
  image: "/images/projects/powerbi-cover.png",
  github: "https://github.com/lakhanpal-learns/stock-market-data-engineering-pipeline",
  demo: "#",
  status: "Completed",
  year: "2026",
};