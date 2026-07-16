import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, SiteFrame } from "@/components/site-frame";
import { caseStudyParams, getCaseStudy } from "@/content/growth";
import {
  breadcrumbSchema,
  buildPageMetadata,
  softwareSourceCodeSchema,
} from "@/lib/seo";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyParams();
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return buildPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
    type: "article",
    published: study.published,
    modified: study.modified,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const schema = [
    softwareSourceCodeSchema(study.slug),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Work", path: "/#work" },
      { name: study.title, path: `/work/${study.slug}` },
    ]),
  ];

  return (
    <SiteFrame>
      <main className="content-page" id="main-content">
        <header className="content-hero shell">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#work">Work</Link>
          </nav>
          <p className="role-line">{study.role}</p>
          <h1>{study.title}</h1>
          <p className="content-hero__lede">{study.summary}</p>
          <p className="content-date">
            Published <time dateTime={study.published}>{study.published}</time>{" "}
            · Modified <time dateTime={study.modified}>{study.modified}</time>
          </p>
        </header>

        <article className="content-body shell">
          <section>
            <h2>Context</h2>
            <p>{study.context}</p>
          </section>
          <section>
            <h2>Constraints</h2>
            <ul>
              {study.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Decisions</h2>
            <div className="decision-list">
              {study.decisions.map((decision) => (
                <article key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2>Implementation</h2>
            <ul>
              {study.implementation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="verification-section">
            <h2>Verification</h2>
            <ul>
              {study.verification.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Lessons</h2>
            <ul>
              {study.lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Technologies</h2>
            <p className="topic-list">{study.technologies.join(" · ")}</p>
          </section>
          <section>
            <h2>Credit and sources</h2>
            {study.sources.map((source) => (
              <article className="source" key={source.url}>
                <p>{source.credit}</p>
                <a
                  data-analytics-event="repository_open"
                  href={source.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {source.label} ↗
                </a>
              </article>
            ))}
          </section>
          <aside className="related-callout">
            <p>Related field note</p>
            <Link href="/notes/production-has-veto-power">
              Production has veto power →
            </Link>
          </aside>
        </article>
      </main>
      <JsonLd data={schema} />
    </SiteFrame>
  );
}
