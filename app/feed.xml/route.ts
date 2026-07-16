import { createRssFeed } from "@/lib/rss";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export function GET() {
  return new Response(createRssFeed(siteUrl), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
