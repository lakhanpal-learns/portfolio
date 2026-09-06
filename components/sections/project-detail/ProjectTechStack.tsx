import type { ProjectDetailSection } from "@/types/project-detail";

type Props = {
  section: Extract<
    ProjectDetailSection,
    { type: "tech-stack" }
  >;
};

export default function ProjectTechStack({
  section,
}: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold tracking-tight">
        {section.title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {section.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}