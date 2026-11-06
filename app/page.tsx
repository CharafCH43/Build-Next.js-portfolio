import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Computer Science Engineer · Software & Data</p>
          <h1>
            I build digital systems
            <br />
            <span className="serif-italic">that solve real problems.</span>
          </h1>
          <p className="hero-intro">
            I’m Charaf, a computer science engineer focused on information systems,
            decision-support tools, web applications, and data-driven solutions.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">Explore my work <span>↗</span></Link>
            <Link className="text-link" href="/about">A little about me <span>→</span></Link>
          </div>
          <div className="hero-note">
            <span className="note-star">✳</span>
            <span>Engineer by training.<br />Problem-solver by nature.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract portrait illustration">
          <div className="hero-visual-top"><span>CHARAF / 001</span><span>ENGINEERING PORTFOLIO — 2026</span></div>
          <div className="portrait-frame">
            <Image
              src="/images/portrait-art.svg"
              alt="Abstract illustrated portrait in warm cream, blue, and orange"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 43vw"
            />
          </div>
          <div className="visual-caption"><span>Based in Mila, Algeria · Working across software & data</span><span>✳</span></div>
          <div className="floating-sticker">IDEAS<br />INTO<br /><span>WORKING SYSTEMS.</span></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 04</span></div>
      </section>

      <section className="intro-strip">
        <p>ENGINEER WITH PURPOSE. BUILD WITH CARE.</p>
        <p>Software <span>✳</span> Data <span>✳</span> Engineering</p>
      </section>

      <section className="work-section page-shell">
        <div className="section-topline">
          <div>
            <p className="eyebrow">Selected engineering work</p>
            <h2>Selected <span className="serif-italic">work.</span></h2>
          </div>
          <Link className="text-link" href="/projects">All projects <span>↗</span></Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className="statement-section">
        <p className="eyebrow">The way I see it</p>
        <p className="statement">
          The best systems bring <span>clarity</span>, reliable engineering, and useful
          information together.
        </p>
        <Link className="text-link" href="/about">More about my approach <span>→</span></Link>
      </section>

      <section className="home-contact page-shell">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s build<br /><span className="serif-italic">something useful.</span></h2>
        </div>
        <Link className="round-link" href="/contact" aria-label="Go to contact page">↗</Link>
      </section>
    </>
  );
}
