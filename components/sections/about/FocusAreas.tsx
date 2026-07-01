import { about } from "@/content";

const styles = {
  section: "space-y-8 py-24",
  heading: "text-3xl font-bold",
  grid: "grid gap-4 sm:grid-cols-2",
  card: "rounded-xl border bg-card p-5 transition-colors hover:bg-muted/40",
  text: "font-medium",
};

export default function FocusAreas() {
  return (
    <section id="focus" className={styles.section}>
      <h2 className={styles.heading}>Focus Areas</h2>

      <div className={styles.grid}>
        {about.focus.map((focus) => (
          <div key={focus} className={styles.card}>
            <p className={styles.text}>{focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}