type Story = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

type Dispatch = {
  artist: string;
  question: string;
  answer: string;
  image: string;
};

const onStageStories: Story[] = [
  {
    category: "On Stage",
    title: "Richmond’s Indie Scene Is Quietly Exploding",
    excerpt:
      "From DIY venues to viral TikTok moments, the next wave of artists is coming from unexpected places.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "On Stage",
    title: "Festival Season Is Back — Here’s What Everyone Is Watching",
    excerpt:
      "Major festivals are expanding lineups while smaller events are becoming the place to discover the next breakout act.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "On Stage",
    title: "New Music Friday Highlights",
    excerpt:
      "From alt-pop to indie rock, this week’s drops are shaping playlists and setting the tone for summer.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  },
];

const backstageRadarStories: Story[] = [
  {
    category: "Backstage Radar",
    title: "5 Indie Artists You Should Know This Week",
    excerpt:
      "A new batch of artists is building momentum through college radio, local scenes, and online buzz.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Backstage Radar",
    title: "The DIY Venues Keeping Regional Scenes Alive",
    excerpt:
      "Smaller rooms remain essential for artist development, community building, and the next generation of touring acts.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Backstage Radar",
    title: "This Dream-Pop Duo Is Starting to Break Out",
    excerpt:
      "A steady run of singles and intimate live sets has turned quiet momentum into real attention.",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  },
];

const greenRoomStories: Story[] = [
  {
    category: "Green Room",
    title: "The Song Placements Everyone Is Talking About Right Now",
    excerpt:
      "A well-timed sync can still turn a good track into a cultural moment overnight.",
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Green Room",
    title: "Fashion, Festivals, and the Return of Music-First Style",
    excerpt:
      "Performance wear and artist aesthetics are shaping what fans buy, wear, and post.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Green Room",
    title: "Why Emerging Artists Are Winning on Short-Form Video",
    excerpt:
      "Smaller acts are using intimacy and consistency to outperform bigger names in niche corners of the algorithm.",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80",
  },
];

const dispatches: Dispatch[] = [
  {
    artist: "Japanese Breakfast",
    question: "Song you wish you wrote",
    answer: "Fade Into You by Mazzy Star. Some songs just feel untouchable.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Clairo",
    question: "What are you listening to this week?",
    answer: "A lot of Sade, a lot of Mk.gee, and a few things I found late at night.",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    artist: "Ethel Cain",
    question: "Most chaotic tour moment",
    answer: "The kind you laugh about later and never fully recover from.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
  },
];

const dailyListening = [
  "Mk.gee — Dream Police",
  "Clairo — Sofia",
  "Ethel Cain — American Teenager",
  "Dijon — Many Times",
  "Japanese Breakfast — Be Sweet",
];

const trendingArtists = [
  "Mk.gee",
  "Ethel Cain",
  "Clairo",
  "The Last Dinner Party",
  "Sabrina Carpenter",
  "Japanese Breakfast",
];

const sceneSignals = [
  "DIY venue buzz building in Richmond",
  "Festival undercards getting more adventurous",
  "Bedroom pop still feeding mainstream sounds",
  "Music biopics are back in the culture cycle",
];

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${story.image})` }}
      />
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-300">
          {story.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
          {story.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/70">{story.excerpt}</p>
      </div>
    </article>
  );
}

function DispatchCard({ dispatch }: { dispatch: Dispatch }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className="h-44 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${dispatch.image})` }}
      />
      <div className="flex h-full flex-col p-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-300">
          Backstage Dispatch
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          5 Backstage Questions with {dispatch.artist}
        </h3>
        <div className="mt-4 rounded-2xl bg-black/20 p-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
            {dispatch.question}
          </p>
          <p className="mt-2 text-sm leading-7 text-white/75">
            “{dispatch.answer}”
          </p>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  subtitle,
  stories,
}: {
  title: string;
  subtitle: string;
  stories: Story[];
}) {
  return (
    <section className="mt-14">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mt-1 text-sm text-white/50">{subtitle}</p>
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
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:px-6 md:pt-16 md:pb-14">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-fuchsia-200">
            Backstage Pass - Editor's Note
          </span>
          <span className="max-w-md text-sm leading-6 text-white/55">
  Music culture from the other side of the curtain.
</span>
        </div>

       <div className="grid items-start gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div
              className="relative h-[340px] bg-cover bg-center md:h-[460px]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1800&q=80)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-300">
                  Featured Story
                </p>
                <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.1] md:mt-4 md:text-5xl">
                  Backstage Wire Tracks the Artists, Releases, and Offstage
                  Moments Actually Shaping Music Culture
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-lg md:leading-8">
                  Music-first coverage with insider energy, indie discovery,
                  scene reporting, and the cultural ripple effects happening
                  behind the spotlight.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-300">
                  Radar Pick
                </p>
                <h3 className="mt-2 text-lg font-semibold md:text-xl">
                  Richmond’s Indie Scene Is Quietly Exploding
                </h3>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-300">
                  Daily Listening
                </p>
                <h3 className="mt-2 text-lg font-semibold md:text-xl">
                  The tracks setting the tone today
                </h3>
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-300">
                Crowd Noise
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {trendingArtists.map((artist) => (
                  <span
                    key={artist}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-300">
                Scene Signals
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                {sceneSignals.map((signal) => (
                  <li key={signal}>• {signal}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-300">
                The Backstage Playlist
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">
                What Everyone’s Listening To Today
              </h2>
              <p className="mt-2 text-sm text-white/55">
                Updated daily by Backstage Wire
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dailyListening.map((track) => (
                  <span
                    key={track}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Backstage Dispatch
            </h2>
            <p className="mt-1 text-sm text-white/50">
              Quick artist Q&As that feel personal, repeatable, and shareable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dispatches.map((dispatch) => (
              <DispatchCard key={dispatch.artist} dispatch={dispatch} />
            ))}
          </div>
        </section>

        <Section
          title="On Stage"
          subtitle="The biggest music stories, touring shifts, and release moments."
          stories={onStageStories}
        />

        <Section
          title="Backstage Radar"
          subtitle="The artists and scenes worth catching before everyone else does."
          stories={backstageRadarStories}
        />

        <Section
          title="Green Room"
          subtitle="Where music, style, film, and internet culture collide."
          stories={greenRoomStories}
        />

        <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-300">
                Newsletter
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                Get the backstage pass
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Music news, discovery, dispatches, and scene reports delivered
                with more taste and less noise.
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex w-full flex-col gap-3 sm:flex-row">
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
