# Design Direction

## Concept: Systems Workshop

The visual language takes cues from an after-hours engineering lab: graphite instrument panels, calm ivory documentation, indigo diagnostic signals, and pale brass calibration labels. The result should feel precise and warm rather than corporate, neon, or nostalgic for nostalgia's sake.

## Palette

- Foundation: `oklch(0.105 0 0)`
- Surface: `oklch(0.155 0.008 252)`
- Primary text: `oklch(0.94 0.008 85)`
- Muted text: `oklch(0.72 0.012 85)`
- Signal: `oklch(0.68 0.15 252)`
- Calibration accent: `oklch(0.88 0.09 85)`

The signal color is used for rules, links, and system state. The pale brass accent is reserved for the primary call to action and select labels with dark text.

## Typography

- Geologica: display and section headings.
- Atkinson Hyperlegible Next: body copy.
- Azeret Mono: technical labels and metadata.

Typography carries most of the hierarchy. Labels are used sparingly, body copy stays near 68 characters per line, and the main heading never relies on decorative effects.

## Layout

- Maximum content width: 76rem.
- Hero: editorial statement paired with a useful profile terminal.
- Current focus: a compact systems loop rather than a keyword cloud.
- Selected work: varied project treatments based on each project's real structure.
- Career: one readable ordered progression.
- Principles and recognition: ruled rows, not card grids.
- Mobile: all diagrams become linear reading sequences; primary actions remain at least 44px tall.

## Interaction and motion

The terminal exposes four direct profile views: `whoami`, `focus`, `builds`, and `sidequests`. Its initial state is complete and visible, and controls use native buttons. Motion is limited to short state transitions and is disabled when reduced motion is requested.

## Visual constraints

- No gradients, glow, glass blur, decorative grid overlays, or scanlines.
- No portrait or scraped social media media.
- No copyrighted character artwork, logos, or sprites.
- No repetitive pill clouds, identical card grids, or ornamental architecture diagrams.
- Borders provide structure; shadows remain minimal.
