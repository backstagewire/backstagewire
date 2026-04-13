import { list, put } from '@vercel/blob';
import type { ArticleIndex, ArticleIndexItem, GeneratedArticle } from '@/lib/types';

const INDEX_PATH = 'articles/index.json';

const fallbackArticles: GeneratedArticle[] = [
  {
    id: 'sample-1',
    slug: 'festival-bookers-keep-a-closer-eye-on-breakout-indie-openers',
    title: 'Festival Bookers Keep a Closer Eye on Breakout Indie Openers',
    dek: 'A wave of smaller acts is landing prominent support slots and festival placements as discovery shifts beyond the usual headline cycle.',
    body: [
      'Backstage Wire is built to cover music news from the mainstream to the underground, which means paying attention to the artists climbing before they dominate every feed.',
      'In recent cycles, festival announcements and support slots have become some of the clearest signals that an emerging act is moving from niche favorite to wider conversation.',
      'That is part of the site\'s editorial balance: breaking music headlines, indie discovery, tour and festival coverage, and pop-culture moments that matter to music fans.'
    ],
    section: 'indie-radar',
    sectionLabel: 'Indie Radar',
    tags: ['indie music', 'festival season', 'artist discovery'],
    topicTags: ['Indie Radar', 'Festivals'],
    authorSlug: 'jamie-calder',
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
    sourceCountLabel: 'Starter sample',
    factCheckNote: 'This starter story is sample content included so the site has a live layout before the first cron run.',
    coverImage: null,
    coverImageAlt: null,
    source: {
      name: 'Backstage Wire Starter',
      url: 'https://example.com/starter',
      publishedAt: new Date(0).toISOString(),
      author: 'Backstage Wire',
      originalTitle: 'Starter sample content',
      originalDescription: 'Starter sample content'
    }
  },
  {
    id: 'sample-2',
    slug: 'how-backstage-wire-handles-music-and-culture-crossovers',
    title: 'How Backstage Wire Handles Music and Culture Crossovers',
    dek: 'The site keeps a music-first lens while still covering film, TV, awards, style, and viral moments connected to artists.',
    body: [
      'Pop culture matters here when it intersects with musicians, tours, soundtrack moments, award-show appearances, or the broader entertainment landscape around artists.',
      'That means coverage can stretch beyond album and tour news without turning into a generic celebrity gossip feed.',
      'The publishing system assigns these crossover stories to the Culture section so the homepage stays organized and easy to scan.'
    ],
    section: 'culture',
    sectionLabel: 'Culture',
    tags: ['pop culture', 'music news', 'entertainment'],
    topicTags: ['Culture', 'Music'],
    authorSlug: 'jordan-vale',
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
    sourceCountLabel: 'Starter sample',
    factCheckNote: 'This starter story is sample content included so the site has a live layout before the first cron run.',
    coverImage: null,
    coverImageAlt: null,
    source: {
      name: 'Backstage Wire Starter',
      url: 'https://example.com/starter-culture',
      publishedAt: new Date(0).toISOString(),
      author: 'Backstage Wire',
      originalTitle: 'Starter sample content',
      originalDescription: 'Starter sample content'
    }
  }
];

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
    generatedAt: new Date(0).toISOString(),
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
