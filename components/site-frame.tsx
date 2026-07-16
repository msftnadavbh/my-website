import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

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

export function SiteHeader() {
  return (
    <header className="desktop-panel">
      <div className="desktop-panel__inner">
        <Link className="panel-host" href="/">
          <span aria-hidden="true">●</span>
          <span className="panel-host__label">nadav@workstation</span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul>
            <li>
              <Link href="/#work">Work</Link>
            </li>
            <li>
              <Link href="/notes">Notes</Link>
            </li>
            <li>
              <Link href="/#credibility">About</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
        <div className="panel-status" aria-label="System online" role="status">
          <span>NET</span>
          <b>online</b>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <p>
          © {new Date().getFullYear()} {site.profile.name}
        </p>
        <nav aria-label="Footer navigation">
          <Link href="/notes">Field notes</Link>
          <Link href="/feed.xml">RSS</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
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
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

export function JsonLd({ data }: { data: object | readonly object[] }) {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated only from typed local content and escapes opening brackets.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
