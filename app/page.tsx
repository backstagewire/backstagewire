import Link from 'next/link';
import { getIndex } from '@/lib/storage';
import { formatDate } from '@/lib/utils';
import { getAuthorBySlug } from '@/lib/authors';

export const revalidate = 0;

function bySection<T extends { section: string }>(items: T[], section: string) {
  return items.filter((item) => item.section === section).slice(0, 4);
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
        <h2>{title}</h2>
        <Link href={href} className="section-link">
          View all
        </Link>
      </div>
      <div className="grid compact-grid">
        {items.map((item) => {
          const author = getAuthorBySlug(item.authorSlug);
          return (
            <article key={item.id} className="card">
              <div className="card-body">
                <div className="pill-row">
                  <span className="pill">{item.sectionLabel}</span>
                  <span className="muted">{author?.name ?? 'Backstage Wire'}</span>
                </div>
                <h3>
                  <Link href={`/article/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.dek}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default async function HomePage() {
  const index = await getIndex();
  const hero = index.items[0];

  return (
    <div className="page-stack">
      <section className="hero hero-wire">
        <span className="eyebrow">BACKSTAGE WIRE</span>
        <h1>Music-first coverage with room for the bigger culture story.</h1>
        <p>
          Backstage Wire tracks major artist headlines, indie discovery, tours, festivals, new releases, and the pop-culture moments that matter to music fans.
        </p>
        <div className="meta-line">Last refresh: {formatDate(index.generatedAt)}</div>
      </section>

      {hero ? (
        <section className="feature-card">
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
        </section>
      ) : null}

      <SectionBlock title="Latest" href="/section/latest" items={bySection(index.items, 'latest')} />
      <SectionBlock title="Indie Radar" href="/section/indie-radar" items={bySection(index.items, 'indie-radar')} />
      <SectionBlock title="Tour & Festival" href="/section/tour-festival" items={bySection(index.items, 'tour-festival')} />
      <SectionBlock title="New Music" href="/section/new-music" items={bySection(index.items, 'new-music')} />
      <SectionBlock title="Culture" href="/section/culture" items={bySection(index.items, 'culture')} />

      <section className="contributors-strip">
        <div>
          <span className="eyebrow">CONTRIBUTORS</span>
          <h2>Built to feel like a publication, not a one-bylined feed.</h2>
        </div>
        <Link href="/contributors" className="button-link dark-button">
          Meet the writers
        </Link>
      </section>
    </div>
  );
}
