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
              <h3 className="mb-4 text-lg font-semibold">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}