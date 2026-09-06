import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

import ProjectDetailSections from "@/components/sections/project-detail/ProjectDetailSections";
import { getProjectDetails } from "@/lib/project-details";
import ProjectNavigation from "@/components/sections/project-detail/ProjectNavigation";
import ProjectSidebar from "@/components/sections/project-detail/ProjectSidebar";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  const projectDetails = getProjectDetails(slug);

  if (!projectDetails) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
  <ProjectNavigation />

    <div className="flex gap-12">
      <ProjectSidebar sections={projectDetails.sections} />

      <div className="min-w-0 flex-1">
        <ProjectDetailSections
          project={project}
          sections={projectDetails.sections}
        />
      </div>
    </div>
  </main>
  );
}

// ---------------------------------------------------------------

// Now the architecture is clean

// /projects/credit-risk
//         ↓
//       slug
//         ↓
// getProjectDetails("credit-risk")
//         ↓
// content/project-details/credit-risk.ts
//         ↓
// sections
//         ↓
// section-specific UI