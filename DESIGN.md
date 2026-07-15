# Design Direction

## Concept: Linux-Native Technical Showcase

The site is a project-first portfolio with details borrowed from a carefully customized Linux workstation. Linux is personality, not the navigation model: visitors still read a normal page, while panel chrome, status states, package metadata, filesystem paths, aubergine, orange, and a small terminal reward technical familiarity.

## Page sequence

1. Slim workstation panel with normal page links.
2. Human introduction, a mixed professional/personal system summary, and an optional terminal Easter egg.
3. Selected Work led by real Wise Owl evidence and three distinct technical specimens.
4. Engineering approach presented as an operating loop from constraints through feedback.
5. Career progression presented as a readable journal.
6. Working defaults beside a selective public record.
7. Brief personal home directory and direct contact close.

## Palette

- Mineral paper: primary reading surface.
- Aubergine: Linux workstation chrome and one technical chapter.
- Warm orange: primary action and personality signal.
- Terminal green: healthy state and command output.
- Cyan: technical annotation and terminal depth.
- Calibration yellow: small supporting emphasis.

Colors use OKLCH tokens in `app/globals.css`. Most of the page stays light; dark surfaces are concentrated where technical depth benefits from them.

### Optional Matrix mode

The workstation panel includes a compact `matrix` toggle. It swaps the semantic palette for black, layered deep green, and phosphor text while keeping every chapter, hierarchy, and interaction intact. A low-opacity field of falling system terms adds the joke without competing with the writing. The choice is stored only in local storage, is applied before hydration to prevent a flash, and freezes into a static texture when reduced motion is requested.

## Typography

- Geologica: strong display hierarchy.
- Atkinson Hyperlegible Next: comfortable long-form reading.
- Azeret Mono: shell controls, paths, metadata, and machine state.

Mono remains a technical accent rather than the default reading font.

## Terminal

The terminal is a secondary interactive joke with native form controls. It supports `help`, `whoami`, `uname -a`, `ls ~/projects`, `cat ~/now`, `ls ~/after-hours`, `sudo hire nadav`, and `clear`. Suggested commands make it discoverable, unknown commands receive a shell-style response, and no page content or navigation depends on it.

## Project evidence

Wise Owl uses its real workflow image. AzurePricingMCP uses a structured MCP-call specimen, Sayonara uses a migration sequence, and GHAS Zero to Hero Workshop uses a runbook. These visuals explain each project's shape without inventing live output or metrics. The personal chapter presents salsa, Japanese study, and retro-system interests as readable after-hours pursuits rather than decorative desktop art.

## Constraints

- No fake desktop, boot delay, Linux logo, scanlines, glass cards, or command-only navigation.
- No scraped portrait, generated portrait, copyrighted character artwork, or decorative AI illustration.
- Normal document flow, external links, and core content work without terminal interaction.
- Responsive layouts reflow at 960px and 720px with no horizontal overflow at 390px.
- Motion is brief, optional, and disabled for reduced-motion preferences.
