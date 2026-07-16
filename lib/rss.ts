import { fieldNotes } from "../content/growth.ts";

export function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function createRssFeed(baseUrl: string) {
  const items = fieldNotes
    .map((note) => {
      const url = `${baseUrl}/notes/${note.slug}`;
      return `<item>
<title>${escapeXml(note.title)}</title>
<link>${escapeXml(url)}</link>
<guid isPermaLink="true">${escapeXml(url)}</guid>
<description>${escapeXml(note.description)}</description>
<pubDate>${new Date(`${note.published}T00:00:00Z`).toUTCString()}</pubDate>
</item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Nadav Ben-Haim — Field notes</title>
<link>${escapeXml(baseUrl)}/notes</link>
<description>Practical notes on cloud architecture, AI engineering, and production systems.</description>
<language>en</language>
${items}
</channel>
</rss>`;
}
