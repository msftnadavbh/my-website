import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
import { buildSitemap } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(siteUrl);
}
