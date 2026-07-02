import type { About, SidebarItem } from "@/types";

export const about: About = {
  hero: {
    badge:
      "Open to Internships • Data Analytics • Data Engineering",

    greeting: "Hi, I'm",

    name: "Lakhanpal",

    role: "Data & Analytics Professional",

    location: "Punjab, India",

    bio: "Computer Science student focused on Data Analytics, Data Engineering, SQL, Python, Power BI, and building production-ready data projects.",

    primaryButton: "View Projects",

    secondaryButton: "Download Resume",
  },

  education: {
    degree: "Bachelor of Technology",

    field: "Computer Science & Engineering",

    university: "GNA University",

    duration: "2023 – Present",

    graduation: "Expected Graduation: 2027",

    cgpa: "CGPA: 7.8",
  },

  focus: [
    {
      title: "Data Engineering",
      description:
        "Building scalable ETL pipelines, data warehouses, and modern data workflows.",
    },
    {
      title: "Data Analytics",
      description:
        "Transforming raw data into actionable business insights using SQL, Python, and BI tools.",
    },
    {
      title: "Business Intelligence",
      description:
        "Designing dashboards and reports that help stakeholders make informed decisions.",
    },
    {
      title: "Machine Learning",
      description:
        "Learning practical machine learning techniques for predictive analytics and intelligent systems.",
    },
  ],

  interests: [
    {
      title: "Data",
      description:
        "Exploring datasets and discovering patterns that drive better decisions.",
    },
    {
      title: "Automation",
      description:
        "Building tools and workflows that reduce manual effort and improve efficiency.",
    },
    {
      title: "Open Source",
      description:
        "Learning from community-driven projects and contributing whenever possible.",
    },
    {
      title: "System Design",
      description:
        "Understanding scalable software architecture and distributed systems.",
    },
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
    id: "focus",
    label: "Focus Areas",
  },
  {
    id: "interests",
    label: "Interests",
  },
];