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
    <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-64 shrink-0 border-r bg-background lg:block">
      <nav className="flex flex-col gap-1 p-6">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`rounded-lg px-4 py-2 text-sm transition-all ${
              activeSection === item.id
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}