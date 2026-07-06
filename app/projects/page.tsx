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

  const [sortOrder, setSortOrder] = useState<
    "latest" | "oldest"
  >("latest");

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Category
    if (activeFilter !== "All Projects") {
      result = result.filter((project) => {
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
    }

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((project) => {
        return (
          project.title.toLowerCase().includes(query) ||
          project.description
            .toLowerCase()
            .includes(query) ||
          project.category
            .toLowerCase()
            .includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          )
        );
      });
    }

    // Sort
    result.sort((a, b) => {
      const yearA = Number(a.year);
      const yearB = Number(b.year);

      return sortOrder === "latest"
        ? yearB - yearA
        : yearA - yearB;
    });

    return result;
  }, [activeFilter, sortOrder, search]);

  return (
    <main className="pb-20">
      <div className="mx-auto w-full max-w-[1650px] px-8 lg:px-10 xl:px-12">
        <ProjectsHero />

        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          search={search}
          setSearch={setSearch}
        />

        <ProjectsGrid projects={filteredProjects} />

        <ProjectCTA />
      </div>
    </main>
  );
}