import Link from "next/link";

import { navigation } from "@/config";

const styles = {
  nav: "hidden items-center gap-8 lg:flex",

  link:
    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
};

export default function DesktopNavigation() {
  return (
    <nav className={styles.nav}>
      {navigation.map((navItem) => (
        <Link
            key={navItem.href}
            href={navItem.href}
           className={styles.link}
>
  {navItem.title}
</Link>
      ))}
    </nav>
  );
}