import "./globals.css";

export const metadata = {
  title: "Backstage Wire",
  description: "Music culture from the other side of the curtain",
};

const tickerItems = [
  "Phoebe Bridgers rumored to drop new single",
  "Mk.gee tour selling out across the US",
  "Richmond indie scene gaining national attention",
  "Vinyl sales hit another record year",
  "Japanese Breakfast teasing studio sessions",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const repeatedTicker = [...tickerItems, ...tickerItems];

  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <div className="w-full overflow-hidden border-b border-white/10 bg-black text-white">
          <div className="animate-marquee flex min-w-max items-center py-1 text-[11px] text-white/60">
            <span className="mx-6 shrink-0 font-semibold text-fuchsia-300">
              Scene Wire
            </span>

            {repeatedTicker.map((item, index) => (
              <div key={`${item}-${index}`} className="flex shrink-0 items-center">
                <span className="mx-4 text-white/35">•</span>
                <span className="shrink-0 text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <header className="border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-md">
                <div className="text-2xl font-bold tracking-wide">
                  Backstage Wire
                </div>
                <p className="mt-1 text-xs leading-5 text-white/50">
                  Music culture from the other side of the curtain.
                </p>
              </div>

              <nav className="flex flex-wrap gap-3 text-sm text-white/80 md:gap-4">
                <a
                  href="/"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                >
                  On Stage
                </a>
                <a
                  href="/radar"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                >
                  Backstage Radar
                </a>
                <a
                  href="/dispatch"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                >
                  Dispatch
                </a>
                <a
                  href="/green-room"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                >
                  Green Room
                </a>
                <a
                  href="/new-drop"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
                >
                  New Drop
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60 md:px-6">
            <p className="text-lg font-semibold text-white">Backstage Wire</p>
            <p className="mt-2 max-w-xl leading-7">
              Stories from the stage, the studio, and the spaces in between.
              Independent music culture, emerging artists, and the moments shaping
              what people listen to next.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-white/70">
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                TikTok
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>

            <p className="mt-8 text-xs text-white/40">
              © {new Date().getFullYear()} Backstage Wire
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
