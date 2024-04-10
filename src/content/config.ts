import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website')
});

const stories = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      isFeatured: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      cover: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!'
      }),
      seo: seoSchema.optional()
    })
});

const pages = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!'
      }),
      seo: seoSchema.optional()
    })
});

export const collections = { stories, pages };
