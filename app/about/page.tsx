import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Alex Morgan, an independent designer and developer.",
};

const principles = [
  ["01", "Stay curious", "Ask better questions before jumping to familiar answers."],
  ["02", "Make it useful", "A beautiful interface should make someone's day a little easier."],
  ["03", "Sweat the details", "The small decisions are often what make the whole thing feel right."],
];

export default function AboutPage() {
  return (
    <div className="inner-page page-shell">
      <SectionHeading
        eyebrow="A person behind the pixels"
        title="Good work starts with good questions."
        description="I’m Alex Morgan, an independent designer and front-end developer interested in the space between how things work and how they make us feel."
      />

      <section className="about-layout">
        <div className="about-image">
          <Image src="/images/portrait-art.svg" alt="Abstract illustrated portrait representing Alex Morgan" fill sizes="(max-width: 760px) 100vw, 42vw" />
          <span className="image-label">A portrait, in shapes.</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A little introduction</p>
          <h2>Part thinker.<br /><span className="serif-italic">Part maker.</span><br />Always learning.</h2>
          <p>
            I work across research, visual design, and front-end development.
            That mix lets me move from the first messy question to a finished
            experience without losing sight of the people using it.
          </p>
          <p>
            I like generous typography, useful details, thoughtful systems,
            independent magazines, long walks, and ideas that become real.
          </p>
          <a className="text-link" href="mailto:hello@example.com">Say hello <span>↗</span></a>
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
