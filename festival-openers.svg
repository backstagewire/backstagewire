import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIndex } from '@/lib/storage';
import { formatDate } from '@/lib/utils';
import { getAuthorBySlug } from '@/lib/authors';

export const revalidate = 0;

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = await getIndex();
  const items = index.items.filter((item) => item.topicTags.some((topic) => normalize(topic) === slug));

  if (!items.length) notFound();

  const title = items[0].topicTags.find((topic) => normalize(topic) === slug) ?? slug;

  return (
    <main className="page-stack section-page">
      <section className="hero subtle-hero">
        <span className="eyebrow">TOPIC</span>
        <h1>{title}</h1>
        <p>Stories connected to this artist, event, or culture topic, pulled into one fuller landing page.</p>
      </section>

      <section className="grid compact-grid">
        {items.map((item) => (
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
