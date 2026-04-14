import Link from "next/link";
import { stories } from "@/data/stories";

export default function RadarPage() {
  const radarStories = stories.filter((story) => story.section === "backstage-radar");

  return (
    <main className="bg-[#070914] text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          Backstage Radar
        </p>
        <h1 className="mt-3 text-4xl font-bold">Artists and scenes worth catching early</h1>
        <p className="mt-3 max-w-2xl text-white/65">
          Discovery with a little more taste and a little less algorithm.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {radarStories.map((story) => (
            <Link
              key={story.slug}
              href={`/article/${story.slug}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{story.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
