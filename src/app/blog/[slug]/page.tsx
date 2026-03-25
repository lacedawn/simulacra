import { getPostBySlug, getPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug("blog", params.slug);
  
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description || "A blog post.",
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description || "A blog post.",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || "A blog post.",
    }
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostBySlug("blog", params.slug);

  if (!post) {
    notFound();
  }

  function extractText(value: unknown): string {
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value.map(extractText).join("");
    if (value && typeof value === "object" && "props" in value) {
      const props = (value as { props?: { children?: unknown } }).props;
      return extractText(props?.children);
    }
    return "";
  }

  function slugify(input: string) {
    return input
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  const postTitleId = slugify(post.title) || "post";

  const MDXComponents = {
    h2: (props: any) => {
      const text = extractText(props.children);
      const id = slugify(text) || "section";
      return (
        <h2 id={id}>
          {props.children}
        </h2>
      );
    },
    h3: (props: any) => {
      const text = extractText(props.children);
      const id = slugify(text) || "section";
      return (
        <h3 id={id}>
          {props.children}
        </h3>
      );
    },
    h4: (props: any) => {
      const text = extractText(props.children);
      const id = slugify(text) || "section";
      return (
        <h4 id={id}>
          {props.children}
        </h4>
      );
    },
  };

  return (
    <article>
      <header style={{ borderBottom: "1px solid #000", paddingBottom: 14, marginBottom: 22 }}>
        <a href="/simulacra/blog">{"<-"} back to blog</a>

        <h1 id={postTitleId} style={{ marginTop: 10 }}>
          {post.title}
        </h1>

        {post.description && (
          <p style={{ margin: "0.7em 0", fontStyle: "italic" }}>{post.description}</p>
        )}

        <p className="mono" style={{ marginTop: 6 }}>
          {post.date} <span aria-hidden="true">•</span> {post.readingTime}
        </p>
      </header>

      <div className="prose">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>
    </article>
  );
}
