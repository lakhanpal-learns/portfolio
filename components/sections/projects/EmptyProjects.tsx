"use client";

import { SearchX } from "lucide-react";

type Props = {
  clearFilters: () => void;
};

export default function EmptyProjects({
  clearFilters,
}: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-dashed border-border bg-card px-8 py-16 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <SearchX className="h-10 w-10 text-muted-foreground" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight">
            No Projects Found
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-muted-foreground">
            No projects match your current search or selected
            category.
          </p>

          <button
            onClick={clearFilters}
            className="mt-8 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
}