# Nadav Ben-Haim — Personal Site

A focused personal website for Nadav Ben-Haim, Senior Solution Engineer at Microsoft. The site presents his work across cloud architecture, Kubernetes, reliability, developer productivity, and AI-assisted engineering through verified public projects and career material.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 as the CSS build layer
- Biome for formatting and linting
- Native CSS for the visual system and restrained motion
- Vercel for preview and production hosting

The page is statically generated where practical. It has no backend, database, analytics, tracking cookies, or required runtime secrets.

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification and production build

```bash
npm run format
npm run lint
npm test
npm run typecheck
npm run build
npm run start
```

`npm run verify` runs the formatter, linter, tests, TypeScript checks, and production build in sequence.

## Deployment

The repository is designed for zero-configuration deployment on Vercel:

```bash
vercel deploy
```

Preview deployments are marked `noindex, nofollow`. Production deployments are indexable and publish a sitemap. Set `SITE_URL` only when a stable custom canonical URL should override Vercel's production URL.

## Updating content

- Profile, current focus, projects, career entries, principles, and recognition: [`content/site.ts`](content/site.ts)
- Page composition: [`app/page.tsx`](app/page.tsx)
- Visual system and responsive behavior: [`app/globals.css`](app/globals.css)
- Metadata and structured data: [`app/layout.tsx`](app/layout.tsx)
- Design and product rationale: [`DESIGN.md`](DESIGN.md) and [`PRODUCT.md`](PRODUCT.md)

Project metadata is a manual, verified snapshot as of **2026-07-13**. The build does not call GitHub or LinkedIn, so public API availability cannot break page rendering. Re-check repository READMEs and public profile sources before changing factual copy.

Primary public sources:

- [LinkedIn profile](https://www.linkedin.com/in/nadavbh)
- [GitHub profile](https://github.com/msftnadavbh)
- The public repositories linked from each project entry
- Public Microsoft and community event pages linked from the speaking section

The Wise Owl workflow image is copied from the [MIT-licensed Wise Owl repository](https://github.com/msftnadavbh/wiseowl) so the page can optimize it locally without a fragile remote-image dependency.

## Accessibility

- Semantic landmarks and ordered career/system sequences
- Skip link and visible keyboard focus states
- Native buttons for terminal controls
- Minimum 44px interactive targets
- High-contrast text and controls
- Content remains available without the optional terminal interaction
- The optional Matrix mode is a real pressed-state button, persists locally, and never gates content
- Motion and smooth scrolling are disabled when `prefers-reduced-motion` is enabled; Matrix glyphs become static
- Responsive layouts are reflowed rather than scaled down

## Design rationale

The site is a project-first technical showcase with the personality of a carefully customized Linux workstation. Mineral paper keeps the default reading mode editorial; aubergine panel chrome, warm orange, terminal green, package metadata, status output, and a small interactive shell make it personal without forcing visitors through command-line navigation. An optional persisted Matrix mode turns the same system into a black-and-phosphor-green terminal joke, with deliberately faint falling glyphs and a static reduced-motion state. Real repository evidence takes priority over decorative generated imagery.

## License

No license is granted for this site's original content and design; all rights are reserved by default. Third-party dependencies and the Wise Owl project image retain their respective licenses.
