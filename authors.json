import Link from 'next/link';
import { getAuthors } from '@/lib/authors';

export default function ContributorsPage() {
  const authors = getAuthors();

  return (
    <main className="page-stack section-page">
      <section className="hero subtle-hero">
        <span className="eyebrow">CONTRIBUTORS</span>
        <h1>Five editorial personas, each with a clear lane.</h1>
        <p>Using multiple bylines makes Backstage Wire feel more like a real music publication and less like a generic AI feed.</p>
      </section>

      <section className="contributors-grid">
        {authors.map((author) => (
          <article key={author.slug} className="card contributor-card">
            <img src={author.avatar} alt={author.name} className="author-avatar" />
            <div className="card-body">
              <p className="muted small-caps">{author.role}</p>
              <h2>
                <Link href={`/author/${author.slug}`}>{author.name}</Link>
              </h2>
              <p>{author.bio}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
