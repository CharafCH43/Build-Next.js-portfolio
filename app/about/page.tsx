import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Charaf, a computer science engineer focused on information systems and software development.",
};

const principles = [
  ["01", "Stay curious", "Understand the real need before choosing a technical solution."],
  ["02", "Make it useful", "A useful application should simplify a real task for its users."],
  ["03", "Sweat the details", "Reliable data, maintainable code, and clear interfaces matter."],
];

export default function AboutPage() {
  return (
    <div className="inner-page page-shell">
      <SectionHeading
        eyebrow="The engineer behind the systems"
        title="Good work starts with good questions."
        description="I’m Charaf, a computer science engineer specialized in information systems and decision-support systems. I build software that helps teams organize information, follow their work, and make better-informed decisions."
      />

      <section className="about-layout">
        <div className="about-image">
          <Image src="/images/portrait-art.svg" alt="Abstract illustrated portrait representing Charaf" fill sizes="(max-width: 760px) 100vw, 42vw" />
          <span className="image-label">A personal illustration.</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A little introduction</p>
          <h2>Engineer.<br /><span className="serif-italic">Developer.</span><br />Always learning.</h2>
          <p>
            My work combines application development, database design, information systems, and data analysis. I enjoy turning operational needs into clear workflows, dependable APIs, and practical interfaces.
          </p>
          <p>
            I completed my engineering studies at École Militaire Polytechnique, specializing in Information Systems and Decision Support. I work at the Centre National d’Ingénierie et de Développement des Infrastructures, within the Information Systems Department.
          </p>
          <p>
            My interests include artificial intelligence, business intelligence, data analytics, and building web and mobile applications. I work with React, Next.js, TypeScript, ASP.NET Core, SQL databases, and React Native.
          </p>
          <a className="text-link" href="/contact">Get in touch <span>↗</span></a>
        </div>
      </section>

      <section className="principles-section">
        <p className="eyebrow">What guides the work</p>
        <h2>A few things I <span className="serif-italic">believe in.</span></h2>
        <div className="principles-list">
          {principles.map(([number, title, description]) => (
            <article className="principle-row" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
