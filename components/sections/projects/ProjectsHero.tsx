"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProjectsHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="py-14 lg:py-16">
        {/* Top Row */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />

            <ChevronRight className="h-3 w-3" />

            <span className="font-medium text-foreground">
              Projects
            </span>
          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl px-6"
          >
            <Link href="#projects-grid">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Hero */}
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold tracking-tight lg:text-7xl">
            Projects
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-muted-foreground">
            A collection of data and analytics projects designed
            to solve real-world business problems through Data
            Engineering, Analytics, SQL, Python, and Business
            Intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}