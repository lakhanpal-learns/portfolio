"use client";

import { useMemo, useState } from "react";

import { projects } from "@/content/projects";

import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectFilters from "@/components/sections/projects/ProjectFilters";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectCTA from "@/components/sections/projects/ProjectCTA";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects;
    }

    return projects.filter((project) => {
      switch (activeFilter) {
        case "Data Engineering":
          return project.category === "Data Engineering";

        case "Analytics":
          return project.category === "Analytics";

        case "SQL":
          return (
            project.category === "SQL" ||
            project.title.toLowerCase().includes("sql")
          );

        case "Dashboarding":
          return project.technologies.some((tech) =>
            tech.toLowerCase().includes("power bi")
          );

        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <main className="pb-20">
      <div className="mx-auto w-full max-w-[1650px] px-8 lg:px-10 xl:px-12">
        <ProjectsHero />

        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ProjectsGrid
          projects={filteredProjects}
        />

        <ProjectCTA />
      </div>
    </main>
  );
}