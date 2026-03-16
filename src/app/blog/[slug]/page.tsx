import { getPostBySlug, getPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
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

  // The 'prose' generic class handles markdown cascading safely from globals.css without destroying global scope
  return (
    <article className="max-w-container-sm mx-auto">
      <header className="mb-16 border-b border-border pb-8">
        <Link 
          href="/blog" 
          className="inline-block text-sm text-muted mb-12 hover:text-accent focus-visible:text-accent focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent"
        >
          {"<-"} back to blog
        </Link>
        <h1 className="text-2xl text-foreground mb-4 leading-heading font-medium normal-case">{post.title}</h1>
        {post.description && (
          <p className="text-md text-muted mb-8 italic">{post.description}</p>
        )}
        <div className="flex items-center gap-4 text-sm text-accent tracking-widest">
          <span>{post.date}</span>
          <span className="opacity-50" aria-hidden="true">•</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
