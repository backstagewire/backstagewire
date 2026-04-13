export type SourceBrief = {
  name: string;
  url: string;
  publishedAt: string;
  author?: string | null;
  originalTitle: string;
  originalDescription?: string | null;
};

export type SiteSection = 'latest' | 'indie-radar' | 'tour-festival' | 'new-music' | 'culture' | 'industry';

export type GeneratedArticle = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  body: string[];
  section: SiteSection;
  sectionLabel: string;
  tags: string[];
  topicTags: string[];
  authorSlug: string;
  createdAt: string;
  updatedAt: string;
  sourceCountLabel: string;
  factCheckNote: string;
  coverImage?: string | null;
  coverImageAlt?: string | null;
  source: SourceBrief;
};

export type ArticleIndexItem = Pick<
  GeneratedArticle,
  | 'id'
  | 'slug'
  | 'title'
  | 'dek'
  | 'section'
  | 'sectionLabel'
  | 'tags'
  | 'topicTags'
  | 'authorSlug'
  | 'createdAt'
  | 'updatedAt'
  | 'sourceCountLabel'
  | 'factCheckNote'
  | 'coverImage'
  | 'coverImageAlt'
  | 'source'
>;

export type ArticleIndex = {
  generatedAt: string;
  items: ArticleIndexItem[];
};

export type NewsApiArticle = {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};
