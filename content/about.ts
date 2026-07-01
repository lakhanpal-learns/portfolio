import type { About, SidebarItem } from "@/types";

export const about: About = {
  name: "Lakhanpal",

  role: "Data & Analytics Professional",

  location: "Punjab, India",

  bio: "Computer Science student focused on Data Analytics, Data Engineering, SQL, Python, Power BI, and building production-ready data projects.",

  focus: [
    "Data Analytics",
    "Data Engineering",
    "Business Intelligence",
    "Frontend Development",
  ],

  interests: [
    "Data",
    "Automation",
    "Open Source",
    "System Design",
  ],

  skills: {
    languages: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
    ],

    analytics: [
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
    ],

    engineering: [
      "PostgreSQL",
      "Docker",
      "ETL",
      "Git",
    ],

    frontend: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
};

export const aboutSidebar: SidebarItem[] = [
  {
    id: "information",
    label: "Information",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "goals",
    label: "Goals",
  },
  {
  id: "focus",
  label: "Focus Areas",
},
{
  id: "interests",
  label: "Interests",
},
];