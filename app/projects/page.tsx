import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected digital products, brand platforms, and experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page page-shell">
      <SectionHeading
        eyebrow="A selection, not the whole story"
        title="Things made with purpose."
        description="A mix of digital products, identities, and experiments. Different problems, same belief: make it clear, make it useful, make it memorable."
      />
      <div className="project-grid projects-page-grid">
        {projects.map((project) => (
          <article className="project-detail" id={project.number} key={project.number}>
            <ProjectCard project={project} />
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
      <div className="projects-endnote">
        <span>MORE IDEAS ARE IN PROGRESS</span><span>✳</span>
      </div>
    </div>
  );
}
