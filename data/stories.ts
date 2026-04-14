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
    slug: "festival-season-is-back",
    section: "on-stage",
    title: "Festival Season Is Back — Here’s What Everyone Is Watching",
    excerpt:
      "Major festivals are expanding lineups while smaller events become the place to discover breakout acts.",
    body: [
      "Festival culture has shifted. While headliners still draw crowds, the real excitement often lives further down the lineup.",
      "Fans increasingly attend festivals to discover artists early instead of simply watching established names.",
      "That shift has changed how promoters curate lineups and how artists break into larger audiences.",
      "The most exciting energy now comes from the undercard, where rising artists build momentum in real time.",
    ],
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "rory-reed",
  },
  {
    slug: "vinyl-sales-hit-another-record-year",
    section: "on-stage",
    title: "Vinyl Sales Hit Another Record Year",
    excerpt:
      "Physical music continues its surprising resurgence as younger fans turn collecting into identity.",
    body: [
      "Vinyl keeps growing because it offers something streaming cannot: physical presence.",
      "For younger listeners, records are as much about identity and ritual as they are about sound quality.",
      "Independent stores continue to benefit from the format’s resilience, especially around new releases and artist exclusives.",
      "What once looked like nostalgia now feels like a permanent part of how fans engage with music.",
    ],
    image:
      "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "alex-mercer",
  },
  {
    slug: "touring-costs-are-changing-how-artists-build-careers",
    section: "on-stage",
    title: "Touring Costs Are Changing How Artists Build Careers",
    excerpt:
      "Live music still matters, but rising costs are pushing artists toward smaller runs and smarter routing.",
    body: [
      "Touring remains essential for artists, but the economics have become much harder to sustain.",
      "Many musicians are shifting toward shorter runs, targeted markets, and more direct fan engagement instead of constant road schedules.",
      "The result is a touring ecosystem that rewards precision over scale.",
      "For audiences, that may mean rarer shows — but often better ones.",
    ],
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "alex-mercer",
  },
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
      "What makes the moment powerful is the ecosystem itself — artists, promoters, spaces, and fans all feeding one another.",
    ],
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "jamie-calder",
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
      "That rare mix is exactly why more listeners keep circling back.",
    ],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "jamie-calder",
  },
  {
    slug: "the-diy-venues-keeping-regional-scenes-alive",
    section: "backstage-radar",
    title: "The DIY Venues Keeping Regional Scenes Alive",
    excerpt:
      "Small rooms are still the backbone of artist development and local music culture.",
    body: [
      "Independent venues remain one of the most important parts of any healthy music ecosystem.",
      "They give artists space to grow, fail, experiment, and build community before larger platforms take notice.",
      "As touring becomes more expensive, these spaces matter even more.",
      "Without them, scenes flatten into content instead of culture.",
    ],
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "jamie-calder",
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
      "The best new releases do not just land — they reset the mood around them.",
    ],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "casey-monroe",
  },
  {
    slug: "the-albums-setting-the-tone-for-summer",
    section: "new-drop",
    title: "The Albums Setting the Tone for Summer",
    excerpt:
      "A handful of records are already shaping the emotional weather of the season.",
    body: [
      "Every summer has a few albums that feel bigger than release week.",
      "They create mood, define memory, and become the soundtrack to everything around them.",
      "This year’s early standouts are landing with that kind of energy.",
      "Some records are merely released. Others seem to arrive already woven into the culture.",
    ],
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "casey-monroe",
  },
  {
    slug: "why-deluxe-albums-keep-coming-back",
    section: "new-drop",
    title: "Why Deluxe Albums Keep Coming Back",
    excerpt:
      "Extended editions are no longer an afterthought — they’re part of the strategy.",
    body: [
      "Deluxe releases have become one of the most common tools in the modern release cycle.",
      "For artists, they keep projects alive longer. For fans, they offer the promise of deeper access.",
      "The strategy is partly commercial, but it also reflects how audiences now experience albums in waves instead of single moments.",
      "The modern album cycle rarely ends where it starts.",
    ],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "casey-monroe",
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
      "People are not just watching the artists. They’re watching the fantasy of what artists represent.",
    ],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "jordan-vale",
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
      "The platform does not replace scenes or fandom — it accelerates them.",
    ],
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "jordan-vale",
  },
  {
    slug: "festival-fashion-has-become-its-own-language",
    section: "green-room",
    title: "Festival Fashion Has Become Its Own Language",
    excerpt:
      "What people wear to music events is now part of the cultural story, not just the backdrop.",
    body: [
      "Festival fashion has evolved into a full visual language of its own.",
      "For many fans, dressing for live music is part of participating in the event itself.",
      "The line between performance style and audience style keeps getting blurrier.",
      "That shift says something bigger about how music culture now lives across platforms, photos, and identity.",
    ],
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "jordan-vale",
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
      "The consistency is the point — readers learn the questions, then start comparing the answers.",
    ],
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "rory-reed",
  },
  {
    slug: "5-backstage-questions-with-clairo",
    section: "dispatch",
    title: "5 Backstage Questions with Clairo",
    excerpt:
      "Taste, routines, and the songs that artists keep returning to.",
    body: [
      "The best short interviews reveal taste as much as biography.",
      "That’s what makes a recurring format like Backstage Dispatch work.",
      "The answers may be brief, but they build a more personal archive over time.",
      "Readers come for the artist and stay for the pattern.",
    ],
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "rory-reed",
  },
  {
    slug: "5-backstage-questions-with-ethel-cain",
    section: "dispatch",
    title: "5 Backstage Questions with Ethel Cain",
    excerpt:
      "A quick format built for artists with strong voice and stronger atmosphere.",
    body: [
      "Some artists make even short answers feel loaded with atmosphere.",
      "That’s part of why this format works especially well with musicians who already have a distinct world around them.",
      "The shortness keeps it readable, but the tone still lingers.",
      "A recurring feature only becomes a brand when it sounds unmistakably like itself.",
    ],
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    authorSlug: "rory-reed",
  },
];
