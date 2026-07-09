import type { Project } from "@/types/project";

import EmptyProjects from "./EmptyProjects";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
  clearFilters: () => void;
};

export default function ProjectsGrid({
  projects,
  clearFilters,
}: Props) {
  if (projects.length === 0) {
    return (
      <EmptyProjects
        clearFilters={clearFilters}
      />
    );
  }

  return (
    <section
      id="projects-grid"
      className="py-10 lg:py-14"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}