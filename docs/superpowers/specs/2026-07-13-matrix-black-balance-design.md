# Matrix Black Balance

## Goal

Make optional Matrix mode feel black-first and deliberate instead of uniformly green.

## Design

- Use neutral near-black for the page and pure black for terminal-depth surfaces.
- Use subtly green-tinted black only to separate raised sections and controls.
- Render body copy in a restrained gray-green; reserve phosphor green for headings, prompts, active controls, and selected borders.
- Reduce falling glyph opacity and glow so they read as background texture.
- Preserve the existing toggle, layout, content, animation timing, reduced-motion behavior, and default theme.

## Implementation and verification

Change only Matrix-mode styling in `app/globals.css`: rebalance its tokens, quiet the glyphs, and replace the ticker and beyond chapter's large accent fills with dark surfaces. Then verify contrast, desktop and mobile rendering, reduced motion, lint, tests, TypeScript, and production build.
