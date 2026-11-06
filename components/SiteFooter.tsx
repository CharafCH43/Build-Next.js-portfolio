import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-mark" href="/">AM.</Link>
      <p>Independent thinking. Thoughtful digital work.</p>
      <span>© {new Date().getFullYear()} Alex Morgan</span>
    </footer>
  );
}
