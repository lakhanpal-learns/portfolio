import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectFilters from "@/components/sections/projects/ProjectFilters";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectCTA from "@/components/sections/projects/ProjectCTA";

import Container from "@/components/shared/Container";

export default function ProjectsPage() {
  return (
    <main className="pb-20">
      <ProjectsHero />

      <Container>
        <ProjectFilters />

        <ProjectsGrid />
      </Container>

      <ProjectCTA />
    </main>
  );
}