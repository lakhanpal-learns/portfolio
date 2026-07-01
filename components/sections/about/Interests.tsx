import { about } from "@/content";

const styles = {
  section: "space-y-8 py-24",
  heading: "text-3xl font-bold",
  wrapper: "flex flex-wrap gap-3",
  badge:
    "rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
};

export default function Interests() {
  return (
    <section id="interests" className={styles.section}>
      <h2 className={styles.heading}>Interests</h2>

      <div className={styles.wrapper}>
        {about.interests.map((interest) => (
          <span
            key={interest}
            className={styles.badge}
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}