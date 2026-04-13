import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAuthorBySlug } from '@/lib/authors';
import { getIndex } from '@/lib/storage';
import { formatDate } from '@/lib/utils';

export const revalidate = 0;

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const index = await getIndex();
  const items = index.items.filter((item) => item.authorSlug === slug);

  return (
    <main className="page-stack section-page">
      <section className="hero subtle-hero author-hero">
        <img src={author.avatar} alt={author.name} className="author-avatar author-avatar-large" />
        <div>
          <span className="eyebrow">{author.role.toUpperCase()}</span>
          <h1>{author.name}</h1>
          <p>{author.bio}</p>
        </div>
      </section>

      <section className="grid compact-grid">
        {items.map((item) => (
          <article key={item.id} className="card">
            {item.coverImage ? <img src={item.coverImage} alt={item.coverImageAlt || item.title} className="card-image" /> : null}
            <div className="card-body">
              <div className="pill-row">
                <span className="pill">{item.sectionLabel}</span>
                <span className="muted">{formatDate(item.updatedAt)}</span>
              </div>
              <h2>
                <Link href={`/article/${item.slug}`}>{item.title}</Link>
              </h2>
              <p>{item.dek}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
