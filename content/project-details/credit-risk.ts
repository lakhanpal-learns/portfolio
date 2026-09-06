import type { ProjectDetailSection } from "@/types/project-detail";

export const creditRiskDetails: {
  slug: string;
  sections: ProjectDetailSection[];
} = {
  slug: "credit-risk",

  sections: [
    
     {
        id: "overview",
        type: "overview",
        title: "Credit Risk Analytics Platform",
        content:
          "An end-to-end analytics platform for exploring customer credit risk using SQL, Python, PostgreSQL, and Power BI.",
      },
          {
        id: "tech-stack",
        type: "tech-stack",
        title: "Tech Stack",
        items: [
          "Python",
          "SQL",
          "PostgreSQL",
          "Docker",
          "Power BI",
        ],
      },
    {
      id: "problem",
      type: "problem",
      title: "Business Problem",
      content:
        "Financial institutions require accurate customer risk analysis to reduce default risk and improve lending decisions.",
    },

    {
      id: "solution",
      type: "solution",
      title: "Solution",
      content:
        "An end-to-end analytics platform for exploring customer credit risk using SQL, Python, PostgreSQL, and Power BI.",
    },

    {
      id: "features",
      type: "features",
      title: "Key Features",
      items: [
        "Data Warehouse",
        "ETL Pipeline",
        "PostgreSQL",
        "Power BI Dashboard",
        "Data Validation",
        "Business Rules",
      ],
    },

    {
      id: "architecture",
      type: "architecture",
      title: "System Architecture",
      content:
        "How the complete data pipeline works from source to dashboard.",
    },
  ],
};


// Credit Risk explanation
//        ↓
// which sections exist
//        ↓
// section content