"use client";

import Link from "next/link";

import type { SidebarItem } from "@/types";

type SidebarNavigationProps = {
  items: SidebarItem[];
};

const styles = {
  aside:
    "sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r lg:block",

  nav: "flex flex-col gap-2 p-6",

  link:
    "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
};

export default function SidebarNavigation({
  items,
}: SidebarNavigationProps) {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={styles.link}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}