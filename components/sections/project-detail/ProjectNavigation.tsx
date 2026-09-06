import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNavigation() {
  return (
    <nav className="mb-10">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>
    </nav>
  );
}