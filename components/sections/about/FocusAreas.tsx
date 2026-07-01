import { about } from "@/content";

import Card from "@/components/shared/Cards";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

export default function FocusAreas() {
  return (
    <Section id="focus">
      <Container>
        <SectionTitle>Focus Areas</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.focus.map((focus) => (
            <Card key={focus}>
              <p className="font-medium">{focus}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}