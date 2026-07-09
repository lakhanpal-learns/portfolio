"use client";

import {
  ArrowDownAZ,
  ArrowUpAZ,
  Search,
  SlidersHorizontal,
  X,
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
  setActiveFilter: (value: string) => void;

  sortOrder: "latest" | "oldest";
  setSortOrder: (
    value: "latest" | "oldest"
  ) => void;

  search: string;
  setSearch: (value: string) => void;

  filterCounts: Record<string, number>;

  totalProjects: number;
};

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
  sortOrder,
  setSortOrder,
  search,
  setSearch,
  filterCounts,
  totalProjects,
}: Props) {
  return (
    <section className="border-b border-border py-6">
      <div className="space-y-6">
        {/* Search + Sort */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search projects..."
              className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-10 text-sm outline-none transition-colors focus:border-black dark:focus:border-white"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setSortOrder(
                  sortOrder === "latest"
                    ? "oldest"
                    : "latest"
                )
              }
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {sortOrder === "latest" ? (
                <ArrowDownAZ className="h-4 w-4" />
              ) : (
                <ArrowUpAZ className="h-4 w-4" />
              )}

              {sortOrder === "latest"
                ? "Latest"
                : "Oldest"}
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-colors hover:bg-muted">
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {totalProjects}
            </span>{" "}
            project
            {totalProjects !== 1 && "s"}
          </p>

          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-border bg-background hover:bg-muted"
              }`}
            >
              <span>{filter}</span>

              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  activeFilter === filter
                    ? "bg-white/20 dark:bg-black/20"
                    : "bg-muted"
                }`}
              >
                {filterCounts[filter]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}