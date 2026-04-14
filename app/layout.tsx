import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Backstage Wire",
  description: "Music culture from the other side of the curtain.",
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
  const repeated = [...tickerItems, ...tickerItems];

  return (
    <html lang="en">
      <body className="bg-[#070914] text-white antialiased">
        <div className="overflow-hidden border-b border-white/10 bg-[#05070f]">
          <div className="animate-marquee flex min-w-max items-center py-2 text-[12px] uppercase tracking-[0.18em] text-white/70">
            <span className="mx-6 shrink-0 font-semibold text-fuchsia-300">
              Scene Wire
            </span>

            {repeated.map((item, index) => (
              <div key={`${item}-${index}`} className="flex shrink-0 items-center">
                <span className="mx-4 text-white/25">•</span>
                <span className="shrink-0">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <header className="border-b border-white/10 bg-[#070914]/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/35">
                  Est. Now
                </p>
                <Link href="/" className="mt-2 block text-3xl font-black tracking-[0.12em] text-white">
                  BACKSTAGE WIRE
                </Link>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                  Music news and the culture around it.
                </p>
              </div>

              <nav className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="/"
                  className="rounded-full border border-white/10 px-4 py-2 text-white/75 transition hover:border-fuchsia-400/40 hover:bg-white/5 hover:text-white"
                >
                  On Stage
                </Link>

                <Link
                  href="/radar"
                  className="rounded-full border border-white/10 px-4 py-2 text-white/75 transition hover:border-fuchsia-400/40 hover:bg-white/5 hover:text-white"
                >
                  Backstage Radar
                </Link>

                <Link
                  href="/dispatch"
                  className="rounded-full border border-white/10 px-4 py-2 text-white/75 transition hover:border-fuchsia-400/40 hover:bg-white/5 hover:text-white"
                >
                  Dispatch
                </Link>

                <Link
                  href="/green-room"
                  className="rounded-full border border-white/10 px-4 py-2 text-white/75 transition hover:border-fuchsia-400/40 hover:bg-white/5 hover:text-white"
                >
                  Green Room
                </Link>

                <Link
                  href="/new-drop"
                  className="rounded-full border border-white/10 px-4 py-2 text-white/75 transition hover:border-fuchsia-400/40 hover:bg-white/5 hover:text-white"
                >
                  New Drop
                </Link>

                <Link
                  href="/contributors"
                  className="rounded-full border border-white/10 px-4 py-2 text-white/75 transition hover:border-fuchsia-400/40 hover:bg-white/5 hover:text-white"
                >
                  Contributors
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t border-white/10 bg-[#05070f]">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-white">Backstage Wire</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
                  Stories from the stage, the studio, and the spaces in between.
                  Music discovery, pop culture, scene reports, and artists worth
                  watching.
                </p>
              </div>

              <div className="md:text-right">
                <div className="flex flex-wrap gap-5 text-sm text-white/60 md:justify-end">
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
                <p className="mt-6 text-xs text-white/35">
                  © {new Date().getFullYear()} Backstage Wire
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
