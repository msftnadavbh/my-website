# Linux Personality Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Nadav's portfolio as an engaging project-first showcase with authentic Linux workstation details and a secondary interactive terminal joke.

**Architecture:** Preserve the existing Next.js App Router page, typed content source, metadata routes, and static rendering. Recompose `app/page.tsx`, replace the visual system in `app/globals.css`, and extend the existing client terminal with one small pure command function covered by Node's built-in test runner.

**Tech Stack:** Next.js 16, React 19, TypeScript, native CSS, Next Image, Node test runner, Biome, Vercel.

## Global Constraints

- Preserve every verified professional and project claim in `content/site.ts`.
- Add no dependency, backend, analytics, tracking, Linux logo, copyrighted artwork, or invented metric.
- Keep normal scrolling and links independent from the terminal.
- Respect keyboard access, reduced motion, mobile reflow, and high-contrast text.

---

### Task 1: Terminal command model

**Files:**
- Create: `lib/terminal-command.ts`
- Test: `lib/terminal-command.test.ts`
- Modify: `components/profile-terminal.tsx`

**Interfaces:**
- Produces: `runTerminalCommand(input: string): readonly string[] | null`, where `null` means clear output.
- Consumes: existing verified terminal copy from `content/site.ts`.

- [ ] Add tests for `help`, `uname -a`, `ls ~/projects`, `sudo hire nadav`, `clear`, and an unknown command.
- [ ] Run `npm test` and confirm the new tests fail before implementation.
- [ ] Implement the command function with a fixed record and explicit `clear` and unknown-command branches.
- [ ] Rebuild `ProfileTerminal` with a native form, command suggestions, keyboard submission, and ARIA live output.
- [ ] Run `npm test` and confirm all tests pass.

### Task 2: Project-first page composition

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `site.profile`, `site.projects`, `site.focus`, `site.experience`, `site.principles`, and `site.recognition`.
- Produces: semantic sections and class names styled by Task 3.

- [ ] Replace the conventional header with a slim workstation panel and normal anchor navigation.
- [ ] Recompose the hero around human positioning, current coordinates, and the secondary terminal.
- [ ] Turn Selected Work into one feature case study and three varied technical specimens.
- [ ] Tighten current focus, career, principles, recognition, personal, and contact sections into shorter reading chapters.
- [ ] Keep Person JSON-LD and safe external-link behavior unchanged.

### Task 3: Linux-native visual system

**Files:**
- Modify: `app/globals.css`
- Modify: `app/icon.tsx`
- Modify: `app/opengraph-image.tsx`
- Modify: `app/layout.tsx`
- Modify: `DESIGN.md`
- Modify: `README.md`

**Interfaces:**
- Consumes: class names from Task 2.
- Produces: responsive, accessible workstation chrome and project layouts.

- [ ] Define paper, aubergine, orange, green, cyan, ink, muted, and line tokens in OKLCH.
- [ ] Style the panel, hero, terminal, project specimens, compact timelines, evidence modules, and contact close.
- [ ] Add responsive rules for 960px, 720px, and 390px plus reduced-motion handling.
- [ ] Align favicon, Open Graph image, theme colors, design rationale, and README with the new system.
- [ ] Remove any unused generated artwork reference and asset.

### Task 4: Verification and publishing

**Files:**
- Verify all changed files.

**Interfaces:**
- Consumes: completed static site.
- Produces: verified production deployment.

- [ ] Run `npm run verify`; require formatting, lint, tests, TypeScript, and build to pass.
- [ ] Run browser checks at 1440x1000 and 390x844 for console errors, overflow, terminal commands, and focusable controls.
- [ ] Check repository, LinkedIn, event, sitemap, robots, and Open Graph URLs.
- [ ] Deploy a Vercel preview, verify HTTP 200, then deploy production and verify the production alias.
- [ ] Close browser and dev-server sessions and report the final git status.
