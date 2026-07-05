import { FolderOpen } from "lucide-react";

import Container from "@/components/shared/Container";

export default function EmptyProjects() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card px-8 py-20 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-muted">
            <FolderOpen className="h-8 w-8 text-muted-foreground" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight">
            No Projects Found
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-8 text-muted-foreground">
            There are currently no projects available for this category.
            Try selecting another filter or check back later for new work.
          </p>
        </div>
      </Container>
    </section>
  );
}