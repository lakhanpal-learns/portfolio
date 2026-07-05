"use client";

import type { ComponentType } from "react";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import {
  Database,
  FileSpreadsheet,
  Workflow,
  BarChart3,
  Component,
} from "lucide-react";

import { about } from "@/content";

import Card from "@/components/shared/Cards";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

type SkillIcon = {
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const skillIcons: Record<string, SkillIcon> = {
  // Languages
  Python: {
    icon: SiPython,
    color: "#3776AB",
  },
  SQL: {
    icon: Database,
    color: "#336791",
  },
  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  // Analytics
  "Power BI": {
    icon: BarChart3,
    color: "#F2C811",
  },
  Excel: {
    icon: FileSpreadsheet,
    color: "#217346",
  },
  Pandas: {
    icon: SiPandas,
    color: "#150458",
  },
  NumPy: {
    icon: SiNumpy,
    color: "#013243",
  },

  // Data Engineering
  PostgreSQL: {
    icon: SiPostgresql,
    color: "#336791",
  },
  Docker: {
    icon: SiDocker,
    color: "#2496ED",
  },
  ETL: {
    icon: Workflow,
    color: "#8B5CF6",
  },
  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  // Frontend
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
  },
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  "shadcn/ui": {
    icon: Component,
    color: "#000000",
  },
};

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: about.skills.languages,
    },
    {
      title: "Analytics",
      skills: about.skills.analytics,
    },
    {
      title: "Data Engineering",
      skills: about.skills.engineering,
    },
    {
      title: "Frontend",
      skills: about.skills.frontend,
    },
  ];

  return (
    <Section id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.title}>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const skillData = skillIcons[skill];

                    if (!skillData) return null;

                    const Icon = skillData.icon;

                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted"
                      >
                        <Icon
                          className="h-[18px] w-[18px] shrink-0"
                          style={{ color: skillData.color }}
                        />

                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}