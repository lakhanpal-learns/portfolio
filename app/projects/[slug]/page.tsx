import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Calendar, FolderGit2 } from "lucide-react";

import { projects } from "@/content/projects";

import Container from "@/components/shared/Container";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-20">
      <Container>
        <section className="space-y-12 py-16">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
              {project.category}
            </span>

            <h1 className="text-5xl font-bold tracking-tight">
              {project.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm">
                <FolderGit2 className="h-4 w-4" />
                {project.status}
              </span>

              <span className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Business Problem
            </h2>

            <p className="leading-8 text-muted-foreground">
              {project.businessProblem}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Key Features
            </h2>

            <div className="grid gap-3 md:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-muted px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-wrap gap-4 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 transition hover:bg-muted"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>
        </section>
      </Container>
    </main>
  );
}