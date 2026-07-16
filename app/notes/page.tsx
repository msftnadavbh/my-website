import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";
import { fieldNotes } from "@/content/growth";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Field notes",
  description:
    "Practical notes on cloud architecture, AI engineering, and production systems.",
  path: "/notes",
});

export default function NotesPage() {
  return (
    <SiteFrame>
      <main className="listing-page" id="main-content">
        <header className="content-hero shell">
          <p className="path-line">~/notes</p>
          <h1>Field notes.</h1>
          <p className="content-hero__lede">
            Original working notes from the boundary between architecture and
            production.
          </p>
        </header>
        <section className="note-list shell" aria-label="Published field notes">
          {fieldNotes.map((note) => (
            <article key={note.slug}>
              <time dateTime={note.published}>{note.published}</time>
              <div>
                <h2>
                  <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                </h2>
                <p>{note.description}</p>
                <p className="topic-list">{note.topics.join(" · ")}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </SiteFrame>
  );
}
