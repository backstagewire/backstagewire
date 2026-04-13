import { list, put } from '@vercel/blob';
import sampleArticles from '@/data/sampleArticles.json';
import type { ArticleIndex, ArticleIndexItem, GeneratedArticle } from '@/lib/types';

const INDEX_PATH = 'articles/index.json';
const fallbackArticles = sampleArticles as GeneratedArticle[];

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch JSON from blob: ${response.status}`);
  }
  return (await response.json()) as T;
}

async function findBlobUrlByPathname(pathname: string): Promise<string | null> {
  const { blobs } = await list({ prefix: pathname });
  const exact = blobs.find((blob) => blob.pathname === pathname);
  return exact?.url ?? null;
}

function fallbackIndex(): ArticleIndex {
  return {
    generatedAt: new Date().toISOString(),
    items: fallbackArticles.map((article) => ({
      id: article.id,
      slug: article.slug,
      title: article.title,
      dek: article.dek,
      section: article.section,
      sectionLabel: article.sectionLabel,
      tags: article.tags,
      topicTags: article.topicTags,
      authorSlug: article.authorSlug,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      sourceCountLabel: article.sourceCountLabel,
      factCheckNote: article.factCheckNote,
      coverImage: article.coverImage,
      coverImageAlt: article.coverImageAlt,
      source: article.source
    }))
  };
}

export async function getIndex(): Promise<ArticleIndex> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return fallbackIndex();
  }

  const url = await findBlobUrlByPathname(INDEX_PATH);
  if (!url) {
    return fallbackIndex();
  }
  return fetchJson<ArticleIndex>(url);
}

export async function getArticleBySlug(slug: string): Promise<GeneratedArticle | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return fallbackArticles.find((article) => article.slug === slug) ?? null;
  }

  const url = await findBlobUrlByPathname(`articles/${slug}.json`);
  if (!url) return fallbackArticles.find((article) => article.slug === slug) ?? null;
  return fetchJson<GeneratedArticle>(url);
}

export async function saveArticles(articles: GeneratedArticle[]) {
  const indexItems: ArticleIndexItem[] = articles.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    dek: article.dek,
    section: article.section,
    sectionLabel: article.sectionLabel,
    tags: article.tags,
    topicTags: article.topicTags,
    authorSlug: article.authorSlug,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    sourceCountLabel: article.sourceCountLabel,
    factCheckNote: article.factCheckNote,
    coverImage: article.coverImage,
    coverImageAlt: article.coverImageAlt,
    source: article.source
  }));

  for (const article of articles) {
    await put(`articles/${article.slug}.json`, JSON.stringify(article, null, 2), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json'
    });
  }

  await put(
    INDEX_PATH,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        items: indexItems.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
      } satisfies ArticleIndex,
      null,
      2
    ),
    {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json'
    }
  );
}
