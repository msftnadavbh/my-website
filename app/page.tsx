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

      <header className="desktop-panel">
        <div className="desktop-panel__inner">
          <a className="panel-host" href="#top">
            <span aria-hidden="true">●</span> nadav@workstation
          </a>
          <div className="workspaces" aria-hidden="true">
            <span className="is-active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
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
                <p>
                  <span>host</span>
                  <strong>cloud-native</strong>
                </p>
                <p>
                  <span>shell</span>
                  <strong>architecture + implementation</strong>
                </p>
                <p>
                  <span>active</span>
                  <strong>AKS · AI agents · developer tools</strong>
                </p>
                <p>
                  <span>mode</span>
                  <strong>curious / practical</strong>
                </p>
              </section>
              <ProfileTerminal />
            </aside>
          </div>
          <div className="ticker" aria-hidden="true">
            <span>AZURE</span>
            <span>KUBERNETES</span>
            <span>PLATFORM ENGINEERING</span>
            <span>AI AGENTS</span>
            <span>DEVELOPER PRODUCTIVITY</span>
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
                  <p>wiseowl — review control</p>
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
                <p>{pricing.why}</p>
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
                <p>{sayonara.why}</p>
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
                <p>{workshop.why}</p>
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
              <p className="path-line">systemctl --user status</p>
              <h2 id="focus-heading">What is running now.</h2>
              <p>{site.focus.introduction}</p>
              <p className="interest-line">
                {site.focus.interests.join(" / ")}
              </p>
            </div>
            <ol className="service-list">
              {site.focus.loop.map((step, index) => (
                <li key={step.title}>
                  <span className="service-state">active</span>
                  <span className="service-index">0{index + 1}</span>
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
              <p className="beyond__text">{site.beyond}</p>
            </div>
            <pre
              className="ascii-mark"
              aria-hidden="true"
            >{`┌─ /home/nadav ────────┐
│ dance.step()          │
│ teach.share()         │
│ build.for_fun()       │
│ curiosity++           │
└───────────────────────┘`}</pre>
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
          <p>uptime: curious since boot · telemetry: disabled</p>
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
