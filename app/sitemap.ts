import type { MetadataRoute } from 'next';
import { getIndex } from '@/lib/storage';
import { getAuthors } from '@/lib/authors';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const index = await getIndex();
  const authors = getAuthors();

  return [
    '',
    '/contributors',
    '/section/latest',
    '/section/indie-radar',
    '/section/tour-festival',
    '/section/new-music',
    '/section/culture',
    ...authors.map((author) => `/author/${author.slug}`),
    ...index.items.map((item) => `/article/${item.slug}`)
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
