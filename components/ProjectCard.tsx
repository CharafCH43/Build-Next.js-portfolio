import Image from "next/image";
import Link from "next/link";

export type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        className="project-image-link"
        href={`/projects#${project.number}`}
        aria-label={`View ${project.title}`}
      >
        <div className={`project-art project-art-${project.number}`}>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span className="project-index">{project.number}</span>
          <span className="project-open" aria-hidden="true">↗</span>
        </div>
      </Link>
      <div className="project-card-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span>{project.year}</span>
      </div>
    </article>
  );
}
