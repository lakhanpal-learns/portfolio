import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function ProjectsHero() {
  return (
    <Container>
      <section className="flex flex-col items-center border-b border-border py-20 text-center">
        <span className="mb-5 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
          Portfolio
        </span>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
          A collection of production-ready Data Analytics, Data Engineering,
          Business Intelligence, and Machine Learning projects built to solve
          real-world business problems.
        </p>

        <div className="mt-10">
          <Button size="lg">
            Explore Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Container>
  );
}