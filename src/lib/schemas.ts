import { z } from "zod";

// Markdown Post bounds
export const PostMetadataSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string().min(1),
  description: z.string().optional(),
  readingTime: z.string(),
});

export const PostSchema = PostMetadataSchema.extend({
  content: z.string(),
});

export type PostMetadata = z.infer<typeof PostMetadataSchema>;
export type Post = z.infer<typeof PostSchema>;

// Shared Album bounds
export const AlbumSchema = z.object({
  title: z.string().min(1),
  artist: z.string().min(1),
  spotifyUrl: z.string().url(),
  cover: z.string().url().or(z.string().startsWith('/')),
});

export type Album = z.infer<typeof AlbumSchema>;

// Shared Book bounds
export const BookSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  description: z.string(),
  pdfFilename: z.string().min(1),
  cover: z.string().min(1),
});

export type Book = z.infer<typeof BookSchema>;
