import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectsSkeleton from "@/components/sections/projects/ProjectsSkeleton";

export default function Loading() {
  return (
    <main className="pb-20">
      <div className="mx-auto w-full max-w-[1650px] px-8 lg:px-10 xl:px-12">
        <ProjectsHero />

        <ProjectsSkeleton />
      </div>
    </main>
  );
}