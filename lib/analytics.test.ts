import assert from "node:assert/strict";
import test from "node:test";
import {
  analyticsEvents,
  normalizeAnalyticsConsent,
  shouldLoadAnalytics,
} from "./analytics.ts";

test("does not load analytics before explicit acceptance", () => {
  assert.equal(shouldLoadAnalytics("G-TEST", null), false);
  assert.equal(shouldLoadAnalytics("G-TEST", "declined"), false);
  assert.equal(shouldLoadAnalytics(undefined, "accepted"), false);
  assert.equal(shouldLoadAnalytics("G-TEST", "accepted"), true);
});

test("accepts only known stored consent values and exposes approved events", () => {
  assert.equal(normalizeAnalyticsConsent("accepted"), "accepted");
  assert.equal(normalizeAnalyticsConsent("declined"), "declined");
  assert.equal(normalizeAnalyticsConsent("anything-else"), null);
  assert.deepEqual(analyticsEvents, [
    "case_study_open",
    "repository_open",
    "contact_linkedin",
  ]);
});
