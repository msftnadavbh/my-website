import assert from "node:assert/strict";
import test from "node:test";
import {
  caseStudies,
  caseStudyParams,
  fieldNoteParams,
  fieldNotes,
  getCaseStudy,
  getFieldNote,
} from "./growth.ts";

test("publishes unique, resolvable case-study and field-note slugs", () => {
  const slugs = [...caseStudies, ...fieldNotes].map((entry) => entry.slug);

  assert.equal(new Set(slugs).size, slugs.length);
  assert.deepEqual(
    caseStudies.map(({ slug }) => slug),
    [
      "wise-owl-ai-code-review",
      "azure-pricing-mcp",
      "aks-gateway-api-migration",
    ],
  );
  assert.equal(getCaseStudy("azure-pricing-mcp")?.title, "Azure pricing MCP");
  assert.equal(
    getFieldNote("production-has-veto-power")?.title,
    "Production has veto power",
  );
  assert.equal(getCaseStudy("missing"), undefined);
  assert.equal(getFieldNote("missing"), undefined);
  assert.deepEqual(caseStudyParams(), [
    { slug: "wise-owl-ai-code-review" },
    { slug: "azure-pricing-mcp" },
    { slug: "aks-gateway-api-migration" },
  ]);
  assert.deepEqual(fieldNoteParams(), [{ slug: "production-has-veto-power" }]);
});

test("keeps every case study tied to public sources and verification", () => {
  for (const study of caseStudies) {
    assert.ok(study.sources.length > 0);
    assert.ok(study.verification.length > 0);
    assert.ok(study.sources.every(({ url }) => url.startsWith("https://")));
  }
});
