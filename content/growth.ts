export type Source = {
  label: string;
  url: string;
  credit: string;
};

export type Decision = {
  title: string;
  text: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  context: string;
  constraints: readonly string[];
  decisions: readonly Decision[];
  implementation: readonly string[];
  verification: readonly string[];
  lessons: readonly string[];
  technologies: readonly string[];
  sources: readonly Source[];
  published: string;
  modified: string;
};

export type NoteSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type FieldNote = {
  slug: string;
  title: string;
  description: string;
  published: string;
  modified: string;
  topics: readonly string[];
  sections: readonly NoteSection[];
  relatedWork: readonly string[];
};

export const caseStudies = [
  {
    slug: "wise-owl-ai-code-review",
    title: "Wise Owl AI code review",
    summary:
      "A local-first Codex workflow that gives important changes independent, role-specific scrutiny before a final verdict.",
    role: "Creator and maintainer",
    context:
      "AI-assisted engineering can produce convincing output quickly, but one model reviewing its own work is a weak control. Wise Owl turns a second opinion into a repeatable local workflow that another engineer can inspect.",
    constraints: [
      "Keep repository context local and make the review packet explicit.",
      "Separate logic, security, and evidence concerns without hiding disagreement.",
      "Return structured findings that can be consolidated into a decision.",
    ],
    decisions: [
      {
        title: "One compact review packet",
        text: "Give every reviewer the same bounded evidence so findings are comparable and the review does not drift into a fresh repository audit.",
      },
      {
        title: "Focused reviewers before Prime",
        text: "Use independent roles for distinct failure modes, then ask a final reviewer to reconcile the evidence instead of averaging opinions.",
      },
      {
        title: "Schema-shaped output",
        text: "Make findings machine-readable enough to validate while keeping the final verdict useful to a human maintainer.",
      },
    ],
    implementation: [
      "A Python CLI prepares and dispatches the review packet through Codex.",
      "JSON Schema constrains critic and final-review output.",
      "GitHub Actions exercise the public workflow alongside local use.",
    ],
    verification: [
      "Validate each critic packet before it reaches the final reviewer.",
      "Preserve source evidence and dissent in the consolidated verdict.",
      "Keep the workflow runnable from the public repository on Python 3.10 or newer.",
    ],
    lessons: [
      "Independent review is most useful when every role has a narrow question.",
      "A verdict is stronger when it shows its evidence and unresolved uncertainty.",
      "Local-first review keeps the control close to the code and the engineer making the change.",
    ],
    technologies: ["Python", "Codex", "JSON Schema", "GitHub Actions"],
    sources: [
      {
        label: "Wise Owl repository",
        url: "https://github.com/msftnadavbh/wiseowl",
        credit: "Created and maintained by Nadav Ben-Haim; MIT licensed.",
      },
    ],
    published: "2026-07-16",
    modified: "2026-07-16",
  },
  {
    slug: "azure-pricing-mcp",
    title: "Azure pricing MCP",
    summary:
      "A maintained MCP server that brings structured Azure pricing, estimates, comparisons, and cost signals into architecture conversations.",
    role: "Maintainer and contributor; original project by Chris Harris",
    context:
      "Cloud cost decisions are most valuable while an architecture can still change. AzurePricingMCP makes public Azure pricing and related signals callable from an AI client instead of leaving them in a separate lookup workflow.",
    constraints: [
      "Represent changing public pricing through explicit tool inputs and outputs.",
      "Keep estimates explainable rather than presenting them as billing truth.",
      "Cover regional, Spot, network, and waste signals without collapsing them into one opaque answer.",
    ],
    decisions: [
      {
        title: "Tools follow architecture questions",
        text: "Expose focused operations for comparisons, estimates, Spot risk, network cost, and waste so callers can choose the right signal.",
      },
      {
        title: "Cost stays contextual",
        text: "Return structured data that an engineer can combine with availability, workload shape, and operational constraints.",
      },
      {
        title: "Credit remains visible",
        text: "Maintain and extend the public project while clearly preserving Chris Harris's authorship of the original work.",
      },
    ],
    implementation: [
      "Python MCP tools wrap Azure pricing and adjacent public cloud-cost data.",
      "Inputs describe the workload or comparison instead of relying on free-form scraping.",
      "Outputs stay suitable for both AI clients and human inspection.",
    ],
    verification: [
      "Check tool contracts against representative region, estimate, and comparison requests.",
      "Keep public documentation aligned with the server's exposed tool set.",
      "Treat every estimate as an architecture aid that still requires billing validation.",
    ],
    lessons: [
      "FinOps works better when cost appears beside the design decision.",
      "Small, named tools are easier to reason about than one universal pricing prompt.",
      "Structured output makes assumptions easier to inspect and correct.",
    ],
    technologies: ["Python", "Model Context Protocol", "Azure APIs", "FinOps"],
    sources: [
      {
        label: "AzurePricingMCP repository",
        url: "https://github.com/msftnadavbh/AzurePricingMCP",
        credit:
          "Originally created by Chris Harris; maintained and extended by Nadav Ben-Haim.",
      },
    ],
    published: "2026-07-16",
    modified: "2026-07-16",
  },
  {
    slug: "aks-gateway-api-migration",
    title: "AKS Gateway API migration",
    summary:
      "Sayonara makes an AKS ingress migration explicit: discover, audit, convert, apply, validate, and keep a rollback path.",
    role: "Creator and maintainer",
    context:
      "Moving AKS applications from NGINX Ingress to Gateway API is an operational migration, not a manifest search-and-replace. Sayonara packages the sequence for Application Gateway for Containers or Envoy Gateway into a visible CLI workflow.",
    constraints: [
      "Discover existing ingress behavior before generating replacements.",
      "Surface compatibility and controller choices before applying manifests.",
      "Keep validation and rollback in the same workflow as conversion.",
    ],
    decisions: [
      {
        title: "Sequence over magic",
        text: "Expose each migration phase so operators can stop, inspect, and correct the path before the next change.",
      },
      {
        title: "Audit before conversion",
        text: "Treat annotations and controller-specific behavior as design inputs instead of silently discarding them.",
      },
      {
        title: "Rollback is part of the plan",
        text: "Keep the previous route and a reversal path visible until the new gateway behavior is verified.",
      },
    ],
    implementation: [
      "A Python CLI discovers Kubernetes ingress resources and audits migration compatibility.",
      "The workflow generates Gateway API resources for the selected AKS path.",
      "Apply, validation, and rollback stages stay explicit rather than being hidden behind one command.",
    ],
    verification: [
      "Inspect generated resources before applying them to a cluster.",
      "Validate routing behavior and readiness after the gateway change.",
      "Retain a tested rollback path until the migrated traffic is accepted.",
    ],
    lessons: [
      "A safe migration preserves the reasoning between old and new behavior.",
      "Compatibility checks belong before resource generation.",
      "The production signal decides whether the new architecture is finished.",
    ],
    technologies: ["Python", "Kubernetes", "AKS", "Gateway API"],
    sources: [
      {
        label: "Sayonara repository",
        url: "https://github.com/msftnadavbh/Sayonara",
        credit: "Created and maintained by Nadav Ben-Haim.",
      },
    ],
    published: "2026-07-16",
    modified: "2026-07-16",
  },
] as const satisfies readonly CaseStudy[];

export const fieldNotes = [
  {
    slug: "production-has-veto-power",
    title: "Production has veto power",
    description:
      "A practical operating loop for turning cloud and AI architecture into systems teams can ship, observe, and trust.",
    published: "2026-07-16",
    modified: "2026-07-16",
    topics: [
      "Cloud architecture",
      "AI engineering",
      "Reliability",
      "Operations",
    ],
    sections: [
      {
        heading: "Architecture starts with a constraint",
        paragraphs: [
          "Useful architecture begins with the actual workload, team, risk, cost, and operating boundaries. A diagram that ignores those constraints can be internally elegant and still fail the people expected to run it.",
          "Write the constraints beside the design. That turns assumptions into things a customer, developer, security reviewer, or operator can challenge before they become production behavior.",
        ],
      },
      {
        heading: "Build the path, not only the answer",
        paragraphs: [
          "A recommendation becomes credible when a team can follow it. The working path might be a prototype, migration sequence, paved road, MCP tool, runbook, or review control. Its form matters less than whether another person can use and inspect it.",
          "Keep decisions visible. Automation should remove repetition without erasing the trade-offs someone will need during an incident or the next migration.",
        ],
      },
      {
        heading: "Let production answer back",
        paragraphs: [
          "Tests and architecture reviews are necessary signals, but they are not the final environment. Observe readiness, routing, cost, failures, and operator friction once the path meets a real system.",
          "When production contradicts the diagram, production wins. Feed that evidence into the next decision instead of defending the original model.",
        ],
      },
      {
        heading: "Close the loop",
        paragraphs: [
          "The operating loop is simple: frame the system, make trade-offs explicit, build the path people use, observe production behavior, and feed the evidence back.",
          "The point is not ceremony. It is to shorten the distance between an architecture conversation and a system a team can ship, operate, and trust.",
        ],
      },
    ],
    relatedWork: [
      "wise-owl-ai-code-review",
      "azure-pricing-mcp",
      "aks-gateway-api-migration",
    ],
  },
] as const satisfies readonly FieldNote[];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFieldNote(slug: string) {
  return fieldNotes.find((note) => note.slug === slug);
}

export function caseStudyParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export function fieldNoteParams() {
  return fieldNotes.map(({ slug }) => ({ slug }));
}
