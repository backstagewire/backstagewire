import slugify from 'slugify';

export function makeSlug(input: string) {
  return slugify(input, {
    lower: true,
    strict: true,
    trim: true
  }).slice(0, 70);
}

export function dedupeBy<T>(items: T[], keyFn: (item: T) => string) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(iso));
}

export function sectionLabel(section: string) {
  const labels: Record<string, string> = {
    latest: 'Latest',
    'indie-radar': 'Indie Radar',
    'tour-festival': 'Tour & Festival',
    'new-music': 'New Music',
    culture: 'Culture',
    industry: 'Industry'
  };

  return labels[section] ?? 'Latest';
}
