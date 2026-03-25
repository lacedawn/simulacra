import { getPosts } from "@/lib/markdown";
import { PageHeader } from "@/components/page-header";

export default async function BlogPage() {
  const posts = await getPosts("blog");

  return (
    <section>
      <PageHeader title="blog" subtitle="writings" />

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul style={{ marginTop: 10 }}>
          {posts.map((post) => (
            <li key={post.slug}>
              <p style={{ margin: "0.25em 0" }}>
                <a href={`/simulacra/blog/${post.slug}`}>{post.title}</a>
              </p>
              <p className="mono" style={{ margin: "0.25em 0" }}>
                {post.date} <span aria-hidden="true">•</span> {post.readingTime}
              </p>
              {post.description && <p style={{ marginTop: 6 }}>{post.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
