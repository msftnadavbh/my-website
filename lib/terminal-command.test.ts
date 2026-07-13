import assert from "node:assert/strict";
import test from "node:test";
import { runTerminalCommand } from "./terminal-command.ts";

test("lists the small supported command set", () => {
  assert.deepEqual(runTerminalCommand("help"), [
    "help · whoami · uname -a · ls ~/projects",
    "sudo hire nadav · clear",
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
    "sudo: approval required from nadav",
    "hint: LinkedIn is the supported escalation path ↗",
  ]);
});

test("clears output and reports unknown commands", () => {
  assert.equal(runTerminalCommand("clear"), null);
  assert.deepEqual(runTerminalCommand("kubectl vibes"), [
    "bash: kubectl vibes: command not found",
    "type `help` for the useful commands",
  ]);
});
