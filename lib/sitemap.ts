import { caseStudies, fieldNotes } from "../content/growth.ts";

export function buildSitemap(baseUrl: string) {
  const entry = (
    path: string,
    lastModified: string,
    changeFrequency: "monthly" | "yearly",
    priority: number,
  ) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(`${lastModified}T00:00:00Z`),
    changeFrequency,
    priority,
  });

  return [
    entry("", "2026-07-16", "monthly", 1),
    ...caseStudies.map((study) =>
      entry(`/work/${study.slug}`, study.modified, "yearly", 0.8),
    ),
    entry("/notes", "2026-07-16", "monthly", 0.8),
    ...fieldNotes.map((note) =>
      entry(`/notes/${note.slug}`, note.modified, "yearly", 0.7),
    ),
    entry("/privacy", "2026-07-16", "yearly", 0.3),
  ];
}
