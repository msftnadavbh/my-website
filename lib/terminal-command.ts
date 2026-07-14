const output = {
  help: [
    "help · whoami · man nadav · uname -a",
    "ls ~/projects · cat /etc/motd · uptime · fortune · clear",
  ],
  whoami: [
    "Nadav Ben-Haim · Senior Solution Engineer @ Microsoft",
    "cloud architecture · kubernetes · ai · developer tools",
  ],
  "man nadav": [
    "NADAV(1)                User Commands                NADAV(1)",
    "NAME        nadav: architect, builder, reviewer, teacher",
    "SYNOPSIS    nadav [--cloud] [--platform] [--agents] [--evidence]",
    "BUGS        weak assumptions may be challenged",
  ],
  "uname -a": [
    "NadavOS cloud-native #1 SMP PREEMPT_DYNAMIC",
    "azure/aks · github · ai-agents · x86_64-curious",
  ],
  "ls ~/projects": [
    "wiseowl/  AzurePricingMCP/  Sayonara/  ghas-workshop-zero2hero/",
  ],
  "cat /etc/motd": [
    "Build the complicated thing. Keep the interface boring.",
    "Production gets the final vote.",
  ],
  uptime: ["up: curious since boot · load: ambitious, practical, shipping"],
  fortune: ["Cost is part of architecture. So is the rollback plan."],
  "sudo hire nadav": [
    "nadav is not in the sudoers file. This incident will be reported.",
    "supported escalation path: https://www.linkedin.com/in/nadavbh",
  ],
} as const;

const productionGuard = [
  "rm: cannot remove 'production': Permission denied",
  "guardrails are working as intended",
] as const;

export function runTerminalCommand(input: string): readonly string[] | null {
  const command = input.trim().replace(/\s+/g, " ");
  if (command === "clear") return null;
  if (command === "rm -rf production" || command === "rm -rf /") {
    return productionGuard;
  }
  if (command in output) return output[command as keyof typeof output];
  return [
    `bash: ${command}: command not found`,
    "type `help` for the useful commands",
  ];
}
