export type Project = {
  name: string;
  repository: string;
  role: string;
  summary: string;
  problem: string;
  why: string;
  technologies: readonly string[];
  metadata: readonly string[];
  detail: {
    label: string;
    steps: readonly string[];
  };
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Experience = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  source?: string;
};

export type Recognition = {
  year: string;
  title: string;
  context: string;
  link: string;
  linkLabel: string;
};

export type SiteContent = {
  profile: {
    name: string;
    role: string;
    organization: string;
    headline: string;
    introduction: string;
    github: string;
    linkedin: string;
  };
  nav: readonly { label: string; href: string }[];
  focus: {
    title: string;
    introduction: string;
    loop: readonly { title: string; text: string }[];
    interests: readonly string[];
  };
  projects: readonly Project[];
  experience: readonly Experience[];
  principles: readonly { title: string; text: string }[];
  recognition: readonly Recognition[];
  beyond: string;
};

export const site = {
  profile: {
    name: "Nadav Ben-Haim",
    role: "Senior Solution Engineer",
    organization: "Microsoft",
    headline:
      "I build cloud platforms, developer tools, and AI workflows for the point where the diagram meets production.",
    introduction:
      "Senior Solution Engineer at Microsoft, working with Digital Native customers across Azure, GitHub, Kubernetes, and AI.",
    github: "https://github.com/msftnadavbh",
    linkedin: "https://www.linkedin.com/in/nadavbh",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Focus", href: "#focus" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  focus: {
    title: "Current focus",
    introduction:
      "The interesting work is rarely one technology. It is the loop that connects constraints, delivery, operations, and what the team learns next.",
    loop: [
      {
        title: "Constraints + cost",
        text: "Start with the real workload, team, risk, and economic boundaries.",
      },
      {
        title: "Architecture",
        text: "Turn those boundaries into explicit system decisions and trade-offs.",
      },
      {
        title: "Platform + delivery",
        text: "Build the paved road, automation, and feedback paths developers actually use.",
      },
      {
        title: "Reliability signals",
        text: "Observe behavior in production and make operability part of the design.",
      },
      {
        title: "Review + learning",
        text: "Use evidence, independent review, and incidents to update the next decision.",
      },
    ],
    interests: [
      "Agentic software development",
      "AI engineering",
      "Model Context Protocol",
      "Kubernetes platforms",
      "Azure architecture",
      "Developer productivity",
      "Cloud cost intelligence",
    ],
  },
  projects: [
    {
      name: "Wise Owl",
      repository: "https://github.com/msftnadavbh/wiseowl",
      role: "Created and maintained by Nadav",
      summary:
        "A local-first Codex workflow that asks focused reviewers to challenge a change before a final reviewer consolidates the evidence.",
      problem:
        "AI-assisted development can produce plausible output without enough independent scrutiny. Wise Owl creates a repeatable second-opinion loop for logic, security, and proof.",
      why: "It treats AI review as an engineering control: scoped roles, structured findings, and a final verdict instead of one model grading its own work.",
      technologies: ["Python", "Codex", "JSON Schema", "GitHub Actions"],
      metadata: ["v0.1.0 tag", "MIT licensed", "Python 3.10+"],
      detail: {
        label: "Review flow",
        steps: ["Review packet", "Focused owls", "Prime verdict"],
      },
      image: {
        src: "/projects/wise-owl-workflow.png",
        alt: "Wise Owl workflow showing a review packet sent to focused reviewers and consolidated by Prime Owl",
        width: 1280,
        height: 720,
      },
    },
    {
      name: "AzurePricingMCP",
      repository: "https://github.com/msftnadavbh/AzurePricingMCP",
      role: "Maintained and extended by Nadav; originally created by Chris Harris",
      summary:
        "An MCP server that gives AI clients structured access to Azure pricing, comparisons, estimates, Spot data, network costs, and related cloud cost signals.",
      problem:
        "Public cloud pricing is rich but awkward to reason over inside an engineering conversation. The server turns it into callable tools with explicit inputs and outputs.",
      why: "It brings FinOps closer to architecture work, where cost choices can still change the design rather than merely explain the bill.",
      technologies: ["Python", "MCP", "Azure APIs", "FinOps"],
      metadata: ["v4.1.0 beta", "19 MCP tools", "MIT licensed"],
      detail: {
        label: "Example tools",
        steps: [
          "Compare regions",
          "Estimate workloads",
          "Inspect Spot risk",
          "Find waste",
        ],
      },
    },
    {
      name: "Sayonara",
      repository: "https://github.com/msftnadavbh/Sayonara",
      role: "Created and maintained by Nadav",
      summary:
        "A command-line migration workflow for moving AKS applications from NGINX Ingress to Gateway API using Application Gateway for Containers or Envoy Gateway.",
      problem:
        "Ingress migration is a sequence of discovery, compatibility decisions, manifest conversion, and production validation. It is not a search-and-replace exercise.",
      why: "The tool makes that sequence visible and reversible, including audit and validation stages plus an explicit rollback path.",
      technologies: ["Python", "Kubernetes", "AKS", "Gateway API"],
      metadata: ["v1.0.0 beta", "CLI workflow", "Python 3.10+"],
      detail: {
        label: "Migration pipeline",
        steps: [
          "Discover",
          "Audit",
          "Convert",
          "Apply",
          "Validate",
          "Rollback",
        ],
      },
    },
    {
      name: "GHAS Zero to Hero Workshop",
      repository: "https://github.com/msftnadavbh/ghas-workshop-zero2hero",
      role: "Created and maintained by Nadav",
      summary:
        "A hands-on GitHub Advanced Security workshop built around intentionally vulnerable code, real alerts, and guided remediation.",
      problem:
        "Security tooling only becomes useful when developers can connect alerts to vulnerable code, understand the finding, and practice fixing it.",
      why: "It turns dependency review, CodeQL, secret scanning, Dependabot, and repository rules into a workshop another facilitator can run from fundamentals through custom security automation.",
      technologies: [
        "GitHub Advanced Security",
        "CodeQL",
        "Dependabot",
        "Java",
      ],
      metadata: ["~3.5-hour workshop", "6 hands-on phases", "MIT licensed"],
      detail: {
        label: "Learning path",
        steps: [
          "Inventory",
          "Scan",
          "Protect",
          "Remediate",
          "Scale",
          "Automate",
        ],
      },
    },
  ],
  experience: [
    {
      period: "2017 to 2019",
      title: "Support escalation",
      organization: "Microsoft Azure Rapid Response",
      summary:
        "Worked deep in urgent Azure support cases, where technical decisions had immediate operational consequences.",
      source:
        "https://www.linkedin.com/pulse/working-microsoft-dreamersstory-nadav-ben-haim",
    },
    {
      period: "2019 to 2022",
      title: "Cloud solution architecture",
      organization: "Microsoft Customer Success",
      summary:
        "Moved from incident depth into customer-facing architecture, connecting application and platform decisions to adoption and delivery.",
      source:
        "https://www.linkedin.com/pulse/fasttrack-azure-your-next-career-step-nadav-ben-haim",
    },
    {
      period: "2022 to 2025",
      title: "FastTrack engineering and Azure reliability",
      organization: "Microsoft Azure CXP",
      summary:
        "Worked across technical enablement, architecture reviews, reliability, and site reliability engineering inside Azure's customer experience organization.",
      source:
        "https://www.linkedin.com/pulse/fasttrack-azure-your-next-career-step-nadav-ben-haim",
    },
    {
      period: "2025",
      title: "Senior Developer Productivity GBB",
      organization: "Microsoft MCAPS, App Innovation",
      summary:
        "Focused on developer productivity, GitHub, and application innovation across customer engineering conversations.",
      source:
        "https://www.linkedin.com/posts/nadavbh_who-wouldve-thought-in-2-months-ill-activity-7301863799953747968-oYHv",
    },
    {
      period: "2025 to now",
      title: "Senior Solution Engineer",
      organization: "Microsoft, Digital Natives",
      summary:
        "Works with Digital Native customers across Azure, GitHub, Kubernetes, AI, and the architecture choices connecting them.",
      source:
        "https://www.linkedin.com/posts/nadavbh_msftadvocate-microsoft-activity-7356710711886077952-XVO9",
    },
  ],
  principles: [
    {
      title: "Make the diagram earn its keep.",
      text: "Start with the diagram; finish with something observable, testable, and operable.",
    },
    {
      title: "Bring evidence into the room.",
      text: "Treat tests, telemetry, and independent review as engineering inputs, not ceremony.",
    },
    {
      title: "Automate the repetition, preserve the reasoning.",
      text: "Remove friction without hiding the decisions people still need to understand.",
    },
    {
      title: "Design the inconvenient paths early.",
      text: "Work through rollback and cost while change is still cheap.",
    },
    {
      title: "Teach for the second operator.",
      text: "Write and explain the system clearly enough that someone else can run it.",
    },
  ],
  recognition: [
    {
      year: "2026",
      title: "GitHub Copilot CLI webinar",
      context:
        "Technical session on moving from terminal commands to agentic workflows.",
      link: "https://www.u-btech.com/github-copilot-cli-20-4-26/",
      linkLabel: "Event page",
    },
    {
      year: "2025",
      title: "GitHub latest & greatest",
      context: "Co-speaker at Microsoft AI Tour Tel Aviv.",
      link: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/mcaps/dau/documents/fy25/Microsoft-AI-Tour-Tel-Aviv-Agenda.pdf",
      linkLabel: "Official agenda",
    },
    {
      year: "2022",
      title: "Taking Containers and K8S to the Next Level",
      context: "Co-speaker at Microsoft Cloud Azure Summit.",
      link: "https://microsoft-cloud-azure-summit-22.events.co.il/people/6795-nadav-ben-haim",
      linkLabel: "Session profile",
    },
    {
      year: "2021",
      title: "Certified Kubernetes Administrator",
      context:
        "Completed the CKA and published a practical preparation guide. Historical credential.",
      link: "https://www.linkedin.com/pulse/acing-cka-helmsmans-guide-nadav-ben-haim",
      linkLabel: "Read the guide",
    },
    {
      year: "2020",
      title: "Azure Solutions Architect Expert",
      context:
        "Earned the Microsoft certification. Historical credential; public profile lists it as expired in 2022.",
      link: "https://www.linkedin.com/in/nadavbh",
      linkLabel: "LinkedIn profile",
    },
  ],
  beyond:
    "Beyond engineering, Nadav teaches salsa, studies Japanese, and keeps a soft spot for retro handhelds, creature-collecting games, anime, and Japan. Some of the best prototypes start as ideas that sound slightly unreasonable.",
} as const satisfies SiteContent;
