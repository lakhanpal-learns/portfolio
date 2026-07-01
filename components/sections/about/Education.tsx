const styles = {
  section: "space-y-8 py-24",
  heading: "text-3xl font-bold",
  card: "rounded-xl border p-6",
  degree: "text-xl font-semibold",
  university: "mt-2 text-muted-foreground",
  duration: "mt-1 text-sm text-muted-foreground",
};

export default function Education() {
  return (
    <section
      id="education"
      className={styles.section}
    >
      <h2 className={styles.heading}>
        Education
      </h2>

      <div className={styles.card}>
        <h3 className={styles.degree}>
          Bachelor of Technology
        </h3>

        <p className={styles.university}>
          Computer Science & Engineering
        </p>

        <p className={styles.duration}>
          GNA University • 2024 – Present
        </p>
      </div>
    </section>
  );
}