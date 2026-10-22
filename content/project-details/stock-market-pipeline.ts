import type { ProjectDetailSection } from "@/types/project-detail";

export const stockMarketPipelineDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "stock-market-pipeline",
  sections: [
    { id: "overview", type: "overview", title: "Stock Market Data Engineering Pipeline", content: "A modular Python workflow that retrieves historical market data, validates and cleans it, creates analytical features and technical indicators, and presents the results through Streamlit." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["Python", "yfinance", "Pandas", "NumPy", "Streamlit", "Plotly"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Historical market data requires repeatable validation, cleaning, and feature engineering before analysts can explore trends and compare market behavior." },
    { id: "solution", type: "solution", title: "Solution", content: "A modular data pipeline prepares historical prices and volume, calculates technical indicators, and connects the processed data to an interactive dashboard and CSV export." },
    { id: "features", type: "features", title: "Key Features", items: ["Historical data retrieval through yfinance", "Data validation and cleaning", "MA20 and MA50 moving averages", "RSI, daily returns, and volatility analysis", "Interactive Plotly visualizations", "KPI dashboard and CSV export"] },
    { id: "architecture", type: "architecture", title: "Pipeline Workflow", content: "Yahoo Finance → data ingestion → validation and cleaning → transformations and feature engineering → technical indicators → processed dataset → Streamlit dashboard and CSV export. Trend estimation is for exploration, not financial advice." },
  ],
};