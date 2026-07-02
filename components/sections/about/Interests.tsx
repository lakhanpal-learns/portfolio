import { Heart } from "lucide-react";

import { about } from "@/content";

import Card from "@/components/shared/Cards";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Interests() {
  return (
    <Section id="interests">
      <Container>
        <SectionTitle>Interests</SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2">
          {about.interests.map((interest) => (
            <Card key={interest.title}>
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <Heart className="h-5 w-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {interest.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}