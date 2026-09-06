import type { ProjectDetailSection } from "@/types/project-detail";

type Props = {
  section: Extract<
    ProjectDetailSection,
    { type: "features" }
  >;
};

export default function ProjectFeatures({ section }: Props) {
  return (
    <section className="border-t border-border pt-16">
      <div className="space-y-6">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Features
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {section.title}
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {section.items.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-border p-5"
            >
              <span className="text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-3 text-base leading-7">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}