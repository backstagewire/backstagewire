import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/data/stories";
import { authors } from "@/data/authors";

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const story = stories.find((item) => item.slug === params.slug);

  if (!story) {
    notFound();
  }

  const author = authors.find((item) => item.slug === story.authorSlug);
  const relatedStories = stories
    .filter(
      (item) =>
        item.slug !== story.slug &&
        (item.section === story.section || item.authorSlug === story.authorSlug)
    )
    .slice(0, 3);

  return (
    <main className="bg-[#070914] text-white">
      <article className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div
          className="h-[320px] w-full rounded-3xl bg-cover bg-center md:h-[460px]"
          style={{ backgroundImage: `url(${story.image})` }}
        />

        <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          {story.section.replace("-", " ")}
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
          {story.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
          {story.excerpt}
        </p>

        {author && (
          <Link
            href={`/author/${author.slug}`}
            className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]"
          >
            <div
              className="h-14 w-14 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${author.image})` }}
            />
            <div>
              <p className="text-sm text-white/50">By</p>
              <p className="font-semibold text-white">{author.name}</p>
              <p className="text-sm text-white/50">{author.role}</p>
            </div>
          </Link>
        )}

        <div className="mt-12 space-y-7 text-[17px] leading-8 text-white/80 md:text-lg md:leading-9">
          {story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="border-t border-white/10 pt-12">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
              Related Stories
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">Keep reading</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedStories.map((item) => (
              <Link
                key={item.slug}
                href={`/article/${item.slug}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.07]"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
                    {item.section.replace("-", " ")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
