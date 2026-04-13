type Story = {
  category: string;
  title: string;
  excerpt: string;
};

const latestStories: Story[] = [
  {
    category: "Latest",
    title: "Richmond’s Indie Scene Is Quietly Exploding",
    excerpt:
      "From DIY venues to viral TikTok moments, the next wave of artists is coming from unexpected places.",
  },
  {
    category: "Tour & Festival",
    title: "Festival Season Is Back — Here’s What Everyone Is Watching",
    excerpt:
      "Major festivals are expanding lineups while smaller events are becoming the place to discover the next breakout act.",
  },
  {
    category: "New Music",
    title: "New Music Friday Highlights: The Releases Everyone Is Talking About",
    excerpt:
      "From alt-pop to indie rock, this week’s drops are shaping playlists and setting the tone for summer.",
  },
  {
    category: "Culture",
    title: "Why Music Biopics Are Dominating Pop Culture Again",
    excerpt:
      "Studios keep returning to artist stories, and audiences keep showing up for the nostalgia and mythology.",
  },
];

const indieRadar: Story[] = [
  {
    category: "Indie Radar",
    title: "5 Indie Artists You Should Know This Week",
    excerpt:
      "A new batch of artists is building momentum through college radio, local scenes, and online buzz.",
  },
  {
    category: "Indie Radar",
    title: "The DIY Venues Keeping Regional Scenes Alive",
    excerpt:
      "Smaller rooms remain essential for artist development, community building, and the next generation of touring acts.",
  },
  {
    category: "Indie Radar",
    title: "This Dream-Pop Duo Is Starting to Break Out",
    excerpt:
      "A steady run of singles and intimate live sets has turned quiet momentum into real attention.",
  },
];

const cultureStories: Story[] = [
  {
    category: "Culture",
    title: "The Song Placements Everyone Is Talking About Right Now",
    excerpt:
      "A well-timed sync can still turn a good track into a cultural moment overnight.",
  },
  {
    category: "Culture",
    title: "Fashion, Festivals, and the Return of Music-First Style",
    excerpt:
      "Performance wear and artist aesthetics are shaping what fans buy, wear, and post.",
  },
  {
    category: "Culture",
    title: "Why Emerging Artists Are Winning on Short-Form Video",
    excerpt:
      "Smaller acts are using intimacy and consistency to outperform bigger names in niche corners of the algorithm.",
  },
];

const trendingArtists = [
  "Mk.gee",
  "Ethel Cain",
  "Clairo",
  "The Last Dinner Party",
  "Sabrina Carpenter",
  "Japanese Breakfast",
];

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">
        {story.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
        {story.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{story.excerpt}</p>
    </article>
  );
}

function Section({
  title,
  stories,
}: {
  title: string;
  stories: Story[];
}) {
  return (
    <section className="mt-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <span className="text-sm text-white/40">More coverage</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.14),_transparent_24%),linear-gradient(to_bottom,_#050816,_#090d18,_#050816)] text-white">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="h-[320px] bg-[linear-gradient(135deg,rgba(124,58,237,.55),rgba(236,72,153,.35),rgba(0,0,0,.15))]" />
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">
                Featured Story
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">
                Backstage Wire Tracks the Artists, Releases, and Cultural Moments Worth Watching
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Music-first coverage with room for indie discovery, major releases, festival movement,
                and the pop-culture stories shaping the conversation.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">
                    Lead
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Richmond’s Indie Scene Is Quietly Exploding
                  </h3>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">
                    New Music
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    The Releases Defining This Week
                  </h3>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">
                Trending Artists
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {trendingArtists.map((artist) => (
                  <span
                    key={artist}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">
                This Week’s Focus
              </p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-white/75">
                <li>• Tour announcements and festival additions</li>
                <li>• New music Friday standouts</li>
                <li>• Emerging artists building momentum</li>
                <li>• Music and pop-culture crossover stories</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">
                Backstage Wire
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                A music-first publication covering tours, releases, indie discovery, and the
                cultural moments happening just offstage.
              </p>
            </div>
          </aside>
        </div>

        <Section title="Latest Stories" stories={latestStories} />
        <Section title="Indie Radar" stories={indieRadar} />
        <Section title="Culture" stories={cultureStories} />

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">
                Newsletter
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Stay close to the stories just offstage
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Get music news, indie discovery, and culture coverage delivered in a tighter,
                more editorial format.
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex w-full gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                />
                <button className="rounded-2xl bg-fuchsia-500 px-5 py-3 font-medium text-white transition hover:bg-fuchsia-400">
                  Join
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
