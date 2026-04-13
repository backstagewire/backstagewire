import { dedupeBy } from '@/lib/utils';
import type { NewsApiArticle } from '@/lib/types';

const NEWS_QUERY =
  process.env.NEWS_QUERY ||
  '((music OR musician OR band OR singer OR album OR single OR tour OR festival OR concert) OR (pop culture AND (artist OR actor OR entertainment)))';
const NEWS_LANGUAGE = process.env.NEWS_LANGUAGE || 'en';
const NEWS_PAGE_SIZE = Number(process.env.NEWS_PAGE_SIZE || 12);

export async function fetchLatestMusicAndCultureNews(): Promise<NewsApiArticle[]> {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    throw new Error('Missing NEWS_API_KEY');
  }

  const from = new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString();
  const params = new URLSearchParams({
    q: NEWS_QUERY,
    language: NEWS_LANGUAGE,
    sortBy: 'publishedAt',
    pageSize: String(NEWS_PAGE_SIZE),
    from,
    searchIn: 'title,description'
  });

  const response = await fetch(`https://newsapi.org/v2/everything?${params.toString()}`, {
    headers: {
      'X-Api-Key': apiKey
    },
    next: { revalidate: 0 }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`NewsAPI error: ${response.status} ${text}`);
  }

  const json = (await response.json()) as { status: string; articles: NewsApiArticle[] };
  const cleaned = json.articles.filter((article) => {
    const title = article.title?.toLowerCase() || '';
    const description = article.description?.toLowerCase() || '';
    return (
      article.url &&
      article.title &&
      !title.includes('[removed]') &&
      !title.includes('podcast') &&
      !title.includes('newsletter') &&
      !description.includes('sponsored')
    );
  });

  return dedupeBy(cleaned, (item) => item.url);
}
