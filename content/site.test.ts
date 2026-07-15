import assert from "node:assert/strict";
import test from "node:test";
import { site } from "./site.ts";

test("describes focus as an evergreen operating loop", () => {
  assert.equal(site.focus.title, "How the work moves.");
  assert.equal(
    site.focus.introduction,
    "Start with the constraint. Make the trade-off explicit. Build the path. Watch it in production. Feed the evidence into the next decision.",
  );
  assert.deepEqual(
    site.focus.loop.map((step) => step.title),
    [
      "Frame the system",
      "Make the trade-offs explicit",
      "Build the path people use",
      "Observe production behavior",
      "Feed evidence back",
    ],
  );
});
