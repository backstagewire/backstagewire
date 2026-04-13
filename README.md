# Backstage Wire

A Next.js starter for a music-first news site that also covers the pop-culture moments around artists. It pulls live source coverage, creates short AI-written briefs with source attribution, assigns those stories to sections, and rotates them across a small contributor roster.

## What this build includes

- Backstage Wire branding and homepage layout
- Sections for Latest, Indie Radar, Tour & Festival, New Music, and Culture
- Five contributor bylines, including Rory Reed as editor
- Author pages, section pages, article pages, and topic pages
- AI generation prompt tuned for music news plus relevant culture crossover
- Vercel Blob storage for generated JSON articles
- Cron endpoint for automatic refreshes on Vercel
- Fallback sample content so the site still renders before the first cron run
- Sitemap and robots files for easier indexing setup

## Best hosting option

This project is built for **Vercel** because it uses Next.js server routes and scheduled jobs. It is not directly compatible with Blogger.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local`.
3. Add your API keys and tokens.
4. Start the app:

```bash
npm run dev
```

5. Open `http://localhost:3000`.
6. Trigger the first article batch:

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" http://localhost:3000/api/cron
```

## Environment variables

- `OPENAI_API_KEY`
- `NEWS_API_KEY`
- `CRON_SECRET`
- `BLOB_READ_WRITE_TOKEN`
- `NEXT_PUBLIC_SITE_URL`
- `NEWS_QUERY`
- `NEWS_LANGUAGE`
- `NEWS_PAGE_SIZE`
- `OPENAI_MODEL`

## Suggested launch checklist

- connect the repo to Vercel
- set all environment variables in Vercel
- add your custom domain
- set `NEXT_PUBLIC_SITE_URL` to your live domain
- test `/api/cron`
- submit your sitemap in Google Search Console
- replace placeholder sample stories after the first successful run

## Editorial guardrails

This project is designed for **source-linked briefs**, not fabricated gossip. The model prompt tells the AI not to invent rumors, quotes, allegations, or unsupported facts. Keep those rules in place.
