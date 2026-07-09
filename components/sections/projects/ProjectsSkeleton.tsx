import ProjectCardSkeleton from "./ProjectCardSkeleton";

export default function ProjectsSkeleton() {
  return (
    <section className="py-10 lg:py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}