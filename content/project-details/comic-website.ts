import type { ProjectDetailSection } from "@/types/project-detail";

export const comicWebsiteDetails: { slug: string; sections: ProjectDetailSection[] } = {
  slug: "comic-website",
  sections: [
    { id: "overview", type: "overview", title: "Comic Website Homepage", content: "A static front-end website project with HTML page markup, CSS assets, images, video assets, and Vercel configuration. The repository README is minimal, so the project summary stays limited to verifiable repository contents." },
    { id: "tech-stack", type: "tech-stack", title: "Tech Stack", items: ["HTML", "CSS", "Static assets", "Vercel configuration"] },
    { id: "problem", type: "problem", title: "Design Goal", content: "A comic-focused homepage needs to present visual content in a clear, engaging browser experience and provide a starting point for visitors." },
    { id: "solution", type: "solution", title: "Implementation", content: "The repository separates HTML markup, CSS files, images, and video assets, with a Vercel configuration for deployment." },
    { id: "features", type: "features", title: "Project Features", items: ["Custom HTML homepage", "Separate CSS assets", "Image and video media assets", "Static front-end structure", "Vercel deployment configuration"] },
    { id: "architecture", type: "architecture", title: "Front-End Structure", content: "Browser → HTML page markup → CSS styling and media assets → static homepage experience. Specific interactions and live-demo availability should be verified before being described as implemented." },
  ],
};