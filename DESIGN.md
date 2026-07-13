# Design Direction

## Concept: Systems in Motion

The site moves through a working systems studio: a bright analysis space, a graphite instrument bench, a saturated cobalt signal field, a sulfur calibration sheet, and a vermilion human chapter. Color carries the narrative and hierarchy instead of decorating isolated labels.

## Chapter sequence

1. Cool white: name, positioning, and generated systems-workshop artwork.
2. Graphite: the interactive terminal as a bridge into the technical work.
3. Cobalt: current focus and the build-operate-iterate loop.
4. Graphite: selected public projects and real repository evidence.
5. Cool white: career progression and recognition.
6. Sulfur: working principles.
7. Vermilion: interests beyond engineering.
8. Graphite: contact and footer.

## Palette

- Graphite: technical depth, instruments, and closing surfaces.
- Cool white: analysis, clarity, and breathing room.
- Cobalt: architecture, connection, and system state.
- Vermilion: energy, transitions, and personality.
- Sulfur: calibration, emphasis, and primary actions.

Colors use OKLCH tokens in `app/globals.css`. Every colored chapter has an explicit foreground instead of inheriting gray text.

## Typography

- Geologica: display and section headings.
- Atkinson Hyperlegible Next: body copy.
- Azeret Mono: technical labels and metadata.

Body copy stays near 68 characters per line. Display tracking never exceeds `-0.04em`, and monospace remains a technical detail rather than the site's default voice.

## Imagery

The hero uses one original generated still life: a physical systems workshop made from cobalt acrylic, graphite modules, metal paths, and yellow calibration markers. It is atmospheric artwork, not a product screenshot. Selected Work uses real repository imagery where evidence matters.

No portrait, scraped social media image, copyrighted character art, or generated project output is used. A second generated asset is unnecessary unless a future composition proves it adds narrative value.

## Interaction and motion

The terminal exposes `whoami`, `focus`, `builds`, and `sidequests` through native buttons. Its initial content remains complete and visible. Motion is limited to short state transitions and disabled when reduced motion is requested.

## Responsive behavior

Desktop uses asymmetric copy and image compositions. Mobile returns to a direct vertical sequence: copy, artwork, terminal, then chapters. Content never depends on overlap, hover, or animation, and interaction targets remain at least 44px.

## Visual constraints

- No gradients, glow, glass blur, decorative grid overlays, or scanlines.
- No copyrighted character artwork, logos, or sprites.
- No repetitive pill clouds, identical card grids, or ornamental architecture diagrams.
- No generated image may be mistaken for real project evidence.
- Borders provide structure; shadows remain minimal.
