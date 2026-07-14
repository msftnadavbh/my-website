import assert from "node:assert/strict";
import test from "node:test";
import { runTerminalCommand } from "./terminal-command.ts";

test("lists the small supported command set", () => {
  assert.deepEqual(runTerminalCommand("help"), [
    "help · whoami · man nadav · uname -a",
    "ls ~/projects · cat /etc/motd · uptime · fortune · clear",
  ]);
});

test("serves dry manual, message, uptime, and fortune output", () => {
  assert.deepEqual(runTerminalCommand("man nadav"), [
    "NADAV(1)                User Commands                NADAV(1)",
    "NAME        nadav: architect, builder, reviewer, teacher",
    "SYNOPSIS    nadav [--cloud] [--platform] [--agents] [--evidence]",
    "BUGS        weak assumptions may be challenged",
  ]);
  assert.deepEqual(runTerminalCommand("cat /etc/motd"), [
    "Build the complicated thing. Keep the interface boring.",
    "Production gets the final vote.",
  ]);
  assert.deepEqual(runTerminalCommand("uptime"), [
    "up: curious since boot · load: ambitious, practical, shipping",
  ]);
  assert.deepEqual(runTerminalCommand("fortune"), [
    "Cost is part of architecture. So is the rollback plan.",
  ]);
});

test("returns Linux-flavored profile and project output", () => {
  assert.deepEqual(runTerminalCommand("uname -a"), [
    "NadavOS cloud-native #1 SMP PREEMPT_DYNAMIC",
    "azure/aks · github · ai-agents · x86_64-curious",
  ]);
  assert.deepEqual(runTerminalCommand("ls ~/projects"), [
    "wiseowl/  AzurePricingMCP/  Sayonara/  copilot-workshop/",
  ]);
});

test("keeps the hiring joke connected to a real contact path", () => {
  assert.deepEqual(runTerminalCommand("sudo hire nadav"), [
    "nadav is not in the sudoers file. This incident will be reported.",
    "supported escalation path: https://www.linkedin.com/in/nadavbh",
  ]);
});

test("protects production from destructive commands", () => {
  const expected = [
    "rm: cannot remove 'production': Permission denied",
    "guardrails are working as intended",
  ];

  assert.deepEqual(runTerminalCommand("rm -rf production"), expected);
  assert.deepEqual(runTerminalCommand("rm -rf /"), expected);
});

test("normalizes command whitespace and keeps hidden commands out of help", () => {
  assert.deepEqual(runTerminalCommand("  cat   /etc/motd  "), [
    "Build the complicated thing. Keep the interface boring.",
    "Production gets the final vote.",
  ]);
  assert.equal(runTerminalCommand("help")?.join(" ").includes("sudo"), false);
  assert.equal(runTerminalCommand("help")?.join(" ").includes("rm -rf"), false);
});

test("clears output and reports unknown commands", () => {
  assert.equal(runTerminalCommand("clear"), null);
  assert.deepEqual(runTerminalCommand("kubectl vibes"), [
    "bash: kubectl vibes: command not found",
    "type `help` for the useful commands",
  ]);
});
