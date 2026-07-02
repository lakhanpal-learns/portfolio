import {
  Database,
  BarChart3,
  Workflow,
  BrainCircuit,
} from "lucide-react";

import { about } from "@/content";

import Card from "@/components/shared/Cards";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

const icons = [
  Database,
  Workflow,
  BarChart3,
  BrainCircuit,
];

export default function FocusAreas() {
  return (
    <Section id="focus">
      <Container>
        <SectionTitle>Focus Areas</SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2">
          {about.focus.map((area, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Card key={area.title}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-border bg-muted/40 p-3">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {area.title}
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}