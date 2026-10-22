import type { Project } from "@/types/project";

export const comicWebsite: Project = {
  id: "10",
  slug: "comic-website",
  featured: false,
  title: "Comic Website Homepage",
  category: "Web Development",
  description:
    "A front-end comic website homepage built with HTML and CSS, supported by page markup, image assets, and video assets.",
  businessProblem:
    "A comic-focused website needs a visually engaging landing page that organizes visual content and gives visitors a clear starting point for browsing.",
  overview:
    "The repository contains HTML page markup, CSS assets, images, video files, and a Vercel configuration. The README is minimal, so the portfolio description is limited to what the repository structure supports.",
  solution:
    "Build a static homepage experience with custom styling and media assets to present comic-related content in a browser.",
  keyFeatures: [
    "Custom HTML homepage",
    "Separate CSS assets",
    "Image and video media assets",
    "Static front-end structure",
    "Vercel deployment configuration",
  ],
  technologies: ["HTML", "CSS", "Vercel"],
  image: "/images/projects/comic-website.svg",
  github: "https://github.com/lakhanpal-learns/comic_website_homepage",
  demo: "#",
  status: "Completed",
  year: "2026",
};