import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-mark" href="/">CH.</Link>
      <p>Software engineering · Information systems · Data</p>
      <span>© {new Date().getFullYear()} Charaf</span>
    </footer>
  );
}
