import { NextResponse } from 'next/server';
import { fetchLatestMusicAndCultureNews } from '@/lib/news';
import { generateArticleFromSource } from '@/lib/ai';
import { saveArticles } from '@/lib/storage';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isAuthorized(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return true;

  const auth = request.headers.get('authorization');
  if (auth === `Bearer ${cronSecret}`) return true;

  const ua = request.headers.get('user-agent') || '';
  return ua.includes('vercel-cron/1.0');
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const latest = await fetchLatestMusicAndCultureNews();
    const generated = [];

    for (const source of latest) {
      try {
        const article = await generateArticleFromSource(source);
        generated.push(article);
      } catch (error) {
        console.error('Article generation failed for source', source.url, error);
      }
    }

    if (generated.length === 0) {
      return NextResponse.json({ ok: false, error: 'No stories were generated' }, { status: 500 });
    }

    await saveArticles(generated);

    return NextResponse.json({
      ok: true,
      generatedCount: generated.length,
      slugs: generated.map((item) => item.slug)
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
