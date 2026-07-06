"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Circle,
} from "lucide-react";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-foreground/20 hover:shadow-2xl">
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw,
                   (max-width:1200px) 50vw,
                   33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-7">
          {/* Category */}
          <span className="mb-5 inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-muted-foreground">
            {project.description}
          </p>

          {/* Tech */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium transition-colors group-hover:bg-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between border-t border-border pt-5">
              <div className="flex items-center gap-5">
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <Circle
                    className={`h-2.5 w-2.5 fill-current ${
                      project.status === "Completed"
                        ? "text-green-500"
                        : "text-amber-500"
                    }`}
                  />

                  {project.status}
                </span>

                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />

                  {project.year}
                </span>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}