import { about } from "@/content";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Interests() {
  return (
    <Section id="interests">
      <Container>
        <SectionTitle>Interests</SectionTitle>

        <div className="flex flex-wrap gap-3">
          {about.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border px-4 py-2 text-sm font-medium transition-all hover:bg-foreground hover:text-background"
            >
              {interest}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}