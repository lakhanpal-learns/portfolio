type ProjectHeaderProps = {
  project: {
    title: string;
    description: string;
    category: string;
    year: string;
    status: string;
  };
};

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section>
      <p>{project.category}</p>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.year} · {project.status}</p>
    </section>
  );
}