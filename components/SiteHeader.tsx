import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Charaf home">
        CH<span className="wordmark-dot">.</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="header-availability" href="/contact">
        <span className="availability-dot" />
        Open to technical opportunities
      </a>
    </header>
  );
}
