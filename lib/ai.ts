import OpenAI from 'openai';
import type { GeneratedArticle, NewsApiArticle, SiteSection } from '@/lib/types';
import { makeSlug, sectionLabel } from '@/lib/utils';

const model = process.env.OPENAI_MODEL || 'gpt-5.4';

type ArticleSchema = {
  title: string;
  dek: string;
  body: string[];
  section: SiteSection;
  tags: string[];
  topicTags: string[];
  factCheckNote: string;
};

function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY');
  }
  return new OpenAI({ apiKey });
}

function safeId() {
  return crypto.randomUUID();
}

function assignAuthor(section: SiteSection) {
  const map: Record<SiteSection, string> = {
    latest: 'rory-reed',
    'indie-radar': 'jamie-calder',
    'tour-festival': 'alex-mercer',
    'new-music': 'casey-monroe',
    culture: 'jordan-vale',
    industry: 'rory-reed'
  };

  return map[section];
}

export async function generateArticleFromSource(source: NewsApiArticle): Promise<GeneratedArticle> {
  const client = getClient();

  const response = await client.responses.create({
    model,
    input: [
      {
        role: 'system',
        content: [
          {
            type: 'input_text',
            text:
              'You write careful music and pop-culture briefs for Backstage Wire. Stay music-first, but allow relevant culture crossover involving artists, entertainment, film, TV, awards, style, or viral moments. Never invent facts, quotes, rumors, allegations, or timeline details. Only use the source facts given to you. Preserve uncertainty when the source language is speculative. Keep the tone crisp, editorial, current, and non-tabloid. Output only the requested schema.'
          }
        ]
      },
      {
        role: 'user',
        content: [
          {
            type: 'input_text',
            text: JSON.stringify({
              task: 'Create one short Backstage Wire article from this source article.',
              requirements: {
                title: 'A clean headline fit for a music and culture publication. Do not copy the source headline verbatim.',
                dek: 'One-sentence summary.',
                body: '3 to 5 short paragraphs. Each paragraph should be 1 to 3 sentences.',
                section: 'One of: latest, indie-radar, tour-festival, new-music, culture, industry.',
                tags: '3 to 6 short search-friendly tags.',
                topicTags: '1 to 3 names or topics mentioned in the article, such as artist names, award shows, tours, or festivals.',
                factCheckNote:
                  'One sentence that reminds readers this is an AI-generated summary based on a cited external report.'
              },
              source
            })
          }
        ]
      }
    ],
    text: {
      format: {
        type: 'json_schema',
        name: 'backstage_wire_article',
        strict: true,
        schema: {
          type: 'object',
          additionalProperties: false,
          properties: {
            title: { type: 'string' },
            dek: { type: 'string' },
            body: {
              type: 'array',
              items: { type: 'string' },
              minItems: 3,
              maxItems: 5
            },
            section: {
              type: 'string',
              enum: ['latest', 'indie-radar', 'tour-festival', 'new-music', 'culture', 'industry']
            },
            tags: {
              type: 'array',
              items: { type: 'string' },
              minItems: 3,
              maxItems: 6
            },
            topicTags: {
              type: 'array',
              items: { type: 'string' },
              minItems: 1,
              maxItems: 3
            },
            factCheckNote: { type: 'string' }
          },
          required: ['title', 'dek', 'body', 'section', 'tags', 'topicTags', 'factCheckNote']
        }
      }
    }
  });

  const parsed = JSON.parse(response.output_text) as ArticleSchema;
  const slug = makeSlug(parsed.title || source.title);
  const now = new Date().toISOString();
  const section = parsed.section;

  return {
    id: safeId(),
    slug,
    title: parsed.title,
    dek: parsed.dek,
    body: parsed.body,
    section,
    sectionLabel: sectionLabel(section),
    tags: parsed.tags,
    topicTags: parsed.topicTags,
    authorSlug: assignAuthor(section),
    createdAt: now,
    updatedAt: now,
    sourceCountLabel: 'Single-source brief',
    factCheckNote: parsed.factCheckNote,
    coverImage: source.urlToImage,
    coverImageAlt: parsed.title,
    source: {
      name: source.source.name,
      url: source.url,
      publishedAt: source.publishedAt,
      author: source.author,
      originalTitle: source.title,
      originalDescription: source.description
    }
  };
}
