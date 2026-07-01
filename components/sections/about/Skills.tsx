import { about } from "@/content";

const styles = {
  section: "space-y-10 py-24",
  heading: "text-3xl font-bold",
  grid: "grid gap-6 md:grid-cols-2",
  card: "rounded-xl border bg-card p-6",
  title: "mb-4 text-lg font-semibold",
  list: "space-y-2",
  item: "text-muted-foreground",
};

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
    <section
      id="skills"
      className={styles.section}
    >
      <h2 className={styles.heading}>
        Skills
      </h2>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div
            key={category.title}
            className={styles.card}
          >
            <h3 className={styles.title}>
              {category.title}
            </h3>

            <ul className={styles.list}>
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className={styles.item}
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}