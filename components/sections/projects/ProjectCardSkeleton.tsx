export default function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card animate-pulse">
      <div className="aspect-[16/10] bg-muted" />

      <div className="space-y-5 p-7">
        <div className="h-6 w-28 rounded bg-muted" />

        <div className="h-8 w-3/4 rounded bg-muted" />

        <div className="space-y-2">
          <div className="h-4 rounded bg-muted" />
          <div className="h-4 rounded bg-muted" />
          <div className="h-4 w-4/5 rounded bg-muted" />
        </div>

        <div className="flex gap-2 pt-3">
          <div className="h-8 w-20 rounded-lg bg-muted" />
          <div className="h-8 w-20 rounded-lg bg-muted" />
          <div className="h-8 w-20 rounded-lg bg-muted" />
        </div>

        <div className="flex justify-between border-t border-border pt-6">
          <div className="h-5 w-24 rounded bg-muted" />
          <div className="h-10 w-10 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}