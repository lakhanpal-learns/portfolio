"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  FolderGit2,
  Home,
} from "lucide-react";

import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/"
          className="transition-colors hover:text-foreground"
        >
          <Home className="h-4 w-4" />
        </Link>

        <ChevronRight className="h-3 w-3" />

        <Link
          href="/projects"
          className="transition-colors hover:text-foreground"
        >
          Projects
        </Link>

        <ChevronRight className="h-3 w-3" />

        <span className="text-foreground">
          {project.title}
        </span>
      </div>

      {/* Hero Content */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left */}
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
            {project.category}
          </span>

          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm">
              <FolderGit2 className="h-4 w-4" />
              {project.status}
            </span>

            <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 transition hover:bg-muted"
            >
              GitHub

              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Live Demo

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}