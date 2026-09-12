import type { ProjectDetailSection } from "@/types/project-detail";

type Props = {
  section: Extract<
    ProjectDetailSection,
    { type: "architecture" }
  >;
};

export default function ProjectArchitecture({
  section,
}: Props) {
  return (
    <section
          id={section.id}
          className="border-t border-border pt-16"
        >
      <div className="max-w-4xl space-y-5">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Architecture
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {section.title}
        </h2>

        <div className="rounded-2xl border border-border p-6 md:p-8">
          <p className="text-lg leading-8 text-muted-foreground">
            {section.content}
          </p>
        </div>
      </div>
    </section>
  );
}

// credit-risk.ts
//       ↓
// type: "architecture"
//       ↓
// ProjectDetailSections.tsx
//       ↓
// ProjectArchitecture.tsx
//       ↓
// section.content
//       ↓
// "How the complete data pipeline works from source to dashboard."