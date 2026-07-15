import Image from "next/image";
import { ProfileTerminal } from "@/components/profile-terminal";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

const matrixColumns = [
  "0\n1\nAZURE\n01\nK8S\n10\nMCP\n1",
  "KERNEL\n0\n1\nAKS\n10\n01\nAGENT",
  "1\nMCP\n0\nBUILD\n01\nSHIP\n10",
  "CLOUD\n10\n01\nSRE\n1\n0\nTRACE",
  "01\nCODE\n10\nREVIEW\n0\n1\nFIX",
  "LINUX\n1\n0\nBASH\n01\nKUBE\n10",
  "AI\n10\nAGENT\n01\nTOOLS\n0\n1",
  "0\nCOST\n1\nFINOPS\n10\n01\nSKU",
  "GIT\n01\nPUSH\n10\nCI\n1\nCD",
  "1\nNODE\n0\nPOD\n01\nREADY\n10",
  "WISE\n10\nOWL\n01\nPROOF\n0\n1",
  "SYS\n1\nARCH\n0\nRUN\n10\nOK",
] as const;

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
      <span>pkg</span> {values.join(" · ")}
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
    worksFor: { "@type": "Organization", name: site.profile.organization },
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

      <div className="matrix-rain" aria-hidden="true">
        {matrixColumns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>

      <header className="desktop-panel">
        <div className="desktop-panel__inner">
          <a className="panel-host" href="#top">
            <span aria-hidden="true">●</span>
            <span className="panel-host__label">nadav@workstation</span>
          </a>
          <div className="workspaces">
            <a href="#top" aria-label="Workspace 1: profile">
              1
            </a>
            <a href="#work" aria-label="Workspace 2: selected work">
              2
            </a>
            <a href="#focus" aria-label="Workspace 3: current focus">
              3
            </a>
            <a href="#journey" aria-label="Workspace 4: career journey">
              4
            </a>
          </div>
          <nav aria-label="Primary navigation">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <div className="panel-status">
            <span>NET</span>
            <b>online</b>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="shell hero__grid">
            <div className="hero__copy">
              <p className="path-line">~/profile/current</p>
              <h1>
                <span>Nadav</span> Ben-Haim
              </h1>
              <p className="role-line">
                {site.profile.role} at {site.profile.organization}
              </p>
              <p className="hero__headline">{site.profile.headline}</p>
              <p className="hero__introduction">{site.profile.introduction}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#work">
                  Open selected work <span aria-hidden="true">↓</span>
                </a>
                <ExternalLink className="text-link" href={site.profile.github}>
                  GitHub
                </ExternalLink>
                <ExternalLink
                  className="text-link"
                  href={site.profile.linkedin}
                >
                  LinkedIn
                </ExternalLink>
              </div>
            </div>

            <aside className="hero__side">
              <section
                className="system-summary"
                aria-label="Technical summary"
              >
                {site.profile.systemSummary.map((item) => (
                  <p key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </p>
                ))}
              </section>
              <ProfileTerminal />
            </aside>
          </div>
          <div className="ticker" aria-hidden="true">
            <span>PRODUCTION HAS VETO POWER</span>
            <span>SALSA COUNTS IN EIGHTS</span>
            <span>JAPANESE: STUDYING</span>
            <span>AUTOMATE THE REPETITION</span>
            <span>KEEP THE WEIRD PROTOTYPE</span>
          </div>
        </section>

        <section
          className="work section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="path-line">~/selected-work</p>
                <h2 id="work-heading">Proof, not a keyword cloud.</h2>
              </div>
              <p>
                Four public projects. Each one turns a messy engineering problem
                into a workflow another person can inspect, run, or teach.
              </p>
            </div>

            <article className="feature-project">
              <div className="feature-project__copy">
                <div className="window-title">
                  <span aria-hidden="true">● ● ●</span>
                  <p>wiseowl: review control</p>
                </div>
                <p className="project__role">{wiseOwl.role}</p>
                <h3>{wiseOwl.name}</h3>
                <p className="project__summary">{wiseOwl.summary}</p>
                <dl className="project__facts">
                  <div>
                    <dt>problem</dt>
                    <dd>{wiseOwl.problem}</dd>
                  </div>
                  <div>
                    <dt>decision</dt>
                    <dd>{wiseOwl.why}</dd>
                  </div>
                </dl>
                <TechnologyList values={wiseOwl.technologies} />
                <ProjectMeta values={wiseOwl.metadata} />
                <ExternalLink
                  className="project-link"
                  href={wiseOwl.repository}
                >
                  Inspect repository
                </ExternalLink>
              </div>
              {wiseOwl.image && (
                <figure className="feature-project__visual">
                  <Image
                    alt={wiseOwl.image.alt}
                    height={wiseOwl.image.height}
                    loading="eager"
                    sizes="(max-width: 800px) 100vw, 50vw"
                    src={wiseOwl.image.src}
                    width={wiseOwl.image.width}
                  />
                  <figcaption>
                    <span>[flow]</span> {wiseOwl.detail.steps.join(" → ")}
                  </figcaption>
                </figure>
              )}
            </article>

            <div className="project-mosaic">
              <article className="project-card project-card--pricing">
                <div className="project-card__heading">
                  <p className="project__index">02</p>
                  <div>
                    <p className="project__role">{pricing.role}</p>
                    <h3>{pricing.name}</h3>
                  </div>
                </div>
                <p className="project__summary">{pricing.summary}</p>
                <pre className="tool-call">
                  <code>{`{
  "tool": "compare_regions",
  "context": "architecture",
  "signal": "cost + availability"
}`}</code>
                </pre>
                <TechnologyList values={pricing.technologies} />
                <ProjectMeta values={pricing.metadata} />
                <ExternalLink
                  className="project-link"
                  href={pricing.repository}
                >
                  Inspect repository
                </ExternalLink>
              </article>

              <article className="project-card project-card--sayonara">
                <div className="project-card__heading">
                  <p className="project__index">03</p>
                  <div>
                    <p className="project__role">{sayonara.role}</p>
                    <h3>{sayonara.name}</h3>
                  </div>
                </div>
                <p className="project__summary">{sayonara.summary}</p>
                <ol
                  className="migration-pipeline"
                  aria-label={sayonara.detail.label}
                >
                  {sayonara.detail.steps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <TechnologyList values={sayonara.technologies} />
                <ProjectMeta values={sayonara.metadata} />
                <ExternalLink
                  className="project-link"
                  href={sayonara.repository}
                >
                  Inspect repository
                </ExternalLink>
              </article>

              <article className="project-card project-card--workshop">
                <div className="project-card__heading">
                  <p className="project__index">04</p>
                  <div>
                    <p className="project__role">{workshop.role}</p>
                    <h3>{workshop.name}</h3>
                  </div>
                </div>
                <p className="project__summary">{workshop.summary}</p>
                <div className="runbook">
                  <p>runbook.yml</p>
                  <ol>
                    {workshop.detail.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <TechnologyList values={workshop.technologies} />
                <ProjectMeta values={workshop.metadata} />
                <ExternalLink
                  className="project-link"
                  href={workshop.repository}
                >
                  Inspect repository
                </ExternalLink>
              </article>
            </div>
          </div>
        </section>

        <section
          className="focus section"
          id="focus"
          aria-labelledby="focus-heading"
        >
          <div className="shell focus__grid">
            <div className="focus__intro">
              <p className="path-line">~/operating-loop</p>
              <h2 id="focus-heading">{site.focus.title}</h2>
              <p>{site.focus.introduction}</p>
              <p className="interest-line">
                <span>current signals</span>
                {site.focus.interests.join(" / ")}
              </p>
            </div>
            <ol className="operating-loop">
              {site.focus.loop.map((step, index) => (
                <li key={step.title}>
                  <span className="loop-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="journey section"
          id="journey"
          aria-labelledby="journey-heading"
        >
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="path-line">journalctl --since 2017</p>
                <h2 id="journey-heading">The field of view kept widening.</h2>
              </div>
              <p>
                Support taught consequence. Architecture added range.
                Reliability, developer productivity, and solution engineering
                connected the whole system.
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
                    <ExternalLink
                      className="career__source"
                      href={entry.source}
                    >
                      source
                    </ExternalLink>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="evidence section"
          id="principles"
          aria-labelledby="principles-heading"
        >
          <div className="shell evidence__grid">
            <div className="principles-panel">
              <p className="path-line">/etc/nadav.conf</p>
              <h2 id="principles-heading">Defaults worth keeping.</h2>
              <div className="principles">
                {site.principles.map((principle, index) => (
                  <article key={principle.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <aside
              className="recognition"
              aria-labelledby="recognition-heading"
            >
              <div className="window-title">
                <span aria-hidden="true">● ● ●</span>
                <p>public-record.txt</p>
              </div>
              <h2 id="recognition-heading">Speaking & credentials</h2>
              {site.recognition.map((item) => (
                <article key={`${item.year}-${item.title}`}>
                  <p>{item.year}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.context}</p>
                    <ExternalLink href={item.link}>
                      {item.linkLabel}
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </aside>
          </div>
        </section>

        <section className="beyond section" aria-labelledby="beyond-heading">
          <div className="shell beyond__grid">
            <div className="beyond__copy">
              <p className="path-line">/home/nadav</p>
              <h2 id="beyond-heading">More than the work account.</h2>
              <p className="beyond__text">{site.beyond.introduction}</p>
            </div>
            <div className="pursuits">
              {site.beyond.pursuits.map((pursuit) => (
                <article key={pursuit.path} className="pursuit">
                  <p className="pursuit__path">{pursuit.path}</p>
                  <h3>{pursuit.title}</h3>
                  <p className="pursuit__text">{pursuit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="shell contact__inner">
            <div>
              <p className="path-line">ssh nadav@next-system</p>
              <h2 id="contact-heading">Bring the complicated part.</h2>
              <p>
                Architecture, platforms, AI-assisted engineering, or the
                boundary between them.
              </p>
            </div>
            <div className="contact__actions">
              <ExternalLink
                className="button button--accent"
                href={site.profile.linkedin}
              >
                Connect on LinkedIn
              </ExternalLink>
              <ExternalLink
                className="button button--dark"
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
          <p className="site-footer__status">
            uptime: curious since boot · telemetry: disabled
          </p>
          <ExternalLink href="https://github.com/msftnadavbh/my-website">
            view source
          </ExternalLink>
        </div>
      </footer>
      <script // biome-ignore lint/security/noDangerouslySetInnerHtml: Closed static schema with '<' escaped before injection.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
    </>
  );
}
