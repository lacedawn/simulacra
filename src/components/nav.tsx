import Link from "next/link";

const NAV_LINKS = [
  { text: "home", href: "/" },
  { text: "library", href: "/library" },
  { text: "albums", href: "/albums" },
  { text: "blog", href: "/blog" },
];

export function Nav() {
  return (
    <nav className="mb-12 pb-4 border-b border-border" aria-label="Main Navigation">
      <div className="flex gap-4 flex-wrap">
        {NAV_LINKS.map((link, idx, arr) => (
          <div key={link.href} className="flex gap-4 items-center">
            <Link 
              href={link.href} 
              className="hover:text-accent-hover hover:underline underline-offset-4 focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm"
            >
              {link.text}
            </Link>
            {idx < arr.length - 1 && (
              <span className="text-muted opacity-50 select-none" aria-hidden="true">/</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
