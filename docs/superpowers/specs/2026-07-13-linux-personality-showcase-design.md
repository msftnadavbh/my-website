# Linux Personality Showcase Design

## Objective

Redesign Nadav Ben-Haim's personal site into an engaging, project-first technical showcase with a Linux-native personality. Linux and terminal references should feel like authentic details from Nadav's workstation, not a navigation requirement or hacker costume.

## Experience

The page opens as a confident technical profile with a slim workstation panel, a large human introduction, and a small terminal Easter egg. Visitors can understand Nadav's role and reach his work without interacting with the terminal. Projects then carry the page through varied, visual case-study modules rather than repeated résumé rows.

## Visual system

- Warm mineral paper remains the main reading surface.
- Deep aubergine provides Linux workstation chrome without becoming an all-black page.
- Warm orange is the main action and personality color.
- Terminal green and cyan are reserved for status, code, and interactive output.
- Existing Geologica, Atkinson Hyperlegible Next, and Azeret Mono fonts remain.
- Interfaces use square corners, thin borders, small status lights, filesystem paths, and package-like metadata.
- No gradients, scanlines, Matrix effects, glass cards, fake metrics, Linux logos, or copied desktop artwork.

## Page structure

1. Workstation panel with compact navigation and external profiles.
2. Hero with name, role, positioning, current technical coordinates, and the optional terminal Easter egg.
3. Selected work using one large Wise Owl evidence panel and three distinct project modules.
4. Current focus presented as active engineering areas rather than a generic skills grid.
5. Compact career journey that connects support, architecture, reliability, productivity, and solution engineering.
6. Working principles and selective speaking/credential evidence.
7. Brief personal chapter and direct LinkedIn/GitHub contact paths.

## Terminal Easter egg

The terminal remains visible but secondary. Visitors can click suggested commands or type:

- `help`
- `whoami`
- `uname -a`
- `ls ~/projects`
- `sudo hire nadav`
- `clear`

Unknown commands return a concise shell-style error. `clear` resets the current output. The component uses native form controls, supports keyboard submission, announces output through an ARIA live region, and remains nonessential to navigation.

## Project presentation

- Wise Owl uses its real workflow image and explains the review-control problem.
- AzurePricingMCP uses a compact structured tool-call specimen.
- Sayonara uses a migration pipeline specimen.
- Copilot Workshop uses a curriculum/runbook specimen.
- Every project retains verified ownership language, repository metadata, technologies, problem context, and a real GitHub link.

## Responsive and accessibility requirements

- Normal document flow and links remain usable without JavaScript.
- Desktop compositions collapse to direct single-column reading on mobile.
- No horizontal overflow at 390px.
- All interactive targets remain at least 44px.
- Focus states are visible and `prefers-reduced-motion` disables optional motion.
- Text contrast meets WCAG-conscious targets on every surface.

## Non-goals

- No fake Linux desktop, draggable windows, boot delay, command-only navigation, games, audio, themes, backend, analytics, or new dependency.
