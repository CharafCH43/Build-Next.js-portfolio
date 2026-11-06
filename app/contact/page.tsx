import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alex Morgan about a project or collaboration.",
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com";

  return (
    <div className="inner-page page-shell contact-page">
      <SectionHeading
        eyebrow="The next good thing starts here"
        title="Have a project? A question? A half-formed idea?"
        description="I’m always happy to hear about thoughtful projects and interesting people. Tell me what you’re working on."
      />

      <section className="contact-panel">
        <div className="contact-main">
          <p className="eyebrow">The easiest way to reach me</p>
          <a className="contact-email" href={`mailto:${email}`}>{email}<span>↗</span></a>
          <p className="contact-small">Usually replying within two working days.</p>
        </div>
        <div className="contact-aside">
          <div><span className="contact-label">OPEN TO</span><p>Freelance projects<br />Creative collaborations<br />Good conversations</p></div>
          <div><span className="contact-label">ELSEWHERE</span><p><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><br /><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a></p></div>
        </div>
      </section>

      <div className="contact-bottom-note">
        <span>NO BIG FORM. NO FUSS.</span>
        <span>JUST A GOOD CONVERSATION.</span>
      </div>
    </div>
  );
}
