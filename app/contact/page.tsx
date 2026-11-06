import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Charaf about software engineering, information systems, or collaboration.",
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const github = process.env.NEXT_PUBLIC_GITHUB_URL;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  return (
    <div className="inner-page page-shell contact-page">
      <SectionHeading
        eyebrow="The next good thing starts here"
        title="Have a project? A question? A half-formed idea?"
        description="I’m open to discussing software projects, information systems, data solutions, and technical collaboration."
      />

      <section className="contact-panel">
        <div className="contact-main">
          <p className="eyebrow">The easiest way to reach me</p>
          {email ? (
            <a className="contact-email" href={`mailto:${email}`}>{email}<span>↗</span></a>
          ) : (
            <p className="contact-email">Email address to be added</p>
          )}
          <p className="contact-small">For professional enquiries and project discussions.</p>
        </div>
        <div className="contact-aside">
          <div><span className="contact-label">OPEN TO</span><p>Software development<br />Information systems<br />Data & BI projects</p></div>
          {(linkedin || github) && (
            <div><span className="contact-label">ELSEWHERE</span><p>
              {linkedin && <><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><br /></>}
              {github && <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>}
            </p></div>
          )}
        </div>
      </section>

      <div className="contact-bottom-note">
        <span>NO BIG FORM. NO FUSS.</span>
        <span>JUST A GOOD CONVERSATION.</span>
      </div>
    </div>
  );
}
