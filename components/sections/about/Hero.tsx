import { about } from "@/content";

const styles = {
  wrapper: "space-y-6",
  badge:
    "inline-flex rounded-full border px-3 py-1 text-sm text-muted-foreground",
  title: "text-5xl font-bold tracking-tight",
  description: "max-w-2xl text-lg text-muted-foreground leading-8",
};

export default function Hero() {
  return (
    <section
      id="information"
      className="flex min-h-[calc(100vh-4rem)] items-center"
    >
      <div className={styles.wrapper}>
        <span className={styles.badge}>
          Open to Internships
        </span>

        <h1 className={styles.title}>
          Hi, I'm {about.name}
        </h1>

        <p className={styles.description}>
          {about.bio}
        </p>
      </div>
    </section>
  );
}