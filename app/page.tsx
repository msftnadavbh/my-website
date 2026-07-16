import Image from "next/image";
import Link from "next/link";
import { ProfileTerminal } from "@/components/profile-terminal";
import { JsonLd, SiteFrame } from "@/components/site-frame";
import { caseStudies, fieldNotes } from "@/content/growth";
import { site } from "@/content/site";
import { profilePageSchema } from "@/lib/seo";

function StudyArtifact({ slug }: { slug: string }) {
  if (slug === "wise-owl-ai-code-review") {
    return (
      <Image
        alt="Wise Owl review packet flowing through focused reviewers to a Prime verdict"
        className="case-row__image"
        height={720}
        sizes="(max-width: 800px) 100vw, 42vw"
        src="/projects/wise-owl-workflow.png"
        width={1280}
      />
    );
  }

  if (slug === "azure-pricing-mcp") {
    return (
      <pre className="artifact-code">
        <code>{`{
  "tool": "compare_regions",
  "decision": "cost + availability",
  "output": "structured evidence"
}`}</code>
      </pre>
    );
  }

  return (
    <ol className="artifact-pipeline" aria-label="Migration sequence">
      {["discover", "audit", "convert", "apply", "validate", "rollback"].map(
        (step) => (
          <li key={step}>{step}</li>
        ),
      )}
    </ol>
  );
}

export default function Home() {
  const note = fieldNotes[0];

  return (
    <SiteFrame>
      <main id="main-content">
        <section className="hero" id="top">
          <div className="shell hero__inner">
            <p className="role-line">Senior Solution Engineer at Microsoft</p>
            <h1>
              I turn cloud and AI architecture into systems teams can ship,
              operate, and trust.
            </h1>
            <p className="hero__introduction">
              Across Azure, Kubernetes, GitHub, and AI, I move from customer
              constraint to working path: architecture, prototypes, production
              signals, and technical enablement.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                Read the case studies
              </a>
              <a
                className="text-link"
                data-analytics-event="contact_linkedin"
                href={site.profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="ticker" aria-hidden="true">
            <span>PRODUCTION HAS VETO POWER</span>
            <span>ARCHITECTURE → WORKING PATH</span>
            <span>PROOF BEFORE PROMISES</span>
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
                <p className="path-line">~/work</p>
                <h2 id="work-heading">Systems with receipts.</h2>
              </div>
              <p>
                Three public case studies: the constraint, my role, the
                decision, and the evidence that closes the loop.
              </p>
            </div>
            <div className="case-rows">
              {caseStudies.map((study, index) => (
                <article className="case-row" key={study.slug}>
                  <div className="case-row__copy">
                    <p className="case-row__number">
                      0{index + 1} / {study.role}
                    </p>
                    <h3>{study.title}</h3>
                    <p>{study.summary}</p>
                    <dl>
                      <div>
                        <dt>Decision</dt>
                        <dd>{study.decisions[0].text}</dd>
                      </div>
                      <div>
                        <dt>Verification</dt>
                        <dd>{study.verification[0]}</dd>
                      </div>
                    </dl>
                    <p className="technology-list">
                      {study.technologies.join(" · ")}
                    </p>
                    <Link
                      className="project-link"
                      data-analytics-event="case_study_open"
                      href={`/work/${study.slug}`}
                    >
                      Read the case study →
                    </Link>
                  </div>
                  <div className="case-row__artifact">
                    <StudyArtifact slug={study.slug} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="note-feature section"
          aria-labelledby="note-heading"
        >
          <div className="shell note-feature__grid">
            <div>
              <p className="path-line">~/notes/latest</p>
              <h2 id="note-heading">{note.title}.</h2>
            </div>
            <div>
              <p>{note.description}</p>
              <Link
                className="button button--accent"
                href={`/notes/${note.slug}`}
              >
                Read the field note
              </Link>
            </div>
          </div>
        </section>

        <section
          className="credibility section"
          id="credibility"
          aria-labelledby="credibility-heading"
        >
          <div className="shell credibility__grid">
            <div>
              <p className="path-line">journalctl --since 2017</p>
              <h2 id="credibility-heading">
                Support depth. Architecture range. Production judgment.
              </h2>
              <p>
                My field of view grew from urgent Azure support and escalation
                into customer architecture, reliability, developer productivity,
                and solution engineering. The through-line is practical: make
                the decision inspectable, build the path, and listen when
                production answers back.
              </p>
            </div>
            <div className="public-record">
              <h3>Selected public record</h3>
              {site.recognition.slice(0, 3).map((item) => (
                <article key={item.title}>
                  <p>{item.year}</p>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.context}</p>
                    <a href={item.link} rel="noreferrer" target="_blank">
                      {item.linkLabel} ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="terminal-reward section"
          aria-labelledby="terminal-heading"
        >
          <div className="shell terminal-reward__grid">
            <div>
              <p className="path-line">/home/nadav</p>
              <h2 id="terminal-heading">Still curious after boot.</h2>
              <p>
                Cloud systems, salsa timing, Japanese study, retro hardware, and
                the occasional unreasonable prototype.
              </p>
            </div>
            <ProfileTerminal />
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-heading">
          <div className="shell contact__inner">
            <div>
              <p className="path-line">ssh nadav@next-system</p>
              <h2 id="contact-heading">Bring the complicated part.</h2>
            </div>
            <a
              className="button button--accent"
              data-analytics-event="contact_linkedin"
              href={site.profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </section>
      </main>
      <JsonLd data={profilePageSchema()} />
    </SiteFrame>
  );
}
