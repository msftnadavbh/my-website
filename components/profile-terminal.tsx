"use client";

import { type FormEvent, useState } from "react";
import { runTerminalCommand } from "@/lib/terminal-command";

const suggestions = ["whoami", "uname -a", "ls ~/projects", "sudo hire nadav"];

export function ProfileTerminal() {
  const [command, setCommand] = useState("");
  const [lastCommand, setLastCommand] = useState("whoami");
  const [lines, setLines] = useState<readonly string[]>(
    runTerminalCommand("whoami") ?? [],
  );

  function execute(nextCommand: string) {
    const result = runTerminalCommand(nextCommand);
    setLastCommand(nextCommand);
    setLines(result ?? []);
    setCommand("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (command.trim()) execute(command);
  }

  return (
    <section className="terminal" aria-label="Optional profile terminal">
      <div className="terminal__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>nadav@workstation:~</p>
      </div>

      <div className="terminal__output" aria-live="polite">
        <p className="terminal__prompt">
          <span aria-hidden="true">$</span> {lastCommand}
        </p>
        {lines.length > 0 ? (
          lines.map((line) => <p key={line}>{line}</p>)
        ) : (
          <p className="terminal__empty">screen cleared. still here.</p>
        )}
      </div>

      <form className="terminal__form" onSubmit={submit}>
        <label htmlFor="terminal-command">Try a command</label>
        <div>
          <span aria-hidden="true">$</span>
          <input
            autoComplete="off"
            id="terminal-command"
            onChange={(event) => setCommand(event.target.value)}
            placeholder="help"
            spellCheck={false}
            value={command}
          />
          <button type="submit">run</button>
        </div>
      </form>

      <fieldset className="terminal__suggestions">
        <legend>Suggested commands</legend>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => execute(suggestion)}
            type="button"
          >
            {suggestion}
          </button>
        ))}
      </fieldset>
    </section>
  );
}
