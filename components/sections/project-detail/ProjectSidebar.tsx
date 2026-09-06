import type { ProjectDetailSection } from "@/types/project-detail";

type Props = {
  sections: ProjectDetailSection[];
};

export default function ProjectSidebar({ sections }: Props) {
  return (
    <aside className="hidden lg:block lg:w-52 lg:shrink-0">
      <div className="sticky top-24">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          On this project
        </p>

        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}