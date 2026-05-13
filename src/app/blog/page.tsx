import Link from "next/link";
import { getPosts } from "@/lib/markdown";

export default async function BlogPage() {
  const posts = await getPosts("blog");

  return (
    <div>

      {posts.length === 0 ? (
        <p className="text-muted font-light">No posts found.</p>
      ) : (
        <ul className="list-none flex flex-col gap-12 max-w-container-sm p-0 m-0">
          {posts.map((post) => (
            <li key={post.slug} className="relative group flex flex-col sm:flex-row gap-6 sm:items-start">
              {post.thumbnail && (
                <div className="shrink-0 w-full sm:w-32 photo-frame">
                  <img src={post.thumbnail} alt="" className="object-cover aspect-video sm:aspect-square" />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-lg font-display font-normal text-foreground mb-1 group-hover:text-accent tracking-wide">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="before:absolute before:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                    style={{ textDecoration: 'none' }}
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="flex items-center gap-4 text-xs text-muted mb-2 relative z-10 pointer-events-none font-mono font-light">
                  <span>{post.date}</span>
                  <span className="opacity-40" aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                {post.description && (
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 m-0 relative z-10 pointer-events-none font-light">
                    {post.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
