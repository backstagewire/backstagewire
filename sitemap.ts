:root {
  color-scheme: dark;
  --bg: #09090d;
  --bg-2: #0f1016;
  --panel: rgba(19, 20, 29, 0.86);
  --panel-2: rgba(29, 31, 44, 0.9);
  --panel-3: rgba(255, 255, 255, 0.04);
  --text: #f7f7fb;
  --muted: #b8bbca;
  --muted-2: #8f95aa;
  --accent: #7b61ff;
  --accent-2: #ff4fa4;
  --accent-3: #4ed0ff;
  --border: rgba(255, 255, 255, 0.1);
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.32);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background:
    radial-gradient(circle at top left, rgba(123, 97, 255, 0.2), transparent 28%),
    radial-gradient(circle at top right, rgba(255, 79, 164, 0.12), transparent 25%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.22), transparent 90%);
}

a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }

.site-shell { min-height: 100vh; display: flex; flex-direction: column; }
.container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(9, 9, 13, 0.76);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.header-stack { padding: 18px 0 16px; }
.header-row, .nav-row {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}
.brand-wrap { display: grid; gap: 4px; }
.brand-kicker {
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  color: var(--muted-2);
  text-transform: uppercase;
}
.brand {
  font-size: clamp(1.35rem, 2vw, 1.6rem);
  font-weight: 900;
  letter-spacing: 0.12em;
}
.header-meta { text-align: right; }
.header-note { margin: 0; font-size: 0.98rem; color: var(--text); }
.header-subnote { margin: 3px 0 0; color: var(--muted); font-size: 0.88rem; }
.nav-row { margin-top: 14px; justify-content: flex-start; flex-wrap: wrap; }
.nav-link {
  color: var(--muted);
  border: 1px solid transparent;
  background: rgba(255,255,255,0.03);
  border-radius: 999px;
  padding: 9px 13px;
  transition: 160ms ease;
}
.nav-link:hover {
  color: var(--text);
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.07);
  transform: translateY(-1px);
}

.page-stack { display: grid; gap: 28px; padding: 30px 0 60px; }
.home-page { gap: 32px; }
.hero,
.card,
.feature-card,
.sidebar-card,
.contributors-strip,
.spotlight-tile,
.stat-card,
.site-footer {
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.hero,
.card,
.feature-card,
.sidebar-card,
.contributors-strip,
.spotlight-tile,
.stat-card {
  background: var(--panel);
  backdrop-filter: blur(10px);
}
.hero {
  border-radius: 28px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}
.hero::after {
  content: "";
  position: absolute;
  inset: auto -20% -40% auto;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(78, 208, 255, 0.18), transparent 70%);
}
.editorial-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.8fr);
  gap: 22px;
  background:
    linear-gradient(135deg, rgba(123,97,255,0.18), rgba(255,79,164,0.1)),
    linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
}
.hero-copy { position: relative; z-index: 1; }
.hero-wire h1, .subtle-hero h1 {
  margin: 10px 0 12px;
  font-size: clamp(2.4rem, 6vw, 5rem);
  line-height: 0.95;
  max-width: 10ch;
  letter-spacing: -0.04em;
}
.hero p { color: var(--muted); max-width: 60ch; font-size: 1.04rem; line-height: 1.65; }
.eyebrow {
  color: #e0d8ff;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }
.meta-line { margin-top: 16px; color: var(--muted-2); font-size: 0.92rem; }
.hero-stats { display: grid; gap: 14px; align-content: stretch; }
.stat-card {
  border-radius: 22px;
  padding: 18px;
  background: rgba(255,255,255,0.05);
}
.stat-card strong {
  display: block;
  margin-top: 6px;
  font-size: 1.7rem;
  line-height: 1.05;
}
.stat-card p { margin: 10px 0 0; color: var(--muted); line-height: 1.55; }
.stat-card-accent {
  background: linear-gradient(135deg, rgba(123,97,255,0.18), rgba(255,79,164,0.18));
}
.stat-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted-2);
  font-size: 0.74rem;
}

.lead-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.8fr);
  gap: 18px;
}
.feature-card,
.card { border-radius: 26px; }
.feature-card { padding: 28px; }
.feature-card-main {
  background:
    linear-gradient(180deg, rgba(255,255,255,0.04), transparent),
    linear-gradient(135deg, rgba(255,79,164,0.08), rgba(123,97,255,0.08));
}
.feature-copy h2 {
  font-size: clamp(2rem, 4.2vw, 3.4rem);
  line-height: 0.97;
  letter-spacing: -0.04em;
  margin: 12px 0;
  max-width: 13ch;
}
.feature-copy p { color: var(--muted); max-width: 64ch; line-height: 1.65; }
.feature-rail { display: grid; gap: 18px; }
.feature-rail-card h3 { font-size: 1.42rem; }

.section-block { display: grid; gap: 14px; }
.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
}
.section-head h2 {
  margin: 6px 0 0;
  font-size: clamp(1.45rem, 2.5vw, 2rem);
  letter-spacing: -0.03em;
}
.section-link, .inline-link { text-decoration: underline; text-underline-offset: 3px; }
.grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.compact-grid .card { overflow: hidden; }
.card {
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  transition: 180ms ease;
}
.card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,255,255,0.15);
}
.card-body { padding: 20px; }
.card h2, .card h3 {
  margin: 12px 0;
  font-size: 1.28rem;
  line-height: 1.12;
  letter-spacing: -0.03em;
}
.card p { color: var(--muted); line-height: 1.58; }
.card-footer, .byline-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--muted-2);
  margin-top: 14px;
  flex-wrap: wrap;
}
.pill-row, .article-meta-row, .topic-list {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.pill, .tag, .topic-link {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(123, 97, 255, 0.34);
  background: rgba(123, 97, 255, 0.12);
  color: #ece8ff;
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 0.82rem;
  line-height: 1;
}
.topic-link { text-decoration: none; }
.muted { color: var(--muted); }
.small-caps { text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.78rem; }

.spotlight-band {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 4px;
}
.spotlight-grid { display: grid; gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.spotlight-tile {
  border-radius: 22px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
}
.spotlight-label {
  display: inline-block;
  color: var(--accent-3);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
.spotlight-tile h3 { margin: 10px 0 0; font-size: 1.12rem; line-height: 1.35; }

.article-shell { padding: 30px 0 56px; }
.article-shell h1 {
  font-size: clamp(2.2rem, 7vw, 4.6rem);
  line-height: 0.96;
  letter-spacing: -0.05em;
  margin: 14px 0 12px;
  max-width: 12ch;
}
.dek {
  font-size: 1.18rem;
  color: var(--muted);
  max-width: 46ch;
  line-height: 1.55;
}
.article-cover {
  margin: 22px 0;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  border-radius: 28px;
  border: 1px solid var(--border);
}
.article-grid { display: grid; grid-template-columns: minmax(0, 1fr) 320px; gap: 28px; align-items: start; }
.article-paragraph {
  font-size: 1.08rem;
  line-height: 1.82;
  color: #eff2fb;
  margin-bottom: 1.2em;
}
.sidebar-card {
  position: sticky;
  top: 110px;
  border-radius: 24px;
  padding: 20px;
}
.button-link,
.ghost-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 11px 15px;
  border-radius: 14px;
  font-weight: 700;
}
.button-link {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: white;
}
.ghost-link {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
}
.dark-button {
  margin-top: 0;
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--border);
}
.small-note { color: var(--muted); font-size: 0.92rem; line-height: 1.6; }
.tag-list { display: flex; flex-wrap: wrap; gap: 8px; }
.section-page { padding-top: 20px; }
.contributors-strip {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  border-radius: 24px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(123,97,255,0.12), rgba(255,79,164,0.08));
}
.contributors-strip h2 {
  margin: 8px 0 6px;
  font-size: clamp(1.45rem, 2.8vw, 2rem);
  letter-spacing: -0.03em;
}
.strip-copy { max-width: 58ch; }
hr { border: 0; border-top: 1px solid var(--border); margin: 18px 0; }

.site-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255,255,255,0.08);
  background: rgba(8, 8, 12, 0.9);
}
.footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 20px;
  padding: 22px 0 36px;
  align-items: start;
}
.footer-brand {
  margin: 0 0 8px;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  font-weight: 800;
}
.footer-copy { margin: 0; color: var(--muted); max-width: 60ch; line-height: 1.6; }
.footer-links {
  display: grid;
  gap: 10px;
  justify-items: end;
  color: var(--muted);
}

@media (max-width: 980px) {
  .header-row { align-items: flex-start; flex-direction: column; }
  .header-meta { text-align: left; }
  .editorial-hero,
  .lead-grid,
  .article-grid,
  .footer-grid,
  .spotlight-grid {
    grid-template-columns: 1fr;
  }
  .sidebar-card { position: static; }
  .contributors-strip { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 640px) {
  .container { width: min(100% - 20px, 1180px); }
  .page-stack { gap: 22px; padding-top: 20px; }
  .hero,
  .feature-card,
  .card-body,
  .contributors-strip,
  .spotlight-tile,
  .sidebar-card,
  .stat-card {
    padding-left: 18px;
    padding-right: 18px;
  }
  .brand { font-size: 1.2rem; }
}

.card-image,
.feature-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(123,97,255,0.2), rgba(255,79,164,0.18));
}
.feature-image {
  border-radius: 18px;
  border: 1px solid var(--border);
  margin-bottom: 20px;
}
.split-section {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
  gap: 18px;
  align-items: start;
}
.sidebar-stack {
  display: grid;
  gap: 18px;
}
.padded-topics { margin-top: 12px; }
.mini-list {
  margin: 14px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
  color: var(--muted);
}
.mini-list a:hover,
.section-link:hover,
.inline-link:hover,
.topic-link:hover {
  color: var(--text);
}
.contributors-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.contributor-card { overflow: hidden; }
.author-avatar {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 220px;
  object-fit: cover;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid var(--border);
}
.author-avatar-large {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  border: 1px solid var(--border);
  max-height: none;
}
.author-hero {
  display: flex;
  gap: 18px;
  align-items: center;
}
@media (max-width: 980px) {
  .split-section,
  .contributors-grid {
    grid-template-columns: 1fr;
  }
  .author-hero {
    flex-direction: column;
    align-items: flex-start;
  }
}
