import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "credit-risk",

    featured: true,

    title: "Credit Risk Analytics Platform",

    category: "Data Engineering",

    description:
      "An end-to-end analytics platform for exploring customer credit risk using SQL, Python, PostgreSQL, and Power BI.",

    businessProblem:
      "Financial institutions require accurate customer risk analysis to reduce default risk and improve lending decisions.",

    keyFeatures: [
      "Data Warehouse",
      "ETL Pipeline",
      "PostgreSQL",
      "Power BI Dashboard",
      "Data Validation",
      "Business Rules",
    ],

    technologies: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Power BI",
    ],

    image: "/images/projects/credit-risk-cover.png",

    github: "#",

    demo: "#",

    status: "In Progress",

    year: "2026",
  },

  {
    id: "2",
    slug: "supply-chain",

    featured: false,

    title: "Supply Chain Analytics",

    category: "Analytics",

    description:
      "Interactive analytics platform for inventory, logistics, and supplier performance.",

    businessProblem:
      "Improve inventory planning and reduce supply chain inefficiencies.",

    keyFeatures: [
      "KPIs",
      "Dashboard",
      "Forecasting",
      "Inventory Analysis",
    ],

    technologies: [
      "Python",
      "SQL",
      "Power BI",
    ],

    image: "/images/projects/supply-chain-cover.png",

    github: "#",

    demo: "#",

    status: "In Progress",

    year: "2026",
  },

  {
    id: "3",
    slug: "sql-analytics",

    featured: false,

    title: "SQL Analytics Repository",

    category: "SQL",

    description:
      "Collection of advanced SQL case studies and business queries.",

    businessProblem:
      "Practice solving real-world business questions using SQL.",

    keyFeatures: [
      "CTEs",
      "Window Functions",
      "Joins",
      "Optimization",
    ],

    technologies: [
      "SQL",
      "PostgreSQL",
    ],

    image: "/images/projects/sql-cover.png",

    github: "#",

    demo: "#",

    status: "Completed",

    year: "2026",
  },

  {
    id: "4",
    slug: "powerbi-dashboard",

    featured: false,

    title: "Power BI Dashboards",

    category: "Business Intelligence",

    description:
      "Interactive dashboards designed for executive reporting and KPI monitoring.",

    businessProblem:
      "Enable stakeholders to make data-driven business decisions.",

    keyFeatures: [
      "DAX",
      "KPIs",
      "Interactive Reports",
    ],

    technologies: [
      "Power BI",
      "Excel",
      "SQL",
    ],

    image: "/images/projects/powerbi-cover.png",

    github: "#",

    demo: "#",

    status: "Completed",

    year: "2026",
  },

  {
    id: "5",
    slug: "customer-churn",

    featured: false,

    title: "Customer Churn Prediction",

    category: "Machine Learning",

    description:
      "Predict customer churn using machine learning and business analytics.",

    businessProblem:
      "Help businesses retain valuable customers through predictive insights.",

    keyFeatures: [
      "Feature Engineering",
      "Model Training",
      "Prediction",
    ],

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],

    image: "/images/projects/customer-churn-cover.png",

    github: "#",

    demo: "#",

    status: "In Progress",

    year: "2026",
  },

  {
    id: "6",
    slug: "sales-dashboard",

    featured: false,

    title: "Sales Analytics Dashboard",

    category: "Analytics",

    description:
      "Business dashboard for monitoring sales performance and trends.",

    businessProblem:
      "Track sales KPIs and identify revenue opportunities.",

    keyFeatures: [
      "Revenue Analysis",
      "KPIs",
      "Forecasting",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Excel",
    ],

    image: "/images/projects/sales-cover.png",

    github: "#",

    demo: "#",

    status: "Completed",

    year: "2026",
  },
];