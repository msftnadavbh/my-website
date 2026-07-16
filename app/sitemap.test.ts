import assert from "node:assert/strict";
import test from "node:test";
import { buildSitemap } from "../lib/sitemap.ts";

test("lists every static content route with its real content date", () => {
  const entries = buildSitemap("https://nadav.example");
  const urls = entries.map(({ url }) => new URL(url).pathname);

  assert.deepEqual(urls, [
    "/",
    "/work/wise-owl-ai-code-review",
    "/work/azure-pricing-mcp",
    "/work/aks-gateway-api-migration",
    "/notes",
    "/notes/production-has-veto-power",
    "/privacy",
  ]);
  assert.ok(entries.every(({ lastModified }) => lastModified instanceof Date));
  assert.ok(
    entries.every(({ lastModified }) => lastModified?.getFullYear() === 2026),
  );
});
