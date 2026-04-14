import { list, put } from "@vercel/blob";

export type GeneratedArticle = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  body: string;
  excerpt: string;
  section: string;
  authorSlug: string;
  featuredImage?: string;
  publishedAt: string;
  updatedAt: string;
  sourceLinks: { title: string; url: string }[];
  tags: string[];
  seoTitle: string;
  seoDescription: string;
};

const BLOB_PATH = "content/articles.json";

export async function loadArticles(): Promise<GeneratedArticle[]> {
  try {
    const { blobs } = await list({ prefix: BLOB_PATH });

    if (!blobs.length) return [];

    const latest = blobs.sort((a, b) => {
      return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
    })[0];

    const res = await fetch(latest.url, { cache: "no-store" });
    if (!res.ok) return [];

    const json = (await res.json()) as GeneratedArticle[];
    return Array.isArray(json) ? json : [];
  } catch {
    return [];
  }
}

export async function saveArticles(articles: GeneratedArticle[]): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(articles, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
    allowOverwrite: true,
  });
}
