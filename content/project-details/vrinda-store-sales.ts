import type { ProjectDetailSection } from "@/types/project-detail";

export const vrindaStoreDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "vrinda-store-sales",
  sections: [
    { id: "overview", type: "overview", title: "Vrinda Store Sales Analysis", content: "An interactive Excel dashboard for analyzing retail sales, customer demographics, sales channels, order status, and regional performance." },
    { id: "tech-stack", type: "tech-stack", title: "Tools", items: ["Microsoft Excel", "PivotTables", "PivotCharts", "Slicers", "Excel Formulas", "Conditional Formatting"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Retail performance is spread across customer segments, sales channels, regions, and fulfillment outcomes. A unified dashboard helps compare these dimensions consistently." },
    { id: "solution", type: "solution", title: "Solution", content: "The workbook uses interactive Excel summaries and charts to explore sales trends, demographic patterns, state performance, channels, and order fulfillment." },
    { id: "features", type: "features", title: "Dashboard Features", items: ["Sales and order KPI cards", "Monthly sales trend", "Sales by gender and age group", "Top states by sales", "Sales by channel", "Order-status distribution and slicers"] },
    { id: "architecture", type: "architecture", title: "Analysis Workflow", content: "Historical order data → Excel PivotTables and calculations → KPI cards and PivotCharts → slicers for interactive exploration → sales and fulfillment insights." },
  ],
};