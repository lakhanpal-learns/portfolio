import type { ProjectDetailSection } from "@/types/project-detail";

type Props = {
  section: Extract<
    ProjectDetailSection,
    { type: "problem" }
  >;
};

export default function ProjectProblem({ section }: Props) {
  return (
    <section className="border-t border-border pt-16">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Problem
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {section.title}
        </h2>

        <p className="text-lg leading-8 text-muted-foreground">
          {section.content}
        </p>
      </div>
    </section>
  );
}