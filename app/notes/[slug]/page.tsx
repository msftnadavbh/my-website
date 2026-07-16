import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, SiteFrame } from "@/components/site-frame";
import { caseStudies, fieldNoteParams, getFieldNote } from "@/content/growth";
import {
  breadcrumbSchema,
  buildPageMetadata,
  techArticleSchema,
} from "@/lib/seo";

type NotePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return fieldNoteParams();
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();
  return buildPageMetadata({
    title: note.title,
    description: note.description,
    path: `/notes/${note.slug}`,
    type: "article",
    published: note.published,
    modified: note.modified,
  });
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();
  const relatedWork = caseStudies.filter((study) =>
    note.relatedWork.includes(study.slug),
  );
  const schema = [
    techArticleSchema(note.slug),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Notes", path: "/notes" },
      { name: note.title, path: `/notes/${note.slug}` },
    ]),
  ];

  return (
    <SiteFrame>
      <main className="content-page" id="main-content">
        <header className="content-hero shell">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/notes">Notes</Link>
          </nav>
          <p className="role-line">Field note</p>
          <h1>{note.title}.</h1>
          <p className="content-hero__lede">{note.description}</p>
          <p className="content-date">
            <time dateTime={note.published}>{note.published}</time> ·{" "}
            {note.topics.join(" / ")}
          </p>
        </header>
        <article className="content-body shell">
          {note.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section>
            <h2>Related work</h2>
            <div className="related-work">
              {relatedWork.map((study) => (
                <article key={study.slug}>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <Link href={`/work/${study.slug}`}>
                    Read the case study →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </article>
      </main>
      <JsonLd data={schema} />
    </SiteFrame>
  );
}
