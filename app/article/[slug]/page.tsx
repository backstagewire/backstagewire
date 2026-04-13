import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug } from '@/lib/storage';
import { formatDate } from '@/lib/utils';
import { getAuthorBySlug } from '@/lib/authors';

export const revalidate = 0;

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = getAuthorBySlug(article.authorSlug);

  return (
    <article className="article-shell">
      <div className="article-meta-row">
        <span className="pill">{article.sectionLabel}</span>
        <span className="muted">Updated {formatDate(article.updatedAt)}</span>
      </div>

      <h1>{article.title}</h1>
      <p className="dek">{article.dek}</p>

      <div className="byline-row">
        <span>
          By{' '}
          {author ? (
            <Link href={`/author/${author.slug}`} className="inline-link">
              {author.name}
            </Link>
          ) : (
            'Backstage Wire'
          )}
        </span>
        <span>{article.sourceCountLabel}</span>
      </div>

      {article.coverImage ? <img src={article.coverImage} alt={article.coverImageAlt || article.title} className="article-cover" /> : null}

      <div className="article-grid">
        <div>
          {article.body.map((paragraph, index) => (
            <p key={index} className="article-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="sidebar-card">
          <h2>Story details</h2>
          <p>
            <strong>{article.source.name}</strong>
          </p>
          <p>{article.source.originalTitle}</p>
          <p className="muted">Published {formatDate(article.source.publishedAt)}</p>
          <a href={article.source.url} target="_blank" rel="noreferrer" className="button-link">
            Read original coverage
          </a>
          <hr />
          <p className="small-note">{article.factCheckNote}</p>
          <div className="tag-list">
            {article.tags.map((tag) => (
              <span className="tag" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
          {article.topicTags.length ? (
            <div className="topic-list">
              {article.topicTags.map((topic) => (
                <Link key={topic} href={`/topic/${encodeURIComponent(topic.toLowerCase().replace(/\s+/g, '-'))}`} className="topic-link">
                  {topic}
                </Link>
              ))}
            </div>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
