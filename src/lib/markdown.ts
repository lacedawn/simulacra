import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import { PostSchema, PostMetadataSchema, type Post, type PostMetadata } from "./schemas";

const BLOG_DIR = path.join(process.cwd(), 'blog-posts');

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const textWithoutMarkdown = text.replace(/#|<[^>]*>|\[|\]/g, "");
  const noOfWords = textWithoutMarkdown.split(/\s+/).filter(w => w.length > 0).length;
  return `${Math.max(1, Math.ceil(noOfWords / wordsPerMinute))} min read`;
}

function extractFirstImage(content: string): string | undefined {
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/;
  const mdImgRegex = /!\[.*?\]\((.*?)\)/;
  
  const imgMatch = content.match(imgRegex);
  if (imgMatch && imgMatch[1]) return imgMatch[1];
  
  const mdImgMatch = content.match(mdImgRegex);
  if (mdImgMatch && mdImgMatch[1]) return mdImgMatch[1];
  
  return undefined;
}

const VALID_EXTS = new Set(['.md', '.mdx']);

export const getPosts = cache(async (): Promise<PostMetadata[]> => {
  let fileNames: string[];
  try {
    fileNames = await fs.promises.readdir(BLOG_DIR);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[System] Missing directory: ${BLOG_DIR}. Returning empty posts list.`);
      }
      return [];
    }
    throw error;
  }
  
  const readPromises = fileNames
    .filter(fileName => VALID_EXTS.has(path.extname(fileName)))
    .map(async (fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(BLOG_DIR, fileName);
      const fileContents = await fs.promises.readFile(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      return PostMetadataSchema.parse({
        slug,
        title: data.title || slug,
        date: data.date || 'Unknown Date',
        description: data.description,
        readingTime: calculateReadingTime(content), 
        thumbnail: extractFirstImage(content),
      });
    });

  const parsedPosts = await Promise.all(readPromises);
  
  return parsedPosts.sort((a, b) => {
    const epochA = new Date(a.date).getTime();
    const epochB = new Date(b.date).getTime();
    const validA = isNaN(epochA) ? 0 : epochA;
    const validB = isNaN(epochB) ? 0 : epochB;
    return validB - validA; // descending
  });
});

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  
  let fileContents: string;

  try {
    fileContents = await fs.promises.readFile(mdPath, 'utf8');
  } catch {
    try {
      fileContents = await fs.promises.readFile(mdxPath, 'utf8');
    } catch {
      return null; // neither exists
    }
  }

  const { data, content } = matter(fileContents);
  return PostSchema.parse({
    slug,
    title: data.title || slug,
    date: data.date || 'Unknown Date',
    description: data.description,
    content,
    readingTime: calculateReadingTime(content),
    thumbnail: extractFirstImage(content),
  });
});
