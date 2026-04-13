import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIndex } from '@/lib/storage';
import { formatDate, sectionLabel } from '@/lib/utils';
import { getAuthorBySlug } from '@/lib/authors';

export const revalidate = 0;

const valid = new Set(['latest', 'indie-radar', 'tour-festival', 'new-music', 'culture', 'industry']);

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!valid.has(slug)) notFound();

  const index = await getIndex();
  const items = index.items.filter((item) => item.section === slug);
  const lead = items[0];
  const rest = items.slice(1);

  return (
    <main className="page-stack section-page">
      <section className="hero subtle-hero">
        <span className="eyebrow">SECTION</span>
        <h1>{sectionLabel(slug)}</h1>
        <p>Browse the latest Backstage Wire coverage in this lane, with fuller cards, photos, and enough volume to feel like a real section front.</p>
      </section>

      {lead ? (
        <article className="feature-card feature-card-main">
          {lead.coverImage ? <img src={lead.coverImage} alt={lead.coverImageAlt || lead.title} className="feature-image" /> : null}
          <div className="feature-copy">
            <div className="pill-row">
              <span className="pill">{lead.sectionLabel}</span>
              <span className="muted">{getAuthorBySlug(lead.authorSlug)?.name ?? 'Backstage Wire'}</span>
            </div>
            <h2>
              <Link href={`/article/${lead.slug}`}>{lead.title}</Link>
            </h2>
            <p>{lead.dek}</p>
            <div className="card-footer">
              <span>{formatDate(lead.updatedAt)}</span>
              <span>{lead.source.name}</span>
            </div>
          </div>
        </article>
      ) : null}

      <section className="grid compact-grid">
        {rest.map((item) => (
          <article key={item.id} className="card">
            {item.coverImage ? <img src={item.coverImage} alt={item.coverImageAlt || item.title} className="card-image" /> : null}
            <div className="card-body">
              <div className="pill-row">
                <span className="pill">{item.sectionLabel}</span>
                <span className="muted">{getAuthorBySlug(item.authorSlug)?.name ?? 'Backstage Wire'}</span>
              </div>
              <h2>
                <Link href={`/article/${item.slug}`}>{item.title}</Link>
              </h2>
              <p>{item.dek}</p>
              <div className="card-footer">
                <span>{formatDate(item.updatedAt)}</span>
                <span>{item.source.name}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
