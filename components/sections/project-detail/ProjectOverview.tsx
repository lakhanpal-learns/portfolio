import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";
import type { ProjectDetailSection } from "@/types/project-detail";

type Props = {
  project: Project;
  section: Extract<
    ProjectDetailSection,
    { type: "overview" }
  >;
};

export default function ProjectOverview({
  project,
  section,
}: Props) {
  return (
    <section className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      {/* Content */}
      <div className="space-y-7">
        <span className="inline-flex w-fit rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {project.category}
        </span>

        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {section.title}
          </h1>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            {section.content}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-muted"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-muted/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-transparent" />

        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          width={1600}
          height={900}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
      </div>
    </section>
  );
}