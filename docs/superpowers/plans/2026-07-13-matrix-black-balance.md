# Matrix Black Balance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Matrix mode black-first while retaining restrained phosphor-green accents.

**Architecture:** Rebalance the existing semantic Matrix CSS tokens instead of adding selectors or components. Reduce only the decorative glyph layer's opacity and glow.

**Tech Stack:** CSS, Next.js existing visual system

## Global Constraints

- Preserve the default theme, layout, content, toggle behavior, animation timing, and reduced-motion behavior.
- Add no dependencies or JavaScript.
- Keep body text WCAG-conscious against every Matrix surface.

---

### Task 1: Rebalance Matrix color

**Files:**
- Modify: `app/globals.css:31-108`

**Interfaces:**
- Consumes: Existing semantic CSS variables under `html[data-theme="matrix"]`.
- Produces: Black-first Matrix surfaces and quieter falling glyphs.

- [ ] **Step 1: Capture the current Matrix render**

Run the production build locally and capture the hero at 1440 by 1000 pixels with Matrix mode enabled.

- [ ] **Step 2: Replace the Matrix token values**

Use neutral black for `--terminal` and near-black values for page and raised surfaces. Set `--ink`, `--muted`, `--light`, and `--light-muted` to low-chroma gray-green values. Keep `--orange` and `--green` as the two phosphor accents.

- [ ] **Step 3: Quiet the glyph layer**

Set `.matrix-rain span` opacity to `0.045` and reduce its text-shadow radius to `0.25rem`.

- [ ] **Step 4: Verify**

Run `npm run verify`. Check Matrix mode at 1440 by 1000 and 390 by 844, confirm no horizontal overflow or console errors, and confirm reduced motion still reports `animation-name: none`.

- [ ] **Step 5: Commit and publish**

Commit `app/globals.css` and this plan, push `main`, then verify the Vercel production URL returns HTTP 200 after the Git deployment completes.
