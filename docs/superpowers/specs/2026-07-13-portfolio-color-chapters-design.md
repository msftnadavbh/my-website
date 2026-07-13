# Portfolio Color Chapters Redesign

## Objective

Rework Nadav Ben-Haim's portfolio from a nearly uniform dark canvas into a sequence of light, dark, and saturated chapters. Preserve the site's technical credibility, verified content, accessibility, and performance while giving it a more distinctive and human visual identity.

The redesign should feel like moving through a working systems studio: bright analysis space, saturated signal fields, dark technical instruments, and warm calibration notes. Color must carry structure, not decorate isolated labels.

## Design principles

- Keep the existing information architecture and factual content unless a layout change requires a small copy adjustment.
- Use color at section scale so each chapter has a recognizable role.
- Preserve real project evidence. Generated artwork establishes mood but never substitutes for repository screenshots or technical explanations.
- Keep the page mature, precise, and useful to technical decision-makers.
- Avoid gradients, neon, glass effects, copyrighted imagery, fake code, fake diagrams, and ornamental card grids.
- Use no more than two generated raster assets on the entire page.

## Visual system

### Palette roles

Use OKLCH tokens with contrast verified during implementation.

- **Graphite:** deep technical chapters, terminal surfaces, footer, and high-contrast text.
- **Cool white:** hero copy, career chapter, and breathing space.
- **Cobalt:** current-focus chapter, interactive states, and architecture signals.
- **Vermilion:** energy, transitions, selected links, and the personal chapter.
- **Sulfur yellow:** calibration notes, primary action emphasis, and the principles chapter.

The neutral scale should be subtly tinted toward cobalt rather than pure gray. Saturated colors must have explicit foreground tokens instead of reusing muted gray text.

### Typography

Retain the existing Geologica, Atkinson Hyperlegible Next, and Azeret Mono families. The redesign changes contrast and pacing, not the typographic identity.

- Keep display tracking at or above `-0.04em`.
- Cap body copy near 68 characters per line.
- Use monospace for metadata and controls, not as the default voice for full sections.
- Use balanced headings and generous line height on dark surfaces.

### Section transitions

Transitions should be created with solid fields, composition, spacing, and image boundaries. Do not use decorative gradients. Chapter changes may use a hard diagonal or stepped edge when it aligns with the generated hero artwork, provided the content reading order remains conventional.

## Page composition

### 1. Hero: light to dark workshop

Use the approved generated systems-workshop image as the visual anchor. Copy the selected source into `public/images` and optimize it for responsive delivery.

- The light side contains Nadav's name, role, positioning statement, and primary links.
- The modular construction occupies the right side and creates the transition into the site's darker technical language.
- The hero remains legible if the image fails to load; text must not depend on image contrast without a deterministic backing surface.
- On narrow screens, keep the copy first and show a deliberately cropped image panel below it.
- Move the interactive profile terminal below the main statement, either as the final hero element or the opening element of the next dark chapter. It must not compete with the name and artwork.

### 2. Current focus: cobalt signal field

Give the entire section a saturated cobalt surface with a dedicated warm-white foreground.

- Present architecture, implementation, operations, and iteration as one connected sequence.
- Use sulfur markers for sequence points and active interests.
- Keep the sequence linear on mobile and meaningful without animation.
- Avoid turning the content into four identical cards.

### 3. Selected work: graphite instruments

Return to graphite for the most technical chapter.

- Retain four selected public projects and all verified project claims.
- Keep the existing varied project compositions.
- Use the real Wise Owl repository image as evidence.
- Let cobalt identify system structure, vermilion mark meaningful transitions, and sulfur identify metadata or calibration details.
- Generated imagery must not be used inside project explanations where it could be mistaken for product output.

### 4. Career journey: clear workspace

Use a cool-white background with dark graphite text.

- Preserve the chronological progression and emphasize the throughline from escalation and support to architecture, reliability, developer productivity, and solution engineering.
- Replace the dark ruled-list feeling with a continuous path or strong editorial sequence.
- Use cobalt for the connecting path and vermilion sparingly for role transitions.
- Keep dates and titles readable without hover or interaction.

### 5. Working principles: calibration sheet

Use a pale sulfur-yellow field with graphite text.

- Present principles as short editorial statements separated by spacing and rules, not cards.
- Use scale and placement to distinguish the strongest principles.
- Do not add slogans, metrics, or decorative quotes.

### 6. Beyond engineering: motion and personality

Use vermilion as the dominant field with a dark foreground chosen for accessible contrast.

- Keep the content brief: salsa, Japan, nostalgic games, and creative building.
- Avoid copyrighted names or imagery as visual branding.
- Optionally generate one supporting raster image based on tactile motion, rhythm, and making. It must contain no recognizable characters, logos, people, or fake text.
- If the second image does not materially improve the section, omit it.

### 7. Contact: quiet technical close

Return to deep graphite for the final chapter.

- Keep GitHub and LinkedIn as the only contact routes.
- Preserve the no-tracking statement.
- Use one clear closing line and direct links, without a startup-style oversized call to action.

## Image strategy

### Hero asset

Use the generated systems-workshop concept currently stored outside the repository as the approved source direction. Before integration:

1. Copy it into `public/images` with a descriptive filename.
2. Inspect the final crop at desktop, tablet, and mobile sizes.
3. Export a web-appropriate version while retaining enough resolution for high-density displays.
4. Provide accurate alt text that describes the modular physical system rather than interpreting it as a real product.

### Supporting asset

Generate at most one additional image only after the Beyond Engineering composition is implemented without it. Keep it only if it improves narrative pacing. Otherwise, the hero image and the existing real project asset are sufficient.

### Social preview

Update the Open Graph image to reflect the new palette using deterministic code. Do not embed the generated hero image unless it remains legible and lightweight in the social-preview crop.

## Interaction and motion

- Preserve the terminal's four existing views and native-button interaction.
- Use short color, clip, or transform transitions only where they clarify state.
- Do not add a motion dependency.
- All content is visible by default and remains usable without JavaScript.
- Respect `prefers-reduced-motion` with immediate state changes.
- Keep focus rings visible on every chapter color.

## Responsive behavior

- Desktop: allow asymmetric image and text compositions with deliberate full-width color fields.
- Tablet: reduce overlap and keep chapter edges outside text columns.
- Mobile: use a simple vertical reading order; text precedes supporting imagery; controls retain at least 44px targets.
- Test long headings at 320px and 390px widths for overflow.
- Ensure generated imagery has fixed dimensions or aspect ratio to prevent layout shift.

## Accessibility and performance

- Verify every foreground/background pair against WCAG AA: 4.5:1 for body text and 3:1 for large text and UI components.
- Never use color as the sole indicator of sequence, state, or link affordance.
- Preserve semantic headings, landmarks, skip navigation, keyboard access, and visible focus states.
- Deliver generated raster assets through `next/image` or an equivalent optimized static-image path.
- Avoid client-side layout logic and new dependencies.
- Recheck the browser console, failed requests, and reduced-motion behavior after implementation.

## Expected implementation surface

Primary changes should remain within:

- `app/globals.css`
- `app/page.tsx`
- `app/opengraph-image.tsx`
- `DESIGN.md`
- `public/images/` for the selected optimized asset or assets

The content data structures and terminal component should change only if required by the approved layout. No new framework, animation package, theme switcher, or component library is needed.

## Validation

Before deployment:

1. Run formatting, linting, tests, TypeScript checks, and a production build.
2. Verify desktop at 1440px and mobile at 390px, plus a narrow 320px overflow check.
3. Check keyboard navigation, visible focus states, skip link, and reduced motion.
4. Measure all new color-pair contrast ratios.
5. Confirm hero and repository images load without layout shift.
6. Check internal and external links.
7. Confirm zero browser console errors and no failed asset requests.
8. Deploy to production and verify the stable public URL.

## Out of scope

- Light/dark theme toggle
- Additional pages or routing
- New professional claims or project entries
- Live GitHub metrics
- Portrait generation
- Copyrighted game or anime imagery
- More than two generated assets
- New runtime services, analytics, cookies, CMS, or backend
