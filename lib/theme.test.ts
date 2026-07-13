import assert from "node:assert/strict";
import test from "node:test";
import { nextTheme } from "./theme.ts";

test("switches the default theme to matrix", () => {
  assert.equal(nextTheme("default"), "matrix");
});

test("switches matrix mode back to the default theme", () => {
  assert.equal(nextTheme("matrix"), "default");
});
