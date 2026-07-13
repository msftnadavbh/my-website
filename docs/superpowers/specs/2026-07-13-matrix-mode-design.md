# Matrix Mode Design

## Objective

Add an optional dark Matrix-inspired theme to the existing Linux-native portfolio without replacing its default identity or making content harder to read.

## Behavior

- A `matrix` toggle in the workstation panel switches between the default theme and Matrix mode.
- The selection persists in `localStorage` under `nadav-theme`.
- A small inline script applies the saved theme before hydration to avoid a flash of the wrong palette.
- The toggle exposes its state with `aria-pressed` and keeps the same label in both states.
- Matrix mode uses black and deep green surfaces, phosphor-green text, green borders, and green-tinted project evidence.
- Decorative columns of glyphs fall behind the page and never intercept input.
- `prefers-reduced-motion: reduce` freezes the glyphs into a faint static texture.

## Constraints

- No dependency, canvas, audio, command-only navigation, or content changes.
- Default Linux-native mode remains unchanged.
- Contrast stays readable and the rain stays subordinate to content.
- Theme state is device-local and requires no cookie or backend.
