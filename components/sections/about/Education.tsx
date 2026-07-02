import { about } from "@/content";

import Card from "@/components/shared/Cards";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionTitle>Education</SectionTitle>

        <Card>
          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {about.education.duration}
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {about.education.degree}
              </h3>

              <p className="mt-2 text-base text-muted-foreground">
                {about.education.field}
              </p>
            </div>

            <div className="border-t pt-5">
              <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <span>{about.education.university}</span>

                <span>{about.education.graduation}</span>

                <span>{about.education.cgpa}</span>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}