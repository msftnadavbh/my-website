import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl, shouldIndexSite } from "./site-url.ts";

test("uses an explicit site URL and removes a trailing slash", () => {
  assert.equal(
    resolveSiteUrl({ SITE_URL: "https://nadav.example/" }),
    "https://nadav.example",
  );
});

test("uses the preview deployment URL for preview metadata", () => {
  assert.equal(
    resolveSiteUrl({ VERCEL_ENV: "preview", VERCEL_URL: "preview.vercel.app" }),
    "https://preview.vercel.app",
  );
});

test("prefers the production project URL in production", () => {
  assert.equal(
    resolveSiteUrl({
      VERCEL_ENV: "production",
      VERCEL_PROJECT_PRODUCTION_URL: "nadav.vercel.app",
      VERCEL_URL: "temporary.vercel.app",
    }),
    "https://nadav.vercel.app",
  );
});

test("falls back to localhost and indexes only production or explicit URLs", () => {
  assert.equal(resolveSiteUrl({}), "http://localhost:3000");
  assert.equal(shouldIndexSite({ VERCEL_ENV: "preview" }), false);
  assert.equal(shouldIndexSite({ VERCEL_ENV: "production" }), true);
  assert.equal(shouldIndexSite({ SITE_URL: "https://nadav.example" }), true);
});
