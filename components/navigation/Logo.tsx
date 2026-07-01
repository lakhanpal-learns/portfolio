import Link from "next/link";

const styles = {
  logo: "text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80",
};

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      Lakhanpal
    </Link>
  );
}