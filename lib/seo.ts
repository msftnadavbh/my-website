import { getCaseStudy, getFieldNote } from "../content/growth.ts";
import { site } from "../content/site.ts";
import { siteUrl } from "./site-url.ts";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  published?: string;
  modified?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  published,
  modified,
}: PageMetadataInput) {
  const fullTitle = `${title} | ${site.profile.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: site.profile.name,
      ...(published ? { publishedTime: published } : {}),
      ...(modified ? { modifiedTime: modified } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
    },
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-07-13",
    dateModified: "2026-07-16",
    mainEntity: {
      "@type": "Person",
      name: site.profile.name,
      jobTitle: site.profile.role,
      worksFor: { "@type": "Organization", name: site.profile.organization },
      url: siteUrl,
      sameAs: [site.profile.linkedin, site.profile.github],
      knowsAbout: [
        "Cloud architecture",
        "Microsoft Azure",
        "Kubernetes",
        "Developer productivity",
        "AI engineering",
        "Model Context Protocol",
      ],
    },
  } as const;
}

export function softwareSourceCodeSchema(slug: string) {
  const study = getCaseStudy(slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: study.title,
    description: study.summary,
    author: { "@type": "Person", name: site.profile.name, url: siteUrl },
    codeRepository: study.sources[0].url,
    programmingLanguage: study.technologies,
    datePublished: study.published,
    dateModified: study.modified,
    url: `${siteUrl}/work/${study.slug}`,
  } as const;
}

export function techArticleSchema(slug: string) {
  const note = getFieldNote(slug);
  if (!note) throw new Error(`Unknown field note: ${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: note.title,
    description: note.description,
    author: { "@type": "Person", name: site.profile.name, url: siteUrl },
    datePublished: note.published,
    dateModified: note.modified,
    keywords: note.topics.join(", "),
    mainEntityOfPage: `${siteUrl}/notes/${note.slug}`,
  } as const;
}

export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  } as const;
}
