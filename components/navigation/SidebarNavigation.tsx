"use client";

import Link from "next/link";

import { useActiveSection } from "@/hooks/useActiveSection";
import type { SidebarItem } from "@/types";

type Props = {
  items: SidebarItem[];
};

export default function SidebarNavigation({
  items,
}: Props) {
  const activeSection = useActiveSection(
    items.map((item) => item.id)
  );

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-64 shrink-0 border-r border-border bg-background lg:block">
      <nav className="flex flex-col gap-2 p-6">
        {items.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-md border-l-2 px-4 py-2.5 text-sm transition-colors duration-200 ${
                isActive
                  ? "border-primary bg-muted font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}