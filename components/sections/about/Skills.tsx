import { about } from "@/content";

import Card from "@/components/shared/Cards";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: about.skills.languages,
    },
    {
      title: "Analytics",
      skills: about.skills.analytics,
    },
    {
      title: "Data Engineering",
      skills: about.skills.engineering,
    },
    {
      title: "Frontend",
      skills: about.skills.frontend,
    },
  ];

  return (
    <Section id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.title}>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}