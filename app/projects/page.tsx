"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { projects } from "@/content/projects";

import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectFilters from "@/components/sections/projects/ProjectFilters";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectCTA from "@/components/sections/projects/ProjectCTA";

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "All Projects";

  const [activeFilter, setActiveFilterState] =
    useState(initialCategory);

  const [sortOrder, setSortOrder] = useState<
    "latest" | "oldest"
  >("latest");

  const [search, setSearch] = useState("");

  const clearFilters = () => {
  setActiveFilter("All Projects");
  setSearch("");
  setSortOrder("latest");

  router.replace("/projects", {
    scroll: false,
  });
};

  function setActiveFilter(value: string) {
    setActiveFilterState(value);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value === "All Projects") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    router.replace(`/projects?${params.toString()}`, {
      scroll: false,
    });
  }

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeFilter !== "All Projects") {
      result = result.filter((project) => {
        switch (activeFilter) {
          case "Data Engineering":
            return (
              project.category === "Data Engineering"
            );

          case "Analytics":
            return project.category === "Analytics";

          case "SQL":
            return (
              project.category === "SQL" ||
              project.title
                .toLowerCase()
                .includes("sql")
            );

          case "Dashboarding":
            return project.technologies.some((tech) =>
              tech
                .toLowerCase()
                .includes("power bi")
            );

          default:
            return true;
        }
      });
    }

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

    result.sort((a, b) => {
      const yearA = Number(a.year);
      const yearB = Number(b.year);

      return sortOrder === "latest"
        ? yearB - yearA
        : yearA - yearB;
    });

    return result;
  }, [activeFilter, sortOrder, search]);

  const filterCounts = {
    "All Projects": projects.length,

    "Data Engineering": projects.filter(
      (p) => p.category === "Data Engineering"
    ).length,

    Analytics: projects.filter(
      (p) => p.category === "Analytics"
    ).length,

    SQL: projects.filter(
      (p) =>
        p.category === "SQL" ||
        p.title.toLowerCase().includes("sql")
    ).length,

    Dashboarding: projects.filter((p) =>
      p.technologies.some((tech) =>
        tech.toLowerCase().includes("power bi")
      )
    ).length,
  };

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
          filterCounts={filterCounts}
          totalProjects={filteredProjects.length}
        />

       <ProjectsGrid
          projects={filteredProjects}
          clearFilters={clearFilters}
        />

        <ProjectCTA />
      </div>
    </main>
  );
}