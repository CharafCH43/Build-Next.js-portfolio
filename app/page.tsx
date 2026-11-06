import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Independent designer & developer</p>
          <h1>
            I make digital things
            <br />
            <span className="serif-italic">feel more human.</span>
          </h1>
          <p className="hero-intro">
            I’m Alex — a multidisciplinary creative building useful, expressive
            experiences for people and the teams behind them.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">Explore my work <span>↗</span></Link>
            <Link className="text-link" href="/about">A little about me <span>→</span></Link>
          </div>
          <div className="hero-note">
            <span className="note-star">✳</span>
            <span>Curious by nature.<br />Intentional by design.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract portrait illustration">
          <div className="hero-visual-top"><span>AM / 001</span><span>PORTFOLIO — 2025</span></div>
          <div className="portrait-frame">
            <Image
              src="/images/portrait-art.svg"
              alt="Abstract illustrated portrait in warm cream, blue, and orange"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 43vw"
            />
          </div>
          <div className="visual-caption"><span>Based somewhere between ideas & execution</span><span>✳</span></div>
          <div className="floating-sticker">GOOD<br />IDEAS<br /><span>TAKE SHAPE.</span></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 04</span></div>
      </section>

      <section className="intro-strip">
        <p>DESIGN WITH PURPOSE. BUILD WITH CARE.</p>
        <p>Strategy <span>✳</span> Design <span>✳</span> Development</p>
      </section>

      <section className="work-section page-shell">
        <div className="section-topline">
          <div>
            <p className="eyebrow">A few good things</p>
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
          The best work lives where <span>clarity</span>, character, and a little
          bit of courage meet.
        </p>
        <Link className="text-link" href="/about">More about my approach <span>→</span></Link>
      </section>

      <section className="home-contact page-shell">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let’s make<br /><span className="serif-italic">it matter.</span></h2>
        </div>
        <Link className="round-link" href="/contact" aria-label="Go to contact page">↗</Link>
      </section>
    </>
  );
}
