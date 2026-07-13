# Portfolio Color Chapters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing one-page portfolio as a mixed light, dark, cobalt, sulfur, and vermilion chapter sequence anchored by the approved generated systems-workshop artwork.

**Architecture:** Keep the existing Next.js page, typed content, terminal component, and static metadata architecture. Add one optimized local hero asset, make each existing semantic section a full-width color chapter with a shell-scoped content wrapper, and rely on CSS for responsive composition and motion. No new dependency or runtime data path is required.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS import with project-authored CSS, `next/image`, `next/og`, Biome, Node test runner, Playwright CLI, Vercel CLI.

## Global Constraints

- Preserve every verified professional claim and external URL.
- Use no more than two generated raster assets; this plan adds only the approved hero asset.
- Use OKLCH tokens and verify WCAG AA contrast: 4.5:1 for body text and 3:1 for large text and UI components.
- Do not add gradients, neon, glass effects, copyrighted imagery, fake code, fake diagrams, analytics, cookies, a backend, or a new dependency.
- Preserve semantic landmarks, heading order, skip navigation, keyboard interaction, 44px targets, and `prefers-reduced-motion` behavior.
- Keep all content readable without JavaScript; the terminal remains optional enhancement.
- Generated imagery must never be presented as real project output.

---

### Task 1: Add and optimize the approved hero artwork

**Files:**
- Create: `public/images/systems-workshop.webp`

**Interfaces:**
- Consumes: approved ImageGen source at `/Users/nadav/.codex/generated_images/019f5c25-e0f3-7e61-816c-1b71be2a4b6b/exec-c52f4fda-5274-4c9a-8d3f-9f4c5dcfac38.png`
- Produces: local 1672×941 WebP asset referenced as `/images/systems-workshop.webp`

- [ ] **Step 1: Copy and encode the asset**

Run:

```bash
mkdir -p public/images
cwebp -quiet -q 84 \
  /Users/nadav/.codex/generated_images/019f5c25-e0f3-7e61-816c-1b71be2a4b6b/exec-c52f4fda-5274-4c9a-8d3f-9f4c5dcfac38.png \
  -o public/images/systems-workshop.webp
```

Expected: `public/images/systems-workshop.webp` exists and is substantially smaller than the 2 MB source.

- [ ] **Step 2: Verify the encoded image**

Run:

```bash
file public/images/systems-workshop.webp
du -h public/images/systems-workshop.webp
```

Expected: WebP image, 1672×941, with a practical static-site file size.

- [ ] **Step 3: Commit the isolated asset**

```bash
git add public/images/systems-workshop.webp
git commit -m "assets: add systems workshop hero artwork"
```

### Task 2: Restructure the page into semantic color chapters

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: existing `site` data, `ProfileTerminal`, and `/images/systems-workshop.webp`
- Produces: full-width chapter wrappers with shell-scoped content and class names consumed by Task 3

- [ ] **Step 1: Recompose the hero**

In `app/page.tsx`, keep the current copy and actions but replace the current hero/terminal two-column section with:

```tsx
<section className="hero-chapter" id="top">
  <div className="hero shell">
    <div className="hero__copy">{/* existing role, name, copy, actions */}</div>
    <figure className="hero__visual">
      <Image
        alt="A modular systems workshop built from cobalt acrylic planes, graphite blocks, metal lines, and yellow calibration markers."
        height={941}
        priority
        sizes="(max-width: 720px) 100vw, 58vw"
        src="/images/systems-workshop.webp"
        width={1672}
      />
    </figure>
  </div>
</section>
<section className="terminal-bridge" aria-label="Interactive profile">
  <div className="shell terminal-bridge__inner">
    <p>Four useful views. No loading sequence required.</p>
    <ProfileTerminal commands={site.commands} />
  </div>
</section>
```

The terminal keeps its existing internal label and interaction; the bridge label describes the containing chapter.

- [ ] **Step 2: Wrap each existing section in its chapter**

Use these mappings while preserving the existing content exactly:

```text
Current focus        chapter chapter--focus
Selected work        chapter chapter--work
Career journey       chapter chapter--journey
Principles           chapter chapter--principles
Recognition          chapter chapter--recognition
Beyond engineering   chapter chapter--beyond
Contact              chapter chapter--contact
```

Each full-width `<section className="chapter chapter--…">` contains one `<div className="section shell …">`. Preserve the existing IDs and `aria-labelledby` attributes on the outer semantic section so navigation and accessible names continue to work.

- [ ] **Step 3: Keep Beyond Engineering textual**

Retain the existing `site.beyond` copy and ASCII mark. Do not create a second generated image; the hero and real Wise Owl imagery already satisfy the visual narrative.

- [ ] **Step 4: Run the structural checks**

Run:

```bash
npm run typecheck
npm run lint
```

Expected: both commands exit 0 with no TypeScript or Biome errors.

- [ ] **Step 5: Commit the page composition**

```bash
git add app/page.tsx
git commit -m "feat: compose portfolio color chapters"
```

### Task 3: Implement the color system and responsive chapter layouts

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: chapter and hero class names from Task 2
- Produces: accessible palette tokens, desktop/tablet/mobile layout, focus treatments, and reduced-motion behavior

- [ ] **Step 1: Replace the root palette with semantic chapter tokens**

Define explicit foregrounds instead of reusing muted gray across colored fields:

```css
:root {
  --graphite: oklch(0.13 0.012 255);
  --graphite-raised: oklch(0.18 0.018 255);
  --cool-white: oklch(0.965 0.008 255);
  --cool-white-muted: oklch(0.43 0.02 255);
  --cobalt: oklch(0.49 0.2 258);
  --cobalt-deep: oklch(0.34 0.16 258);
  --cobalt-ink: oklch(0.97 0.012 90);
  --vermillion: oklch(0.65 0.2 35);
  --vermillion-ink: oklch(0.17 0.025 30);
  --sulfur: oklch(0.89 0.14 96);
  --sulfur-ink: oklch(0.2 0.025 80);
  --ink: oklch(0.95 0.008 90);
  --muted: oklch(0.75 0.014 90);
  --line: oklch(0.32 0.02 255);
  --line-strong: oklch(0.48 0.045 255);
  --bg: var(--graphite);
  --surface: var(--graphite-raised);
  --surface-raised: oklch(0.22 0.025 255);
  --signal: oklch(0.7 0.17 258);
  --brass: var(--sulfur);
  --dark-on-brass: var(--sulfur-ink);
}
```

Tune only values that fail measured contrast during Task 6.

- [ ] **Step 2: Style the hero and terminal bridge**

Implement a cool-white hero with graphite copy and a right-hand image panel. The image should fill its grid area with `object-fit: cover`, use a stable aspect ratio, and crop toward the constructed right side. On mobile, stack copy before the image. Give the terminal bridge a graphite surface and constrain the terminal to a readable width without hiding content.

Required selectors:

```css
.hero-chapter {}
.hero {}
.hero__copy {}
.hero__visual {}
.hero__visual img {}
.terminal-bridge {}
.terminal-bridge__inner {}
```

The hero primary action uses sulfur; secondary actions use graphite outlines; links use cobalt-deep. The sticky header uses cool white with graphite text while the hero is visible and remains readable over all chapters.

- [ ] **Step 3: Style the chapter surfaces**

Apply these deterministic roles:

```css
.chapter--focus { background: var(--cobalt); color: var(--cobalt-ink); }
.chapter--work { background: var(--graphite); color: var(--ink); }
.chapter--journey,
.chapter--recognition { background: var(--cool-white); color: var(--graphite); }
.chapter--principles { background: var(--sulfur); color: var(--sulfur-ink); }
.chapter--beyond { background: var(--vermillion); color: var(--vermillion-ink); }
.chapter--contact { background: var(--graphite); color: var(--ink); }
```

Scope muted text, borders, links, sequence markers, and focus rings within each colored chapter. Do not rely on global gray tokens inside cobalt, sulfur, vermilion, or cool-white sections.

- [ ] **Step 4: Refine each chapter's layout**

- Focus: use sulfur sequence markers and connecting rules; keep five items linear on mobile.
- Work: preserve varied project layouts and real Wise Owl artwork; use cobalt, vermilion, and sulfur only for structural emphasis.
- Journey: add a cobalt connecting line and explicit markers without making color the only chronological cue.
- Principles: increase typographic scale variation across the existing ruled statements; retain all copy.
- Recognition: continue the cool-white workspace and keep links cobalt-deep.
- Beyond: use one oversized ASCII mark and restrained graphite rules; no image.
- Contact: retain direct GitHub and LinkedIn actions and the quiet footer transition.

- [ ] **Step 5: Update viewport metadata**

In `app/layout.tsx`, change:

```tsx
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#f4f5f8", media: "(prefers-color-scheme: light)" },
    { color: "#151820", media: "(prefers-color-scheme: dark)" },
  ],
  width: "device-width",
  initialScale: 1,
};
```

This metadata does not add a theme switcher; it keeps browser chrome coherent with the mixed page.

- [ ] **Step 6: Run build checks**

Run:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

Expected: all commands exit 0; every route remains statically generated.

- [ ] **Step 7: Commit the visual system**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: add mixed color chapter system"
```

### Task 4: Update the social preview and design documentation

**Files:**
- Modify: `app/opengraph-image.tsx`
- Modify: `DESIGN.md`

**Interfaces:**
- Consumes: the palette roles established in Task 3
- Produces: deterministic 1200×630 social preview and current maintainers' design reference

- [ ] **Step 1: Recompose the Open Graph image**

Use solid color blocks: cool white on the left, graphite on the right, cobalt as the largest colored signal, sulfur for calibration labels, and vermilion for one small connector. Keep the existing verified role and positioning copy. Do not embed the generated hero raster or introduce external assets.

- [ ] **Step 2: Rewrite `DESIGN.md` to match the approved system**

Document:

```text
Concept: Systems in Motion
Strategy: mixed light and dark chapters
Chapter order: cool white → graphite → cobalt → graphite → cool white → sulfur → cool white → vermilion → graphite
Image policy: one generated hero asset plus real repository evidence
Interaction policy: CSS/native controls, no new motion dependency
```

Keep the existing typography names and visual prohibitions.

- [ ] **Step 3: Verify metadata routes**

Run:

```bash
npm run build
```

Expected: `/opengraph-image`, `/icon`, `/robots.txt`, and `/sitemap.xml` are generated successfully.

- [ ] **Step 4: Commit documentation and social preview**

```bash
git add app/opengraph-image.tsx DESIGN.md
git commit -m "docs: align portfolio identity and social preview"
```

### Task 5: Run visual, accessibility, and interaction verification

**Files:**
- Modify only if verification finds a defect: `app/globals.css`, `app/page.tsx`, `app/layout.tsx`

**Interfaces:**
- Consumes: complete local implementation
- Produces: verified desktop/mobile/reduced-motion experience with no console or network errors

- [ ] **Step 1: Run the complete repository verification**

Run:

```bash
npm run verify
```

Expected: formatter, lint, tests, TypeScript, and production build all pass.

- [ ] **Step 2: Start the production server**

Run `npm start` in a managed background session and wait for `http://localhost:3000` to respond with 200.

- [ ] **Step 3: Verify desktop**

With Playwright CLI at 1440×1100:

- Confirm the hero shows copy and artwork without overlap.
- Confirm every chapter has its intended surface color and readable text.
- Use the terminal controls and confirm the active state and output update.
- Check console errors and failed requests.
- Capture a full-page screenshot for inspection.

- [ ] **Step 4: Verify mobile and narrow layouts**

At 390×844 and 320×700:

- Confirm copy precedes the hero image.
- Confirm no horizontal overflow or clipped headings.
- Confirm focus sequence, projects, career, principles, recognition, and actions become a readable single column.
- Confirm all interactive targets are at least 44px.

- [ ] **Step 5: Verify accessibility basics**

- Tab from the skip link through navigation, hero links, terminal controls, project links, recognition links, and contact actions.
- Emulate `prefers-reduced-motion: reduce` and confirm no content is hidden and terminal changes are immediate.
- Measure each chapter's body and link contrast in browser tooling; adjust only failing tokens.
- Confirm the hero image alt text is exposed once and decorative visual treatment is not duplicated to assistive technology.

- [ ] **Step 6: Stop the local server and close browsers**

Expected: no background server or Playwright session remains.

- [ ] **Step 7: Commit verification fixes if needed**

```bash
git add app/globals.css app/page.tsx app/layout.tsx
git commit -m "fix: polish responsive chapter presentation"
```

Skip this commit when verification required no source change.

### Task 6: Deploy and verify production

**Files:**
- No source changes expected

**Interfaces:**
- Consumes: verified checkout and linked Vercel project `nadav-ben-haim`
- Produces: public production deployment at `https://nadav-ben-haim.vercel.app`

- [ ] **Step 1: Confirm the Vercel project preset**

Run:

```bash
vercel project inspect nadav-ben-haim
```

Expected: Framework Preset is Next.js and Output Directory is Next.js default.

- [ ] **Step 2: Deploy the verified checkout**

Run:

```bash
vercel deploy . --prod --force --yes
```

Expected: target `production`, state `READY`, alias `https://nadav-ben-haim.vercel.app`.

- [ ] **Step 3: Verify the stable public URL**

Run HTTP checks for `/`, `/robots.txt`, `/sitemap.xml`, `/icon`, and `/opengraph-image`; every route must return 200. Open the stable domain in Playwright at desktop and mobile sizes, confirm the page title, inspect console errors and failed requests, then close the browser.

- [ ] **Step 4: Report final repository state**

Run:

```bash
git status --short --branch
git log --oneline -6
```

Report the deployment URL, verification results, commits, changed files, and any remaining build warning without claiming it was resolved.
