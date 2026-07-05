"use client";

import { useState } from "react";

const filters = [
  "All",
  "Data Engineering",
  "Analytics",
  "Business Intelligence",
  "Machine Learning",
  "SQL",
];

export default function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="py-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter === filter
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-border bg-background text-muted-foreground hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}