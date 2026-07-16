import assert from "node:assert/strict";
import test from "node:test";
import { createRssFeed, escapeXml } from "./rss.ts";

test("escapes XML text and attributes", () => {
  assert.equal(
    escapeXml('Production < veto & "proof"'),
    "Production &lt; veto &amp; &quot;proof&quot;",
  );
});

test("creates an RSS feed with absolute note links", () => {
  const feed = createRssFeed("https://nadav.example");

  assert.match(feed, /<rss version="2.0"/);
  assert.match(
    feed,
    /https:\/\/nadav\.example\/notes\/production-has-veto-power/,
  );
  assert.match(feed, /Production has veto power/);
});
