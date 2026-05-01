import Link from "next/link";

const NAV_LINKS = [
  { text: "home", href: "/" },
  { text: "blog", href: "/blog" },
];

export function Nav() {
  return (
    <nav className="mb-6 pb-6 border-b border-solid border-border" aria-label="Main Navigation">
      <div className="flex gap-6 flex-wrap items-center">
        {NAV_LINKS.map((link) => (
          <div key={link.href} className="flex items-center">
            <Link 
              href={link.href} 
              className="text-foreground hover:text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:text-accent rounded-none lowercase tracking-wide text-base font-serif font-normal transition-colors"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
