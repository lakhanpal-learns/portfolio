import type { ProjectDetailSection } from "@/types/project-detail";

export const globalJobTrackerDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "global-data-science-job-tracker",
  sections: [
    { id: "overview", type: "overview", title: "Global Data Science Job Tracker", content: "An interactive Excel dashboard that summarizes global data-science job postings and lets users explore salary, role, employment type, work setting, and country distribution." },
    { id: "tech-stack", type: "tech-stack", title: "Tools", items: ["Microsoft Excel", "PivotTables", "PivotCharts", "Slicers", "Excel Formulas", "Conditional Formatting"] },
    { id: "problem", type: "problem", title: "Business Problem", content: "Job-market data can be difficult to compare across roles and locations without consistent summaries of compensation, employment type, and work arrangements." },
    { id: "solution", type: "solution", title: "Solution", content: "The workbook organizes job-posting data into KPI cards and interactive charts with slicers, allowing users to filter and compare global job-market patterns." },
    { id: "features", type: "features", title: "Dashboard Features", items: ["KPI summary cards", "Salary analysis by role", "Employment-type comparison", "Work-setting analysis", "Country-wise job distribution", "Interactive slicers and PivotCharts"] },
    { id: "architecture", type: "architecture", title: "Analysis Workflow", content: "Job-posting dataset → Excel formulas and PivotTables → PivotCharts and KPI summaries → interactive dashboard filters → comparison of salary, role, location, and work-setting trends." },
  ],
};