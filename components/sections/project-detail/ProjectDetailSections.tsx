import type { ProjectDetailSection } from "@/types/project-detail";
import type { Project } from "@/types/project";
import ProjectProblem from "./ProjectProblem";
import ProjectSolution from "./ProjectSolution";
import ProjectFeatures from "./ProjectFeatures";
import ProjectArchitecture from "./ProjectArchitecture";
import ProjectOverview from "./ProjectOverview";
import ProjectTechStack from "./ProjectTechStack";

type Props = {
  project: Project;
  sections: ProjectDetailSection[];
};

export default function ProjectDetailSections({
  project,
  sections,
}: Props) {
  return (
  <div className="space-y-20">
      {sections.map((section) => {
        switch (section.type) {

          case "overview":
            return (
              <ProjectOverview
                key={section.id}
                project={project}
                section={section}
              />
            );

          case "tech-stack":
            return (
              <ProjectTechStack
                key={section.id}
                section={section}
              />
            );

          case "problem":
            return (
              <ProjectProblem
                key={section.id}
                section={section}
              />
            );

          case "solution":
            return (
              <ProjectSolution
                key={section.id}
                section={section}
              />
            );

          case "features":
            return (
              <ProjectFeatures
                key={section.id}
                section={section}
              />
            );

          case "architecture":
            return (
              <ProjectArchitecture
                key={section.id}
                section={section}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}


// page.tsx
//    │
//    ├── project ───────────────┐
//    │                          ↓
//    └── projectDetails.sections
//                               ↓
//                     ProjectDetailSections
//                               ↓
//                     ┌─────────┴─────────┐
//                     ↓                   ↓
//                  project             section
//                     ↓                   ↓
//               image/links          content
//                     └────────┬──────────┘
//                              ↓
//                     ProjectOverview