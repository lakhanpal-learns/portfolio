import Image from "next/image";

import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCustomSections({
  project,
}: Props) {
  if (project.customSections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-12">
      {project.customSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              {section.title}
            </h2>

            {section.description && (
              <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
                {section.description}
              </p>
            )}
          </div>

          {/* Images */}
          {section.images &&
            section.images.length > 0 && (
              <div className="grid gap-6">
                {section.images.map((image) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-2xl border border-border"
                  >
                    <Image
                      src={image}
                      alt={section.title}
                      width={1600}
                      height={900}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            )}

          {/* Markdown / Text */}
          {section.content && (
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="leading-8 whitespace-pre-line text-muted-foreground">
                {section.content}
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}