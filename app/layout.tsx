import "./globals.css"

export const metadata = {
  title: "Backstage Wire",
  description: "Music culture from the other side of the curtain",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">

        {/* TRENDING TICKER */}
        <div className="w-full overflow-hidden border-b border-white/10 bg-black text-white">
          <div className="animate-marquee whitespace-nowrap py-2 text-sm tracking-wide">

            <span className="mx-6">🔥 TRENDING</span>
            <span className="mx-6">Phoebe Bridgers rumored to drop new single</span>
            <span className="mx-6">Mk.gee tour selling out across the US</span>
            <span className="mx-6">Richmond indie scene gaining national attention</span>
            <span className="mx-6">Vinyl sales hit another record year</span>
            <span className="mx-6">Japanese Breakfast teasing studio sessions</span>

          </div>
        </div>

        {/* HEADER */}
        <header className="border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

            {/* LOGO */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide">
                Backstage Wire
              </span>
              <span className="text-xs text-white/50">
                Music culture from the other side of the curtain
              </span>
            </div>

            {/* NAVIGATION */}
            <nav className="flex gap-6 text-sm text-white/80">

              <a href="/" className="hover:text-fuchsia-300">
                On Stage
              </a>

              <a href="/radar" className="hover:text-fuchsia-300">
                Backstage Radar
              </a>

              <a href="/dispatch" className="hover:text-fuchsia-300">
                Backstage Dispatch
              </a>

              <a href="/green-room" className="hover:text-fuchsia-300">
                Green Room
              </a>

              <a href="/new-drop" className="hover:text-fuchsia-300">
                New Drop
              </a>

            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">

            <p className="text-lg font-semibold text-white">
              Backstage Wire
            </p>

            <p className="mt-2 max-w-xl">
              Stories from the stage, the studio, and the spaces in between.
              Independent music culture, emerging artists, and the moments shaping
              what people listen to next.
            </p>

            <div className="mt-6 flex gap-6 text-white/70">

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
  )
}
