import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import { PostSchema, PostMetadataSchema, type Post, type PostMetadata } from "./schemas";

type PostType = 'writing' | 'blog';

const getDirectory = (type: PostType) => {
  const dir = type === 'writing' ? 'posts' : 'blog-posts';
  return path.join(process.cwd(), dir);
};

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const textWithoutMarkdown = text.replace(/#|<[^>]*>|\[|\]/g, "");
  const noOfWords = textWithoutMarkdown.split(/\s+/).filter(w => w.length > 0).length;
  return `${Math.max(1, Math.ceil(noOfWords / wordsPerMinute))} min read`;
}

const VALID_EXTS = new Set(['.md', '.mdx']);

export const getPosts = cache(async (type: PostType): Promise<PostMetadata[]> => {
  const directory = getDirectory(type);
  
  let fileNames: string[];
  try {
    fileNames = await fs.promises.readdir(directory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.warn(`[System] Missing directory: ${directory}. Returning empty posts list.`);
      return [];
    }
    throw error;
  }
  
  const readPromises = fileNames
    .filter(fileName => VALID_EXTS.has(path.extname(fileName)))
    .map(async (fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(directory, fileName);
      const fileContents = await fs.promises.readFile(fullPath, 'utf8');
      
      const { data, content } = matter(fileContents);
      return PostMetadataSchema.parse({
        slug,
        title: data.title || slug,
        date: data.date || 'Unknown Date',
        description: data.description,
        readingTime: calculateReadingTime(content), 
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

export const getPostBySlug = cache(async (type: PostType, slug: string): Promise<Post | null> => {
  const directory = getDirectory(type);
  const mdPath = path.join(directory, `${slug}.md`);
  const mdxPath = path.join(directory, `${slug}.mdx`);
  
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
  });
});
