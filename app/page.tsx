import Image from "next/image";
import { ProfileTerminal } from "@/components/profile-terminal";
import { site } from "@/content/site";

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function ProjectMeta({ values }: { values: readonly string[] }) {
  return (
    <ul className="project-meta" aria-label="Repository metadata">
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}

function TechnologyList({ values }: { values: readonly string[] }) {
  return (
    <p className="technology-list">
      <span>Built with</span> {values.join(" · ")}
    </p>
  );
}

export default function Home() {
  const [wiseOwl, pricing, sayonara, workshop] = site.projects;
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.profile.name,
    jobTitle: site.profile.role,
    worksFor: {
      "@type": "Organization",
      name: site.profile.organization,
    },
    sameAs: [site.profile.linkedin, site.profile.github],
    knowsAbout: [
      "Cloud architecture",
      "Microsoft Azure",
      "Kubernetes",
      "Platform engineering",
      "Site reliability engineering",
      "Developer productivity",
      "AI agents",
      "Model Context Protocol",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell site-header__inner">
          <a
            className="monogram"
            href="#top"
            aria-label="NB / — Nadav Ben-Haim, home"
          >
            NB<span aria-hidden="true">/</span>
          </a>
          <nav aria-label="Primary navigation">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero shell" id="top">
          <div className="hero__copy">
            <p className="role-line">
              {site.profile.role} · {site.profile.organization}
            </p>
            <h1>{site.profile.name}</h1>
            <p className="hero__headline">{site.profile.headline}</p>
            <p className="hero__introduction">{site.profile.introduction}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                See selected work
                <span aria-hidden="true">↓</span>
              </a>
              <ExternalLink
                className="button button--secondary"
                href={site.profile.github}
              >
                GitHub
              </ExternalLink>
              <ExternalLink className="text-link" href={site.profile.linkedin}>
                LinkedIn
              </ExternalLink>
            </div>
          </div>
          <ProfileTerminal commands={site.commands} />
        </section>

        <section
          className="section shell focus"
          aria-labelledby="focus-heading"
        >
          <div className="section-heading">
            <h2 id="focus-heading">{site.focus.title}</h2>
            <p>{site.focus.introduction}</p>
          </div>
          <ol className="systems-loop">
            {site.focus.loop.map((step, index) => (
              <li key={step.title}>
                <span className="systems-loop__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="interest-line">
            {site.focus.interests.map((interest, index) => (
              <span key={interest}>
                {index > 0 && <b aria-hidden="true"> / </b>}
                {interest}
              </span>
            ))}
          </p>
        </section>

        <section
          className="section shell"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-heading section-heading--work">
            <h2 id="work-heading">Selected work</h2>
            <p>
              Four public projects that show the recurring pattern: make complex
              engineering decisions easier to inspect, use, and repeat.
            </p>
          </div>

          <div className="projects">
            <article className="project project--feature">
              <div className="project__copy">
                <p className="project__role">{wiseOwl.role}</p>
                <h3>{wiseOwl.name}</h3>
                <p className="project__summary">{wiseOwl.summary}</p>
                <dl className="project__facts">
                  <div>
                    <dt>The problem</dt>
                    <dd>{wiseOwl.problem}</dd>
                  </div>
                  <div>
                    <dt>Why it matters</dt>
                    <dd>{wiseOwl.why}</dd>
                  </div>
                </dl>
                <TechnologyList values={wiseOwl.technologies} />
                <ProjectMeta values={wiseOwl.metadata} />
                <ExternalLink
                  className="project-link"
                  href={wiseOwl.repository}
                >
                  View Wise Owl on GitHub
                </ExternalLink>
              </div>
              {wiseOwl.image && (
                <figure className="project-visual project-visual--image">
                  <Image
                    alt={wiseOwl.image.alt}
                    height={wiseOwl.image.height}
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 46vw"
                    src={wiseOwl.image.src}
                    width={wiseOwl.image.width}
                  />
                  <figcaption>
                    {wiseOwl.detail.label}: {wiseOwl.detail.steps.join(" → ")}
                  </figcaption>
                </figure>
              )}
            </article>

            <article className="project project--pricing">
              <div className="project__header">
                <div>
                  <p className="project__role">{pricing.role}</p>
                  <h3>{pricing.name}</h3>
                </div>
                <ProjectMeta values={pricing.metadata} />
              </div>
              <div className="project__split">
                <div>
                  <p className="project__summary">{pricing.summary}</p>
                  <p>{pricing.problem}</p>
                  <p>{pricing.why}</p>
                  <TechnologyList values={pricing.technologies} />
                  <ExternalLink
                    className="project-link"
                    href={pricing.repository}
                  >
                    View AzurePricingMCP on GitHub
                  </ExternalLink>
                </div>
                <section
                  className="tool-stack"
                  aria-label={pricing.detail.label}
                >
                  <p>{pricing.detail.label}</p>
                  {pricing.detail.steps.map((step, index) => (
                    <div key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                      <code>tool.call()</code>
                    </div>
                  ))}
                </section>
              </div>
            </article>

            <article className="project project--pipeline">
              <div className="project__copy project__copy--narrow">
                <p className="project__role">{sayonara.role}</p>
                <h3>{sayonara.name}</h3>
                <p className="project__summary">{sayonara.summary}</p>
                <p>{sayonara.problem}</p>
                <p>{sayonara.why}</p>
              </div>
              <ol className="pipeline" aria-label={sayonara.detail.label}>
                {sayonara.detail.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="project__footer">
                <div>
                  <TechnologyList values={sayonara.technologies} />
                  <ProjectMeta values={sayonara.metadata} />
                </div>
                <ExternalLink
                  className="project-link"
                  href={sayonara.repository}
                >
                  View Sayonara on GitHub
                </ExternalLink>
              </div>
            </article>

            <article className="project project--workshop">
              <div>
                <p className="project__role">{workshop.role}</p>
                <h3>{workshop.name}</h3>
                <p className="project__summary">{workshop.summary}</p>
              </div>
              <ol className="curriculum" aria-label={workshop.detail.label}>
                {workshop.detail.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="project--workshop__detail">
                <p>{workshop.problem}</p>
                <p>{workshop.why}</p>
                <TechnologyList values={workshop.technologies} />
                <ProjectMeta values={workshop.metadata} />
                <ExternalLink
                  className="project-link"
                  href={workshop.repository}
                >
                  View the workshop on GitHub
                </ExternalLink>
              </div>
            </article>
          </div>
        </section>

        <section
          className="section shell"
          id="journey"
          aria-labelledby="journey-heading"
        >
          <div className="section-heading">
            <h2 id="journey-heading">The throughline</h2>
            <p>
              The job titles changed. The useful thread stayed consistent: move
              closer to the decisions that make complicated systems easier to
              build and operate.
            </p>
          </div>
          <ol className="career">
            {site.experience.map((entry) => (
              <li key={`${entry.period}-${entry.title}`}>
                <p className="career__period">{entry.period}</p>
                <div>
                  <h3>{entry.title}</h3>
                  <p className="career__organization">{entry.organization}</p>
                  <p>{entry.summary}</p>
                </div>
                {entry.source && (
                  <ExternalLink className="career__source" href={entry.source}>
                    Source
                  </ExternalLink>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section shell"
          id="principles"
          aria-labelledby="principles-heading"
        >
          <div className="section-heading">
            <h2 id="principles-heading">How the work gets done</h2>
            <p>
              Practical defaults for architecture, automation, review, and
              technical leadership.
            </p>
          </div>
          <div className="principles">
            {site.principles.map((principle) => (
              <article key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section shell"
          aria-labelledby="recognition-heading"
        >
          <div className="section-heading">
            <h2 id="recognition-heading">Speaking & credentials</h2>
            <p>
              A selective public record. Credentials are labeled historically
              where applicable.
            </p>
          </div>
          <div className="recognition">
            {site.recognition.map((item) => (
              <article key={`${item.year}-${item.title}`}>
                <p>{item.year}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.context}</p>
                </div>
                <ExternalLink href={item.link}>{item.linkLabel}</ExternalLink>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section shell beyond"
          aria-labelledby="beyond-heading"
        >
          <div>
            <h2 id="beyond-heading">Beyond engineering</h2>
            <p>{site.beyond}</p>
          </div>
          <p className="ascii-mark" aria-hidden="true">
            <span>┌─ build / teach / dance ─┐</span>
            <span>│ curiosity stays on │</span>
            <span>└────────────────────────┘</span>
          </p>
        </section>

        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="shell contact__inner">
            <div>
              <h2 id="contact-heading">Bring a real system.</h2>
              <p>
                Architecture, platforms, AI-assisted engineering, or the hard
                part between them.
              </p>
            </div>
            <div className="contact__actions">
              <ExternalLink
                className="button button--primary"
                href={site.profile.linkedin}
              >
                Connect on LinkedIn
              </ExternalLink>
              <ExternalLink
                className="button button--secondary"
                href={site.profile.github}
              >
                Explore GitHub
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <p>
            © {new Date().getFullYear()} {site.profile.name}
          </p>
          <p>Designed to work without tracking, cookies, or a backend.</p>
        </div>
      </footer>

      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The schema is a closed static object and '<' is escaped before injection.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
    </>
  );
}
