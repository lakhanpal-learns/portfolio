"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { HeroCharacter } from "@/components/hero";
import { about } from "@/content";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [characterState, setCharacterState] = useState<
    "idle" | "thumbsUp"
  >("idle");

  return (
    <Section id="information">
      <Container>
        <div className="grid min-h-[70vh] items-start gap-12 pt-10 lg:grid-cols-[58%_42%]">
          <div className="flex max-w-[720px] flex-col justify-center space-y-8">
            <span className="inline-flex w-fit self-start rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground">
              {about.hero.badge}
            </span>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {about.hero.greeting}{" "}
              <span className="text-primary">
                {about.hero.name}
              </span>
            </h1>

            <p className="w-full text-xl leading-10 text-muted-foreground">
              {about.hero.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                onMouseEnter={() => setCharacterState("thumbsUp")}
                onMouseLeave={() => setCharacterState("idle")}
              >
                {about.hero.primaryButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onMouseLeave={() => setCharacterState("idle")}
              >
                {about.hero.secondaryButton}
              </Button>
            </div>
          </div>

          <div className="hidden h-[760px] items-center justify-end pr+2 lg:flex">
            <HeroCharacter state={characterState} />
          </div>
        </div>
      </Container>
    </Section>
  );
}