export type Story = {
  slug: string;
  section:
    | "on-stage"
    | "backstage-radar"
    | "green-room"
    | "new-drop"
    | "dispatch";
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  authorSlug: string;
};

export const stories: Story[] = [
  {
    slug: "richmonds-indie-scene-is-quietly-exploding",
    section: "backstage-radar",
    title: "Richmond’s Indie Scene Is Quietly Exploding",
    excerpt:
      "From DIY venues to viral TikTok moments, the next wave of artists is coming from unexpected places.",
    body: [
      "Richmond’s music scene has always had a strong DIY backbone, but lately that energy feels louder and more connected than ever.",
      "Smaller venues and artists building direct relationships with fans are creating a scene that feels organic rather than manufactured.",
      "For audiences searching for discovery again, Richmond is quickly becoming a place to watch.",
    ],
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "jamie-calder",
  },
  {
    slug: "festival-season-is-back",
    section: "on-stage",
    title: "Festival Season Is Back — Here’s What Everyone Is Watching",
    excerpt:
      "Major festivals are expanding lineups while smaller events become the place to discover breakout acts.",
    body: [
      "Festival culture has shifted. While headliners still draw crowds, the real excitement often lives further down the lineup.",
      "Fans increasingly attend festivals to discover artists early instead of simply watching established names.",
      "That shift has changed how promoters curate lineups and how artists break into larger audiences.",
    ],
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "rory-reed",
  },
  {
    slug: "why-music-biopics-are-dominating-pop-culture-again",
    section: "green-room",
    title: "Why Music Biopics Are Dominating Pop Culture Again",
    excerpt:
      "Studios keep returning to artist stories, and audiences keep showing up for nostalgia and mythology.",
    body: [
      "Music biopics have become one of the most reliable ways for studios to tap into nostalgia while reaching new audiences.",
      "The best examples go beyond simple rise-to-fame stories and explore how artists shape cultural moments.",
      "As music remains central to identity and memory, these films continue to resonate deeply.",
    ],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "jordan-vale",
  },
  {
    slug: "the-releases-defining-this-week",
    section: "new-drop",
    title: "The Releases Defining This Week",
    excerpt: "Albums and singles shaping the sound of the moment.",
    body: [
      "Every week brings a flood of new music, but a handful of releases usually define the conversation.",
      "This week’s standout tracks show artists leaning toward more intimate songwriting and experimental production.",
      "The result is a collection of songs that feel both personal and forward-looking.",
    ],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "casey-monroe",
  },
  {
    slug: "5-backstage-questions-with-japanese-breakfast",
    section: "dispatch",
    title: "5 Backstage Questions with Japanese Breakfast",
    excerpt:
      "A quick-hit Q&A about influence, chaos, and the songs artists carry with them.",
    body: [
      "Backstage Dispatch is built around one simple idea: ask artists the same questions and let personality take over.",
      "The format is quick to read but surprisingly revealing about taste and inspiration.",
      "Each conversation becomes part of a growing archive of artist voices.",
    ],
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "rory-reed",
  },
  {
    slug: "mk-gee-the-guitarist-redefining-modern-indie",
    section: "backstage-radar",
    title: "Mk.gee Might Be the Guitarist Redefining Modern Indie",
    excerpt:
      "A quiet rise built on texture, atmosphere, and unconventional songwriting.",
    body: [
      "Few guitarists in recent memory have developed such a distinct sonic identity so quickly.",
      "Mk.gee’s music blends classic guitar influence with experimental textures and modern production.",
      "The result is a sound that feels both nostalgic and completely new.",
    ],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "jamie-calder",
  },
  {
    slug: "how-tiktok-is-reshaping-music-discovery",
    section: "green-room",
    title: "How TikTok Is Reshaping Music Discovery",
    excerpt:
      "Short-form video continues to transform how artists break through.",
    body: [
      "The way listeners discover music has changed dramatically over the past few years.",
      "Platforms like TikTok reward authenticity and experimentation more than polished marketing campaigns.",
      "For emerging artists, this shift can mean sudden exposure without traditional industry backing.",
    ],
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "jordan-vale",
  },
  {
    slug: "vinyl-sales-hit-another-record-year",
    section: "on-stage",
    title: "Vinyl Sales Hit Another Record Year",
    excerpt:
      "Physical music continues its surprising resurgence.",
    body: [
      "Vinyl records have once again surpassed expectations in sales growth.",
      "For many fans, the format represents a tangible connection to music in a digital world.",
      "Independent record stores are benefiting from the renewed interest as well.",
    ],
    image:
      "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=80",
    authorSlug: "alex-mercer",
  },
];
