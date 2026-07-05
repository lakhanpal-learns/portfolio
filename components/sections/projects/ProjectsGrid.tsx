import { projects } from "@/content/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}