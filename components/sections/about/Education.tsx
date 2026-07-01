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
          <h3 className="text-xl font-semibold">
            Bachelor of Technology
          </h3>

          <p className="mt-2 text-muted-foreground">
            Computer Science & Engineering
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            GNA University • 2024 – Present
          </p>
        </Card>
      </Container>
    </Section>
  );
}