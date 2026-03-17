import Link from "next/link";
import { getPosts } from "@/lib/markdown";
import { PageHeader } from "@/components/page-header";

export default async function BlogPage() {
  const posts = await getPosts("blog");

  return (
    <section>
      <PageHeader title="blog" subtitle="writings" />

      {posts.length === 0 ? (
        <p className="text-muted">No posts found.</p>
      ) : (
        <ul className="list-none flex flex-col gap-12 max-w-container-sm p-0 m-0">
          {posts.map((post) => (
            <li key={post.slug} className="relative group block">
              <h2 className="text-lg font-medium text-foreground mb-1 group-hover:text-accent">
                <Link
                  href={`/blog/${post.slug}`}
                  className="before:absolute before:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted mb-2 relative z-10 pointer-events-none">
                <span>{post.date}</span>
                <span className="opacity-50" aria-hidden="true">•</span>
                <span>{post.readingTime}</span>
              </div>
              {post.description && (
                <p className="text-base text-muted leading-relaxed line-clamp-2 m-0 relative z-10 pointer-events-none">
                  {post.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
