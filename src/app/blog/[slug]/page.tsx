import { getPostBySlug, getPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Metadata } from "next";

import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  
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
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // The 'prose' generic class handles markdown cascading safely from globals.css without destroying global scope
  return (
    <article className="max-w-container-sm mx-auto">
      <header className="section-divider mb-16 pb-8">
        <Link 
          href="/blog" 
          className="inline-block text-xs text-muted mb-12 hover:text-accent focus-visible:text-accent focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent font-mono font-light"
          style={{ textDecorationStyle: 'dotted' }}
        >
          <span aria-hidden="true">←</span> back to blog
        </Link>
        <h1 className="text-2xl text-foreground mb-4 leading-heading font-display font-normal normal-case tracking-wide">{post.title}</h1>
        {post.description && (
          <p className="text-md text-muted mb-8 italic font-serif">{post.description}</p>
        )}
        <div className="flex items-center gap-4 text-xs text-accent tracking-widest font-mono font-light">
          <span>{post.date}</span>
          <span className="opacity-40" aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="prose">
        <MDXRemote 
          source={post.content} 
          components={{
            img: (props) => (
              <span className="block w-full max-w-[450px] mx-auto my-12">
                <span className="photo-frame block w-full">
                  <img src={props.src} alt={props.alt} loading="lazy" className="w-full h-auto block m-0" />
                </span>
                {props.alt && <span className="block text-sm text-muted mt-4 italic text-center w-full">{props.alt}</span>}
              </span>
            )
          }}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeSanitize,
                  {
                    ...defaultSchema,
                    tagNames: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'img', 'em', 'strong', 'blockquote', 'ul', 'ol', 'li', 'code', 'pre', 'hr', 'br', 'span', 'div', 'figure', 'figcaption'],
                    attributes: {
                      ...defaultSchema.attributes,
                      a: ['href', 'title', 'target', 'rel'],
                      img: ['src', 'alt', 'width', 'height', 'loading'],
                      '*': ['className', 'class']
                    },
                    strip: ['script']
                  }
                ]
              ]
            }
          }}
        />
      </div>

      <footer className="mt-16 pt-8 border-t border-solid border-border">
        <Link 
          href="/blog" 
          className="inline-block text-xs text-muted hover:text-accent focus-visible:text-accent focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent font-mono font-light"
          style={{ textDecorationStyle: 'dotted' }}
        >
          <span aria-hidden="true">←</span> back to blog
        </Link>
      </footer>
    </article>
  );
}
