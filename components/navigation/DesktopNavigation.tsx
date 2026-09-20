"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config";

const styles = {
  nav: "hidden items-center gap-8 lg:flex",

  link:
    "relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",

  active:
    "text-foreground after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-foreground",
};

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navigation.map((navItem) => {
        const isActive =
          navItem.href === "/"
            ? pathname === "/"
            : pathname.startsWith(navItem.href);

        return (
          <Link
            key={navItem.href}
            href={navItem.href}
            className={`${styles.link} ${
              isActive ? styles.active : ""
            }`}
          >
            {navItem.title}
          </Link>
        );
      })}
    </nav>
  );
}