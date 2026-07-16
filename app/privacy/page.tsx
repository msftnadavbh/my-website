import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-frame";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy",
  description:
    "How this site handles optional analytics and local preferences.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <main className="content-page" id="main-content">
        <header className="content-hero shell">
          <p className="path-line">~/privacy</p>
          <h1>Privacy.</h1>
          <p className="content-hero__lede">
            The short version: this site works without analytics, accounts, or a
            contact form.
          </p>
        </header>
        <article className="content-body shell">
          <section>
            <h2>Optional analytics</h2>
            <p>
              If a GA4 measurement ID is configured, the site asks before
              loading Google Analytics. No GA request is made before acceptance.
              Declining keeps analytics disabled.
            </p>
            <p>
              After acceptance, the site records page views and three named
              interactions: opening a case study, opening a repository, and
              using the LinkedIn contact link. These events contain no form
              values or personal profile data.
            </p>
          </section>
          <section>
            <h2>Local preferences</h2>
            <p>
              Matrix mode and the analytics choice are stored in your browser's
              local storage. Use the “Privacy choices” control to revisit
              analytics consent. Clearing this site's storage removes both
              preferences.
            </p>
          </section>
          <section>
            <h2>External sites</h2>
            <p>
              Repository, event, and LinkedIn links open third-party services
              with their own privacy practices. This site does not proxy or
              enrich those requests.
            </p>
          </section>
          <p className="content-date">
            Last updated: <time dateTime="2026-07-16">16 July 2026</time>
          </p>
        </article>
      </main>
    </SiteFrame>
  );
}
