import { z } from "zod";

// Markdown Post bounds
export const PostMetadataSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string().min(1),
  description: z.string().optional(),
  readingTime: z.string(),
  thumbnail: z.string().optional(),
});

export const PostSchema = PostMetadataSchema.extend({
  content: z.string(),
});

export type PostMetadata = z.infer<typeof PostMetadataSchema>;
export type Post = z.infer<typeof PostSchema>;
