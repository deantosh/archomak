import { news } from "@/lib/news";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const dynamic = "force-static";

export function GET() {
  const items = news
    .map(
      (item) => `    <item>
      <title>${escape(item.title)}</title>
      <link>${siteUrl}/news/${item.slug}</link>
      <guid>${siteUrl}/news/${item.slug}</guid>
      <pubDate>${new Date(`${item.date}T09:00:00+03:00`).toUTCString()}</pubDate>
      <category>${escape(item.product)}</category>
      <description>${escape(item.summary)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Archomak News</title>
    <link>${siteUrl}/news</link>
    <description>Announcements from Archomak and our products.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
