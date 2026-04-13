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
        <header className="site-header">
          <div className="container header-stack">
            <div className="header-row">
              <a href="/" className="brand">
                BACKSTAGE WIRE
              </a>
              <p className="header-note">Music news and the culture around it.</p>
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
      </body>
    </html>
  );
}
