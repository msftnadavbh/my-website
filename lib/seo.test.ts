import assert from "node:assert/strict";
import test from "node:test";
import {
  breadcrumbSchema,
  buildPageMetadata,
  profilePageSchema,
  softwareSourceCodeSchema,
  techArticleSchema,
} from "./seo.ts";

test("builds route-specific canonical and social metadata", () => {
  const metadata = buildPageMetadata({
    title: "Production has veto power",
    description: "A practical operating loop.",
    path: "/notes/production-has-veto-power",
    type: "article",
    published: "2026-07-16",
    modified: "2026-07-16",
  });

  assert.equal(
    metadata.alternates.canonical,
    "/notes/production-has-veto-power",
  );
  assert.equal(metadata.openGraph.url, "/notes/production-has-veto-power");
  assert.equal(
    metadata.openGraph.title,
    "Production has veto power | Nadav Ben-Haim",
  );
  assert.equal(metadata.twitter.card, "summary_large_image");
});

test("builds profile, software, article, and breadcrumb structured data", () => {
  assert.equal(profilePageSchema()["@type"], "ProfilePage");
  assert.equal(profilePageSchema().mainEntity["@type"], "Person");
  assert.equal(
    softwareSourceCodeSchema("wise-owl-ai-code-review")["@type"],
    "SoftwareSourceCode",
  );
  assert.equal(
    techArticleSchema("production-has-veto-power")["@type"],
    "TechArticle",
  );
  assert.equal(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Notes", path: "/notes" },
    ]).itemListElement.length,
    2,
  );
});
