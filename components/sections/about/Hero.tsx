import { ArrowRight } from "lucide-react";

import { about } from "@/content";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function Hero() {
  return (
    <Section id="information">
      <Container>
        <div className="flex min-h-[80vh] items-center">
          <div className="max-w-4xl space-y-8">
            <span className="inline-flex rounded-full border px-4 py-2 text-sm text-muted-foreground">
              Open to Internships • Data Analytics • Data Engineering
            </span>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-primary">
                {about.name}
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              {about.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}