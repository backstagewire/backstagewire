export type SourceStory = {
  title: string;
  description: string;
  url: string;
  image?: string;
  sourceName: string;
  publishedAt?: string;
};

type NewsApiArticle = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: {
    name?: string;
  };
};

type NewsApiResponse = {
  status: string;
  totalResults?: number;
  articles?: NewsApiArticle[];
};

const MUSIC_QUERY =
  '(music OR musician OR band OR singer OR album OR tour OR festival OR indie OR pop culture OR rock OR pop)';

export async function fetchMusicCultureSourceStories(): Promise<SourceStory[]> {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing NEWS_API_KEY. Add it in Vercel Project Settings > Environment Variables."
    );
  }

  const endpoint = new URL("https://newsapi.org/v2/everything");
  endpoint.searchParams.set("q", MUSIC_QUERY);
  endpoint.searchParams.set("language", "en");
  endpoint.searchParams.set("sortBy", "publishedAt");
  endpoint.searchParams.set("pageSize", "12");

  const res = await fetch(endpoint.toString(), {
    headers: {
      "X-Api-Key": apiKey,
    },
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`News API error: ${res.status} ${text}`);
  }

  const data = (await res.json()) as NewsApiResponse;

  return (data.articles ?? [])
    .filter((article) => article.title && article.url)
    .map((article) => ({
      title: article.title ?? "",
      description: article.description ?? "",
      url: article.url ?? "",
      image: article.urlToImage ?? undefined,
      sourceName: article.source?.name ?? "Unknown Source",
      publishedAt: article.publishedAt ?? undefined,
    }));
}

export function dedupeStories(stories: SourceStory[]): SourceStory[] {
  const seen = new Set<string>();

  return stories.filter((story) => {
    const key = story.title.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function classifySection(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();

  if (
    text.includes("tour") ||
    text.includes("festival") ||
    text.includes("lineup") ||
    text.includes("concert")
  ) {
    return "on-stage";
  }

  if (
    text.includes("single") ||
    text.includes("album") ||
    text.includes("ep") ||
    text.includes("release")
  ) {
    return "new-drop";
  }

  if (
    text.includes("indie") ||
    text.includes("emerging") ||
    text.includes("underground") ||
    text.includes("breakout") ||
    text.includes("local scene")
  ) {
    return "backstage-radar";
  }

  if (
    text.includes("film") ||
    text.includes("tv") ||
    text.includes("fashion") ||
    text.includes("viral") ||
    text.includes("celebrity") ||
    text.includes("culture")
  ) {
    return "green-room";
  }

  return "on-stage";
}

export function assignAuthor(section: string): string {
  const authorMap: Record<string, string> = {
    "on-stage": "rory-reed",
    "backstage-radar": "jamie-calder",
    "new-drop": "casey-monroe",
    "green-room": "jordan-vale",
    dispatch: "rory-reed",
  };

  return authorMap[section] ?? "rory-reed";
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}
