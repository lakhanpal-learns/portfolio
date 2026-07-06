"use client";

import {
  ArrowDownAZ,
  SlidersHorizontal,
} from "lucide-react";

const filters = [
  "All Projects",
  "Data Engineering",
  "Analytics",
  "SQL",
  "Dashboarding",
];

type Props = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <section className="border-b border-border py-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "border-black bg-black text-white shadow-sm dark:border-white dark:bg-white dark:text-black"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-muted">
            <ArrowDownAZ className="h-4 w-4" />
            Sort by: Latest
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background hover:bg-muted">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}