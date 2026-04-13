import Link from 'next/link';
import { getIndex } from '@/lib/storage';
import { formatDate } from '@/lib/utils';
import { getAuthorBySlug, getAuthors } from '@/lib/authors';

export const revalidate = 0;

function bySection<T extends { section: string }>(items: T[], section: string, limit = 4) {
  return items.filter((item) => item.section === section).slice(0, limit);
}

function StoryCard({
  item,
  variant = 'standard'
}: {
  item: Awaited<ReturnType<typeof getIndex>>['items'][number];
  variant?: 'standard' | 'feature';
}) {
  const author = getAuthorBySlug(item.authorSlug);

  return (
    <article className={`card ${variant === 'feature' ? 'feature-rail-card' : ''}`}>
      {item.coverImage ? <img src={item.coverImage} alt={item.coverImageAlt || item.title} className="card-image" /> : null}
      <div className="card-body">
        <div className="pill-row">
          <span className="pill">{item.sectionLabel}</span>
          <span className="muted">{author?.name ?? 'Backstage Wire'}</span>
        </div>
        <h3>
          <Link href={`/article/${item.slug}`}>{item.title}</Link>
        </h3>
        <p>{item.dek}</p>
        <div className="card-footer">
          <span>{formatDate(item.updatedAt)}</span>
          <span>{item.source.name}</span>
        </div>
      </div>
    </article>
  );
}

function SectionBlock({
  title,
  href,
  items
}: {
  title: string;
  href: string;
  items: Awaited<ReturnType<typeof getIndex>>['items'];
}) {
  if (items.length === 0) return null;

  return (
    <section className="section-block">
      <div className="section-head">
        <div>
          <span className="eyebrow">SECTION</span>
          <h2>{title}</h2>
        </div>
        <Link href={href} className="section-link">
          View all
        </Link>
      </div>
      <div className="grid compact-grid">
        {items.map((item) => (
          <StoryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default async function HomePage() {
  const index = await getIndex();
  const authors = getAuthors();
  const [hero, second, third, fourth, ...rest] = index.items;
  const latest = bySection(index.items, 'latest', 6);
  const indie = bySection(index.items, 'indie-radar', 4);
  const tours = bySection(index.items, 'tour-festival', 4);
  const newMusic = bySection(index.items, 'new-music', 4);
  const culture = bySection(index.items, 'culture', 4);
  const trending = [...new Set(index.items.flatMap((item) => item.topicTags))].slice(0, 8);

  return (
    <div className="page-stack home-page">
      <section className="hero hero-wire editorial-hero">
        <div className="hero-copy">
          <span className="eyebrow">BACKSTAGE WIRE</span>
          <h1>Music journalism with a bigger stage presence.</h1>
          <p>
            Built for breaking artist news, indie discovery, tours, festival movement, and the culture stories that actually matter to music fans.
          </p>
          <div className="hero-actions">
            <Link href="/section/latest" className="button-link">
              Read the latest
            </Link>
            <Link href="/contributors" className="ghost-link">
              Meet the contributors
            </Link>
          </div>
          <div className="meta-line">Last refresh: {formatDate(index.generatedAt)}</div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-label">Coverage lanes</span>
            <strong>5</strong>
            <p>Latest, Indie Radar, Tour & Festival, New Music, and Culture.</p>
          </div>
          <div className="stat-card stat-card-accent">
            <span className="stat-label">Editorial lens</span>
            <strong>Music first</strong>
            <p>Broad enough for pop culture, focused enough to still feel like a publication.</p>
          </div>
        </div>
      </section>

      {hero ? (
        <section className="lead-grid">
          <article className="feature-card feature-card-main">
            {hero.coverImage ? <img src={hero.coverImage} alt={hero.coverImageAlt || hero.title} className="feature-image" /> : null}
            <div className="feature-copy">
              <div className="pill-row">
                <span className="pill">{hero.sectionLabel}</span>
                <span className="muted">Source: {hero.source.name}</span>
              </div>
              <h2>
                <Link href={`/article/${hero.slug}`}>{hero.title}</Link>
              </h2>
              <p>{hero.dek}</p>
              <div className="card-footer">
                <span>{formatDate(hero.updatedAt)}</span>
                <span>{getAuthorBySlug(hero.authorSlug)?.name ?? 'Backstage Wire'}</span>
              </div>
            </div>
          </article>

          <div className="feature-rail">
            {second ? <StoryCard item={second} variant="feature" /> : null}
            {third ? <StoryCard item={third} variant="feature" /> : null}
          </div>
        </section>
      ) : null}

      <section className="section-block spotlight-band">
        <div className="section-head">
          <div>
            <span className="eyebrow">EDITORIAL MIX</span>
            <h2>What Backstage Wire covers best</h2>
          </div>
        </div>
        <div className="spotlight-grid">
          <div className="spotlight-tile">
            <span className="spotlight-label">Breaking</span>
            <h3>Big artist headlines without the gossip-site tone.</h3>
          </div>
          <div className="spotlight-tile">
            <span className="spotlight-label">Discovery</span>
            <h3>Indie Radar stories that feel like actual curation.</h3>
          </div>
          <div className="spotlight-tile">
            <span className="spotlight-label">Culture</span>
            <h3>Film, TV, style, awards, and viral moments through a music lens.</h3>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <div>
            <span className="eyebrow">TOP STORIES</span>
            <h2>More on the main stage</h2>
          </div>
        </div>
        <div className="grid compact-grid">
          {[second, third, fourth].filter(Boolean).map((item) => (
            <StoryCard key={item!.id} item={item!} />
          ))}
        </div>
      </section>

      <SectionBlock title="Latest" href="/section/latest" items={latest} />

      <section className="split-section">
        <SectionBlock title="Indie Radar" href="/section/indie-radar" items={indie} />
        <div className="sidebar-stack">
          <section className="sidebar-card">
            <span className="eyebrow">TRENDING TOPICS</span>
            <h2>What readers would click next</h2>
            <div className="topic-list padded-topics">
              {trending.map((topic) => (
                <Link key={topic} href={`/topic/${encodeURIComponent(topic.toLowerCase().replace(/\s+/g, '-'))}`} className="topic-link">
                  {topic}
                </Link>
              ))}
            </div>
          </section>
          <section className="sidebar-card">
            <span className="eyebrow">THIS WEEK'S RELEASES</span>
            <h2>Quick-hit listening list</h2>
            <ul className="mini-list">
              {newMusic.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link href={`/article/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <SectionBlock title="Tour & Festival" href="/section/tour-festival" items={tours} />
      <SectionBlock title="New Music" href="/section/new-music" items={newMusic} />
      <SectionBlock title="Culture" href="/section/culture" items={culture} />

      <section className="section-block">
        <div className="section-head">
          <div>
            <span className="eyebrow">FROM THE CONTRIBUTORS</span>
            <h2>Writers with clear lanes</h2>
          </div>
          <Link href="/contributors" className="section-link">
            View contributors
          </Link>
        </div>
        <div className="contributors-grid">
          {authors.map((author) => (
            <article className="card contributor-card" key={author.slug}>
              <img src={author.avatar} alt={author.name} className="author-avatar" />
              <div className="card-body">
                <p className="muted small-caps">{author.role}</p>
                <h3>
                  <Link href={`/author/${author.slug}`}>{author.name}</Link>
                </h3>
                <p>{author.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {rest.length ? (
        <section className="section-block">
          <div className="section-head">
            <div>
              <span className="eyebrow">MORE STORIES</span>
              <h2>From around the site</h2>
            </div>
          </div>
          <div className="grid compact-grid">
            {rest.slice(0, 6).map((item) => (
              <StoryCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
