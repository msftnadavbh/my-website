const output = {
  help: ["help · whoami · uname -a · ls ~/projects", "sudo hire nadav · clear"],
  whoami: [
    "Nadav Ben-Haim · Senior Solution Engineer @ Microsoft",
    "cloud architecture · kubernetes · ai · developer tools",
  ],
  "uname -a": [
    "NadavOS cloud-native #1 SMP PREEMPT_DYNAMIC",
    "azure/aks · github · ai-agents · x86_64-curious",
  ],
  "ls ~/projects": ["wiseowl/  AzurePricingMCP/  Sayonara/  copilot-workshop/"],
  "sudo hire nadav": [
    "sudo: approval required from nadav",
    "hint: LinkedIn is the supported escalation path ↗",
  ],
} as const;

export function runTerminalCommand(input: string): readonly string[] | null {
  const command = input.trim().replace(/\s+/g, " ");
  if (command === "clear") return null;
  if (command in output) return output[command as keyof typeof output];
  return [
    `bash: ${command}: command not found`,
    "type `help` for the useful commands",
  ];
}
