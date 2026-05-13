import Link from "next/link";
import { DiscordCopyBtn } from "@/components/discord-copy-btn";

const NAV_LINKS = [
  { text: "home", href: "/" },
  { text: "blog", href: "/blog" },
];

const SOCIAL_LINKS = [
  { text: "twitter", href: "https://x.com/lacedawnn" },
  { text: "instagram", href: "https://www.instagram.com/0lacedawn" },
  { text: "reddit", href: "https://www.reddit.com/user/Puzzleheaded-Taro492/" },
];

export function Nav() {
  return (
    <nav className="mb-6 pb-6 border-b border-solid border-border" aria-label="Main Navigation">
      <div className="flex justify-between items-center flex-wrap gap-4 w-full">
        <ul className="flex gap-6 flex-wrap items-center m-0 p-0 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="flex items-center">
              <Link 
                href={link.href} 
                className="text-foreground hover:text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:text-accent rounded-none lowercase tracking-wide text-base font-serif font-normal transition-colors"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        
        <ul className="flex items-center flex-wrap justify-center text-sm text-muted opacity-60 font-serif lowercase m-0 p-0 list-none">
          {SOCIAL_LINKS.map((link, index) => (
            <li key={link.text} className="flex items-center">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {link.text}
              </a>
              <span aria-hidden="true" className="mx-3 opacity-40 select-none">·</span>
            </li>
          ))}
          <li className="flex items-center">
            <DiscordCopyBtn handle="lacedawnn" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
