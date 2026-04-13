import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backstage Wire',
  description: 'Music news and the culture around it.'
};

const nav = [
  ['Latest', '/section/latest'],
  ['Indie Radar', '/section/indie-radar'],
  ['Tour & Festival', '/section/tour-festival'],
  ['New Music', '/section/new-music'],
  ['Culture', '/section/culture'],
  ['Contributors', '/contributors']
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-stack">
              <div className="header-row">
                <a href="/" className="brand-wrap" aria-label="Backstage Wire home">
                  <span className="brand-kicker">EST. NOW</span>
                  <span className="brand">BACKSTAGE WIRE</span>
                </a>
                <div className="header-meta">
                  <p className="header-note">Music news and the culture around it.</p>
                  <p className="header-subnote">Mainstream moments, emerging artists, and everything happening just offstage.</p>
                </div>
              </div>
              <nav className="nav-row" aria-label="Primary">
                {nav.map(([label, href]) => (
                  <a key={href} href={href} className="nav-link">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
          <main className="container">{children}</main>
          <footer className="site-footer">
            <div className="container footer-grid">
              <div>
                <p className="footer-brand">BACKSTAGE WIRE</p>
                <p className="footer-copy">A music-first publication covering tours, releases, indie discovery, and the pop-culture moments shaping the conversation.</p>
              </div>
              <div className="footer-links">
                <a href="/contributors">Contributors</a>
                <a href="/section/latest">Latest</a>
                <a href="/section/culture">Culture</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
