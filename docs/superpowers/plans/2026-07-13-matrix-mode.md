# Matrix Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a persisted, accessible Matrix-inspired optional theme with subtle falling glyphs.

**Architecture:** Keep theme state in a tiny client component and apply it as `data-theme="matrix"` on the root element. Use a pure helper for theme transitions, an inline pre-hydration script for persistence, and CSS variables/keyframes for all visual changes.

**Tech Stack:** React 19, Next.js 16 App Router, TypeScript, native CSS, Node test runner.

## Global Constraints

- No new dependency, backend, cookie, canvas, audio, or content mutation.
- Default theme remains the initial fallback.
- Reduced-motion users receive a static glyph texture.

---

### Task 1: Tested theme state

**Files:**
- Create: `lib/theme.ts`
- Create: `lib/theme.test.ts`
- Create: `components/theme-toggle.tsx`

**Interfaces:**
- Produces: `type Theme = "default" | "matrix"` and `nextTheme(theme: Theme): Theme`.

- [ ] Write failing tests for both theme transitions.
- [ ] Run `npm test` and confirm failure because `lib/theme.ts` is missing.
- [ ] Implement the two-value transition helper.
- [ ] Build the client toggle around `document.documentElement.dataset.theme` and `localStorage`.
- [ ] Run `npm test` and confirm all tests pass.

### Task 2: Theme integration and visual system

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `DESIGN.md`
- Modify: `README.md`

**Interfaces:**
- Consumes: `ThemeToggle` from Task 1.
- Produces: early saved-theme application, panel toggle, decorative glyph layer, Matrix tokens, and reduced-motion behavior.

- [ ] Add the pre-hydration preference script and `suppressHydrationWarning`.
- [ ] Add the toggle and deterministic glyph columns to the page shell.
- [ ] Define Matrix palette overrides and a single transform-only rain animation.
- [ ] Freeze the animation under `prefers-reduced-motion`.
- [ ] Document the optional theme and storage behavior.

### Task 3: Verification and deployment

**Files:**
- Verify all changed files.

- [ ] Run `npm run verify`.
- [ ] Verify toggle state, persistence after reload, reduced-motion CSS, mobile overflow, and production console output in the browser.
- [ ] Deploy to Vercel production and verify the public alias.
- [ ] Commit the change and leave the branch clean.
