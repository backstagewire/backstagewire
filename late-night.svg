import type { SiteSection } from '@/lib/types';

const fallbackBySection: Record<SiteSection, string[]> = {
  latest: ['/images/late-night.svg', '/images/pop-collabs.svg', '/images/live-session.svg'],
  'indie-radar': ['/images/bedroom-pop.svg', '/images/indie-club.svg', '/images/regional-scenes.svg'],
  'tour-festival': ['/images/festival-lineup.svg', '/images/tour-dates.svg', '/images/curated-tour.svg'],
  'new-music': ['/images/new-releases.svg', '/images/release-friday.svg', '/images/albums-week.svg'],
  culture: ['/images/culture-crossover.svg', '/images/music-biopic.svg', '/images/soundtracks.svg'],
  industry: ['/images/opening-slots.svg', '/images/pre-festival-buzz.svg', '/images/surprise-show.svg']
};

function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickFrom<T>(items: T[], seed: string): T {
  return items[hashSeed(seed) % items.length];
}

export function pickFallbackImage(section: SiteSection, seed: string) {
  return pickFrom(fallbackBySection[section], seed);
}

export function resolveCoverImage(input: {
  imageUrl?: string | null;
  section: SiteSection;
  seed: string;
}) {
  if (input.imageUrl && /^https?:\/\//i.test(input.imageUrl)) {
    return input.imageUrl;
  }

  return pickFallbackImage(input.section, input.seed);
}
