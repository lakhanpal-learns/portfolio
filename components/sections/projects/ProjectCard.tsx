"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      className="group block"
    >
      <article className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.category}
            </span>

            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                project.status === "Completed"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border border-border"
              }`}
            >
              {project.status}
            </span>

            <span className="text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}