import { ArrowRight } from "lucide-react";

import { about } from "@/content";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function Hero() {
  return (
    <Section id="information">
      <Container>
        <div className="flex min-h-[70vh] items-center">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full border px-4 py-2 text-sm text-muted-foreground">
              {about.hero.badge}
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {about.hero.greeting}{" "}
              <span className="text-primary">
                {about.hero.name}
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {about.hero.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg">
                {about.hero.primaryButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg">
                {about.hero.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}