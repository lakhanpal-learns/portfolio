import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function ProjectCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-border bg-card px-8 py-16 text-center">
          <span className="mb-4 inline-flex rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
            More Coming Soon
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            More Projects Are On The Way
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            I'm continuously building production-ready data engineering,
            analytics, machine learning, and business intelligence projects.
            Stay tuned for upcoming case studies and open-source work.
          </p>

          <div className="mt-10">
            <Button size="lg">
              View GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}