import authors from '@/data/authors.json';

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  sections: string[];
};

export function getAuthors(): Author[] {
  return authors as Author[];
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return getAuthors().find((author) => author.slug === slug);
}
